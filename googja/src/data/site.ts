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

/** 無限脳 の実画面。アプリ側リポジトリの store-shots テストが生成した
    枠なしのスクリーンショット（iPhone 6.5・日本語）をそのまま使っている。
    メダルや連続記録はストア素材と同じ仕込み済みの状態。
    番号はアプリ側のシーン名とそのまま1対1にしてある（読み替えないこと）。
    技術名を流す帯の代わりに、ヒーロー直下で実物を見せる。 */
export const shots: Shot[] = [
	{
		no: '01',
		src: '/works/brain-infinity/01-home.webp',
		caption: 'カテゴリとアクションラボを選ぶ',
		alt: '無限脳のホーム画面。数学・論理・記憶・注意・言語の5カテゴリとアクションラボのタイルが並び、その下にレベル1〜6の選択がある。',
	},
	{
		no: '02',
		src: '/works/brain-infinity/02-quiz.webp',
		caption: '通常トレーニング（1問30秒）',
		alt: '無限脳の出題画面。上部に残り30秒のリングと1/10の進捗、問題文と4つの選択肢、下部にヒントと問題の報告への導線が並んでいる。',
	},
	{
		no: '03',
		src: '/works/brain-infinity/03-action-catalog.webp',
		caption: 'アクションラボの形式一覧',
		alt: '無限脳のアクションラボ画面。所持ポイント80Pとカテゴリの絞り込みが上部にあり、つなぎ算と数の天秤のカードに1形式10問・20ポイントと表示されている。',
	},
	{
		no: '04',
		src: '/works/brain-infinity/04-action-puzzle.webp',
		caption: 'アクションラボ（数の天秤）',
		alt: '無限脳のアクションパズル画面。4個のブロックで左右をそれぞれ6にする天秤の問題。左右の置き場と使えるブロック5・1・2・4が並び、進捗は4/10問。制限時間の表示はない。',
	},
	{
		no: '05',
		src: '/works/brain-infinity/05-result.webp',
		caption: '結果とメダル判定',
		alt: '無限脳の結果画面。10問中9問正解で銀メダル、自己ベスト更新、前回7/10と最高連続正解7、ブレインコアXP+134でコアがレベル5になったことが表示されている。',
	},
	{
		no: '06',
		src: '/works/brain-infinity/06-frontier.webp',
		caption: 'ニューラル・フロンティア',
		alt: '無限脳のフロンティア画面。航路シグナル9/30点灯と、カテゴリごとのレベル1〜6の到達状況とメダルが航路として並んでいる。',
	},
	{
		no: '07',
		src: '/works/brain-infinity/07-mission.webp',
		caption: 'ミッション（オービットとアクションラボ）',
		alt: '無限脳のミッション画面。今日のオービット、オービット専用の連続記録と達成日数、アクションラボの「続きから再開・追加消費なし」のカードが並んでいる。',
	},
	{
		no: '08',
		src: '/works/brain-infinity/08-lab.webp',
		caption: '研究ラボ（ブレインコアとNEURAL INDEX）',
		alt: '無限脳の研究ラボ画面。ブレインコアがレベル5で42/500XP、コアのおすすめが数学・Lv.3、NEURAL INDEXが25で5カテゴリ測定済みと表示されている。',
	},
	{
		no: '09',
		src: '/works/brain-infinity/09-calendar.webp',
		caption: 'プレイカレンダーと成長ログ',
		alt: '無限脳のプレイカレンダー画面。連続記録12日、プレイ日数23日、メダル獲得9/30、最高連続正解10の成長ログと、2026年9月のカレンダーが表示されている。',
	},
	{
		no: '10',
		src: '/works/brain-infinity/10-settings.webp',
		caption: '設定（言語・プライバシー・購入）',
		alt: '無限脳の設定画面。言語と名前、効果音と音楽、アクセシビリティへの導線、生まれた年と利用状況データの送信が並び、下端の購入セクションに「広告を非表示 ¥500」が見えている。',
	},
	{
		no: '11',
		src: '/works/brain-infinity/11-accessibility.webp',
		caption: 'アクセシビリティ',
		alt: '無限脳のアクセシビリティ画面。高コントラストと画面のズーム、形状とラベル、視差効果を減らす、字幕の切り替えが、見え方・動き・音に分かれて並んでいる。',
	},
];
