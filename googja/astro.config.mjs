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
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sangraal123/sangraal123' }],
			sidebar: [
				{
					label: 'Phase 1: 準備編（仮）',
					autogenerate: { directory: 'prep' },
				},
				{
					label: 'Phase 2: Flutter基礎編（仮）',
					autogenerate: { directory: 'flutter' },
				},
				{
					label: 'Phase 3: Expo基礎編（仮）',
					autogenerate: { directory: 'expo' },
				},
				{
					label: 'Phase 4: バックエンド編（仮）',
					autogenerate: { directory: 'backend' },
				},
				{
					label: 'Phase 5: アプリ品質改善編（仮）',
					autogenerate: { directory: 'quality' },
				},
				{
					label: 'Phase 6: 収益化・公開編（仮）',
					autogenerate: { directory: 'publish' },
				},
			],
		}),
	],
});
