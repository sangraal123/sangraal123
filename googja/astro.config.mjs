// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'VibeCode Mobile',
			head: [
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sangraal123/sangraal123' }],
			sidebar: [
				{
					label: 'Phase 1: 準備編（仮）',
					autogenerate: { directory: 'prep' },
				},
				{
					label: 'Phase 2: Expo基礎編（仮）',
					autogenerate: { directory: 'expo' },
				},
				{
					label: 'Phase 3: フロントエンド編（仮）',
					autogenerate: { directory: 'frontend' },
				},
				{
					label: 'Phase 4: バックエンド編（仮）',
					autogenerate: { directory: 'backend' },
				},
				{
					label: 'Phase 5: データベース編（仮）',
					autogenerate: { directory: 'database' },
				},
				{
					label: 'Phase 6: Expo応用編（仮）',
					autogenerate: { directory: 'advanced' },
				},
				{
					label: 'Phase 7: 収益化・公開編（仮）',
					autogenerate: { directory: 'publish' },
				},
				{
					label: 'Phase Ex: 品質改善・セキュリティ編（仮）',
					autogenerate: { directory: 'security' },
				},
			],
		}),
	],
});
