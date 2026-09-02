// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { remarkMermaid } from './src/plugins/remark-mermaid.mjs';

/*
 * サイトは2つの層に分かれている。
 *
 *   1. ポートフォリオ（/  /works/  /about/  /privacy/）
 *      素の Astro ページ（src/pages/）。Starlight のレイアウトを一切通さない。
 *      Astro はファイルベースのルートをインテグレーションの注入ルートより優先するため、
 *      src/pages/ に置いたページがそのまま勝つ。
 *
 *   2. VibeCode Mobile ガイド（/vibecode-mobile/ と各フェーズ）
 *      Starlight。サイドバー・検索・目次といったドキュメント機能が要るのはここだけ。
 *
 * 見た目は src/styles/custom.css で寄せているが、DOM は完全に別。
 * ポートフォリオ側に docs のヘッダーが二重に乗ることはもう無い。
 */
export default defineConfig({
	site: 'https://googja.dev',
	// ```mermaid を Expressive Code に渡す前に <pre class="mermaid"> へ変換する。
	// 描画は下の head スクリプト（mermaid.js）が引き受ける。
	markdown: {
		remarkPlugins: [remarkMermaid],
	},
	integrations: [
		starlight({
			title: 'VibeCode Mobile',
			description: 'ExpoとAIでモバイルアプリを企画・実装・公開・収益化するための実践ガイド。',
			favicon: '/favicon.svg',
			// 404 はポートフォリオ側（src/pages/404.astro）で出す。
			// 有効なままだと Starlight の 404 とルートが衝突して警告になる。
			disable404Route: true,
			customCss: ['./src/styles/custom.css'],
			components: {
				// ヘッダーの見出しを「googja.dev / VibeCode Mobile」のパンくずに差し替える。
				SiteTitle: './src/components/GuideTitle.astro',
			},
			head: [
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				},
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap',
					},
				},
				{
					tag: 'script',
					attrs: {
						src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7543104245383277',
						async: true,
						crossorigin: 'anonymous',
					},
				},
				{
					tag: 'script',
					attrs: {
						src: 'https://www.googletagmanager.com/gtag/js?id=G-5ZWD1BZHLD',
						async: true,
					},
				},
				{
					tag: 'script',
					content: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5ZWD1BZHLD');
`,
				},
				{
					// mermaid の図を紙・墨・朱で描き、ライト/ダークの切り替えに追従させる。
					// 記法の変換は src/plugins/remark-mermaid.mjs が済ませている。
					tag: 'script',
					attrs: { type: 'module' },
					content: `
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

const palette = {
  light: {
    ink: '#131313',
    body: '#3a3a37',
    paper: '#f2f0ea',
    surface: '#e9e6de',
    hairline: '#a9a49a',
    accent: '#bd3117',
  },
  dark: {
    ink: '#f5f3ee',
    body: '#c8c5be',
    paper: '#0c0c0d',
    surface: '#1c1c1f',
    hairline: '#55545a',
    accent: '#ff5c36',
  },
};

let seq = 0;

async function render() {
  const blocks = Array.from(document.querySelectorAll('pre.mermaid'));
  if (!blocks.length) return;

  // mermaid はラベル幅を実測してから箱を描く。Web フォント（Space Grotesk）の
  // 読み込み前に測るとフォールバック幅で確定してしまい、日本語ラベルが切れる。
  if (document.fonts && document.fonts.ready) {
    try { await document.fonts.ready; } catch {}
  }

  const c = palette[document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'];

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    htmlLabels: false,
    // 図のラベルには Web フォント（Space Grotesk）を使わない。
    // 読み込み完了前に幅を実測してしまうと、あとから字幅が変わってラベルが箱から切れる。
    // 最初から端末にあるフォントだけを指定すれば、実測値と描画結果が食い違わない。
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Noto Sans JP', 'Yu Gothic', Meiryo, sans-serif",
    theme: 'base',
    // ラベルは HTML ではなく SVG の <text> で描く。
    // foreignObject の中の HTML は、SVG を段組み幅に縮小したときにブラウザが
    // 再レイアウトしてしまい、日本語の末尾が欠ける。SVG テキストなら素直に拡縮される。
    flowchart: { htmlLabels: false, padding: 12, nodeSpacing: 40, rankSpacing: 48 },
    themeVariables: {
      background: c.paper,
      primaryColor: c.surface,
      primaryTextColor: c.ink,
      primaryBorderColor: c.hairline,
      secondaryColor: c.surface,
      tertiaryColor: c.paper,
      lineColor: c.accent,
      textColor: c.body,
      mainBkg: c.surface,
      nodeBorder: c.hairline,
      clusterBkg: c.paper,
      clusterBorder: c.hairline,
      edgeLabelBackground: c.paper,
    },
  });

  for (const el of blocks) {
    const source = el.dataset.mermaidSource;
    if (!source) continue;
    try {
      const { svg } = await mermaid.render('mermaid-svg-' + seq++, source);
      el.innerHTML = svg;
      el.dataset.processed = 'true';
    } catch {
      // 描画に失敗したらソースをそのまま見せる（黙って消えるより良い）。
      el.textContent = source;
      delete el.dataset.processed;
    }
  }
}

render();
// Starlight のビュートランジションとテーマ切り替えの両方に追従する。
document.addEventListener('astro:after-swap', render);
new MutationObserver(render).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-theme'],
});
`,
				},
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sangraal123' }],
			sidebar: [
				{
					label: 'ガイドについて',
					items: [
						{ label: 'VibeCode Mobile とは', link: '/vibecode-mobile/' },
						{
							label: 'googja.dev（ポートフォリオ）',
							link: '/',
							attrs: { 'data-back-to-site': 'true' },
						},
					],
				},
				{ label: 'Phase01：準備編', autogenerate: { directory: 'prep' } },
				{ label: 'Phase02：リサーチ編', autogenerate: { directory: 'research' } },
				{ label: 'Phase03：リデザイン編', autogenerate: { directory: 'redesign' } },
				{ label: 'Phase04：コーディング編', autogenerate: { directory: 'coding' } },
				{ label: 'Phase05：フィードバック編', autogenerate: { directory: 'feedback' } },
				{ label: 'Phase06：公開＆マネタイズ編', autogenerate: { directory: 'publish' } },
				{ label: 'PhaseEx：応用事項編', autogenerate: { directory: 'advanced' } },
				{ label: 'PhaseSec：セキュリティ編', autogenerate: { directory: 'security' } },
			],
		}),
	],
});
