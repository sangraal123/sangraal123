// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://googja.dev',
	integrations: [
		starlight({
			title: 'googja.dev',
			description: 'sangraalのモバイルプロダクト開発ポートフォリオと、VibeCode Mobile実践ガイド。',
			customCss: ['./src/styles/custom.css'],
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sangraal123' }],
			sidebar: [
				{
					label: 'Portfolio',
					items: [
						{ label: 'Home', link: '/' },
						{ label: 'Works', link: '/works/' },
						{ label: 'About', link: '/about/' },
						{ label: 'VibeCode Mobile', link: '/vibecode-mobile/' },
					],
				},
				{
					label: 'Phase01：準備編',
					autogenerate: { directory: 'prep' },
				},
				{
					label: 'Phase02：リサーチ編',
					autogenerate: { directory: 'research' },
				},
				{
					label: 'Phase03：リデザイン編',
					autogenerate: { directory: 'redesign' },
				},
				{
					label: 'Phase04：コーディング編',
					autogenerate: { directory: 'coding' },
				},
				{
					label: 'Phase05：フィードバック編',
					autogenerate: { directory: 'feedback' },
				},
				{
					label: 'Phase06：公開＆マネタイズ編',
					autogenerate: { directory: 'publish' },
				},
				{
					label: 'PhaseEx：応用事項編',
					autogenerate: { directory: 'advanced' },
				},
			],
		}),
	],
});
