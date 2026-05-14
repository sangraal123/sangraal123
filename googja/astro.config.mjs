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
					label: 'Phase01：準備編（仮）',
					autogenerate: { directory: 'prep' },
				},
				{
					label: 'Phase02：リサーチ編（仮）',
					autogenerate: { directory: 'research' },
				},
				{
					label: 'Phase03：リデザイン編（仮）',
					autogenerate: { directory: 'redesign' },
				},
				{
					label: 'Phase04：コーディング編（仮）',
					autogenerate: { directory: 'coding' },
				},
				{
					label: 'Phase05：フィードバック編（仮）',
					autogenerate: { directory: 'feedback' },
				},
				{
					label: 'Phase06：公開＆収益化編（仮）',
					autogenerate: { directory: 'publish' },
				},
				{
					label: 'PhaseEx：発展事項編（仮）',
					autogenerate: { directory: 'advanced' },
				},
			],
		}),
	],
});
