// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
			],
		}),
	],
});
