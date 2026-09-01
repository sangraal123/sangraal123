export interface Work {
	no: string;
	/** /works/ でのまとまり。product = 自分のプロダクト、collab = チーム・OSS。 */
	group: 'product' | 'collab';
	name: string;
	note: string;
	stack: string;
	status: string;
	href: string;
	external?: boolean;
}

/** トップと /works/ で共有する作品の索引。順番がそのまま通し番号になる。 */
export const works: Work[] = [
	{
		no: '01',
		group: 'product',
		name: '無限脳',
		note: '5領域を短時間で鍛える、日英対応の脳トレゲーム',
		stack: 'Flutter / Firebase',
		status: 'Released',
		href: '/works/brain-infinity/',
	},
	{
		no: '02',
		group: 'product',
		name: 'VibeCode Mobile',
		note: 'AIとExpoでモバイルアプリを作り切るための実践ガイド',
		stack: 'Astro / Writing',
		status: '公開中',
		href: '/vibecode-mobile/',
	},
	{
		no: '03',
		group: 'collab',
		name: 'HENKAKU Initiation',
		note: 'ウォレット準備から申請までを案内するNext.jsアプリ',
		stack: 'Next.js / Web3',
		status: 'Open Source',
		href: 'https://github.com/sangraal123/initiation',
		external: true,
	},
	{
		no: '04',
		group: 'collab',
		name: 'Board Game Proof',
		note: 'アナログゲームのプレイ履歴をWeb3で証明する試み',
		stack: 'Expo / Firebase',
		status: 'Team',
		href: 'https://github.com/sangraal123?tab=repositories',
		external: true,
	},
];

export interface Phase {
	no: string;
	label: string;
	href: string;
	/** 本文がまだ準備中のフェーズ。索引では執筆中と明示する。 */
	wip?: boolean;
}

/** VibeCode Mobile の全フェーズ。Starlight 側のサイドバーと対応させる。 */
export const phases: Phase[] = [
	{ no: '01', label: '準備編', href: '/prep/01/' },
	{ no: '02', label: 'リサーチ編', href: '/research/01/' },
	{ no: '03', label: 'リデザイン編', href: '/redesign/01/' },
	{ no: '04', label: 'コーディング編', href: '/coding/01/', wip: true },
	{ no: '05', label: 'フィードバック編', href: '/feedback/01/', wip: true },
	{ no: '06', label: '公開＆マネタイズ編', href: '/publish/01/', wip: true },
	{ no: 'Ex', label: '応用事項編', href: '/advanced/01/', wip: true },
];

export interface Shot {
	no: string;
	src: string;
	caption: string;
	alt: string;
}

/** 無限脳 の実画面（公開中のWeb版から撮影・端末幅402px・他社広告は遮断）。
    技術名を流す帯の代わりに、ヒーロー直下で実物を見せる。 */
export const shots: Shot[] = [
	{
		no: '01',
		src: '/works/brain-infinity/01-home.webp',
		caption: 'カテゴリとレベルを選ぶ',
		alt: '無限脳のホーム画面。数学・論理・記憶・注意・言語の5カテゴリと、レベル1〜6の選択が並んでいる。',
	},
	{
		no: '02',
		src: '/works/brain-infinity/02-quiz.webp',
		caption: '1問30秒・1セッション10問',
		alt: '無限脳の出題画面。残り時間と1/10の進捗、数列の問題、4つの選択肢が表示されている。',
	},
	{
		no: '03',
		src: '/works/brain-infinity/03-frontier.webp',
		caption: 'ニューラル・フロンティア',
		alt: '無限脳のニューラル・フロンティア画面。カテゴリを惑星として航路で結び、到達レベルと航路シグナルの点灯数を表示している。',
	},
	{
		no: '04',
		src: '/works/brain-infinity/04-mission.webp',
		caption: 'ミッションと成長ログ',
		alt: '無限脳のミッション画面。コアのおすすめ、今日のオービット、成長ログが並んでいる。',
	},
	{
		no: '05',
		src: '/works/brain-infinity/05-lab.webp',
		caption: '研究ラボ（ブレインコアと能力バランス）',
		alt: '無限脳の研究ラボ画面。ブレインコアのレベルとXP、適応トレーニングの内訳、NEURAL INDEX が表示されている。',
	},
];
