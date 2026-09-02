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
		href: 'https://github.com/henkaku-center/initiation',
		external: true,
	},
	{
		no: '04',
		group: 'collab',
		name: 'ぼどぷる',
		note: 'ボードゲームのプレイ履歴を写真と電子サインつきのNFTで残すアプリ',
		stack: 'Expo / Solidity',
		status: 'Sepolia',
		href: '/works/board-game-proof/',
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
	{ no: '04', label: 'コーディング編', href: '/coding/01/' },
	{ no: '05', label: 'フィードバック編', href: '/feedback/01/' },
	{ no: '06', label: '公開＆マネタイズ編', href: '/publish/01/' },
	{ no: 'Ex', label: '応用事項編', href: '/advanced/01/' },
	{ no: 'Sec', label: 'セキュリティ編', href: '/security/01/' },
];

export interface Shot {
	no: string;
	src: string;
	caption: string;
	alt: string;
}

/** 無限脳 の実画面。アプリ側リポジトリの store-metadata スキルが生成した
    枠なしのスクリーンショット（iPhone 6.5・日本語）をそのまま使っている。
    メダルや連続記録はストア素材と同じ仕込み済みの状態。
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
		alt: '無限脳の出題画面。残り時間と1/10の進捗、問題文、4つの選択肢が表示されている。',
	},
	{
		no: '03',
		src: '/works/brain-infinity/03-result.webp',
		caption: '結果とメダル判定',
		alt: '無限脳の結果画面。10問中9問正解で銀メダル、自己ベスト更新、前回スコアと最高連続正解、ブレインコアXPの獲得が表示されている。',
	},
	{
		no: '04',
		src: '/works/brain-infinity/04-frontier.webp',
		caption: 'ニューラル・フロンティア',
		alt: '無限脳のフロンティア画面。カテゴリを惑星として航路で結び、分野ごとの到達レベルとメダル、航路シグナルの点灯数を表示している。',
	},
	{
		no: '05',
		src: '/works/brain-infinity/05-calendar.webp',
		caption: 'プレイカレンダーと連続記録',
		alt: '無限脳のプレイカレンダー画面。連続記録12日とプレイ日数23日、月別のカレンダーが表示されている。',
	},
	{
		no: '06',
		src: '/works/brain-infinity/06-mission.webp',
		caption: 'ミッションと成長ログ',
		alt: '無限脳のミッション画面。コアのおすすめ、今日のオービット、成長ログが並んでいる。',
	},
	{
		no: '07',
		src: '/works/brain-infinity/07-lab.webp',
		caption: '研究ラボ（ブレインコアとNEURAL INDEX）',
		alt: '無限脳の研究ラボ画面。ブレインコアのレベルとXP、適応トレーニングの内訳、NEURAL INDEX と成長軌道が表示されている。',
	},
	{
		no: '08',
		src: '/works/brain-infinity/08-settings.webp',
		caption: '設定（言語・サウンド・プライバシー）',
		alt: '無限脳の設定画面。言語と名前、効果音と音楽、アクセシビリティへの導線、生まれた年と利用状況データの送信、データリセットが並び、下端に情報セクションのプライバシーポリシーが見えている。',
	},
	{
		no: '09',
		src: '/works/brain-infinity/09-accessibility.webp',
		caption: 'アクセシビリティ',
		alt: '無限脳のアクセシビリティ画面。高コントラスト、画面のズーム、形状とラベル、視差効果を減らす、字幕の切り替えが並んでいる。',
	},
];
