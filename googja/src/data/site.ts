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
		note: '脳トレの積み重ねで基地を育てる、日英対応のトレーニングゲーム',
		stack: 'Flutter / Flame / Firebase',
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
	width: number;
	height: number;
}

/** 無限脳 1.1.2 の実画面。2026-10-07 生成の store-shots 素材
    （日本語・iPhone 6.5）を幅720pxのWebPへ変換。撮影用の進行データを使用。
    番号は capture_store_test.dart のシーン順に対応する。
    バージョン別のパスで、以前の画像のブラウザキャッシュを避ける。 */
export const shots: Shot[] = [
	{
		no: '01',
		src: '/works/brain-infinity/v1.1.2/01-home.webp',
		caption: '相棒と、今日のトレーニングへ',
		alt: '無限脳のホーム画面。脳の姿をした相棒、数学・論理・記憶・注意・言語の5カテゴリ、チャレンジ問題への入口とレベル選択が並ぶ。',
	},
	{
		no: '02',
		src: '/works/brain-infinity/v1.1.2/02-frontier.webp',
		caption: '脳トレで育てるコロニー',
		alt: 'フロンティアのORIGIN STATION。ルミナ、ブレインコア、設備復旧数の下に、居住棟・温室・観測所などの施設と、次の設備復旧目標を表示。',
	},
	{
		no: '03',
		src: '/works/brain-infinity/v1.1.2/03-expedition.webp',
		caption: '3部隊を指揮する拠点奪還戦',
		alt: '居住支援の遠征の戦闘画面。拠点を結ぶ戦場、残り時間と電力、前衛隊・射撃隊・工兵隊、進軍と守備の指示ボタンを表示。',
	},
	{
		no: '04',
		src: '/works/brain-infinity/v1.1.2/04-quiz.webp',
		caption: '回答履歴に合わせた10問',
		alt: '数学の通常トレーニング画面。1問30秒のタイマー、10問の進捗、数列の問題、4つの選択肢とヒント・報告への入口を表示。',
	},
	{
		no: '05',
		src: '/works/brain-infinity/v1.1.2/05-action-catalog.webp',
		caption: '無料で選べる10形式のパズル',
		alt: 'アクションラボの形式一覧。5カテゴリの絞り込みと、つなぎ算・数の天秤のイラスト、選択中の難度、この形式で遊ぶボタンを表示。',
	},
	{
		no: '06',
		src: '/works/brain-infinity/v1.1.2/06-result.webp',
		caption: '結果から、次の開拓目標へ',
		alt: '相棒のいる結果画面。銀メダルと9問正解、獲得ルミナとブレインコアXP、現在の開拓目標と目標の施設へ進むボタンを表示。',
	},
	{
		no: '07',
		src: '/works/brain-infinity/v1.1.2/07-mission.webp',
		caption: '毎日の目標とランキングへの入口',
		alt: 'ミッション画面。ランキングへの入口と、通常問題・チャレンジ問題・遠征のメインミッション、選定理由と達成条件を表示。',
	},
	{
		no: '08',
		src: '/works/brain-infinity/v1.1.2/08-lab.webp',
		caption: 'ブレインコアと成長軌道',
		alt: '研究ラボ画面。成長したブレインコアの姿、コアレベルと経験値、NEURAL INDEXとその成長軌道を表示。',
	},
	{
		no: '09',
		src: '/works/brain-infinity/v1.1.2/09-calendar.webp',
		caption: 'プレイとミッションの積み重ね',
		alt: '2026年10月のプレイカレンダー。メダル獲得数、累計連続正解数、連続ミッション、連続チェックイン、プレイ日数の成長ログと記録済みの日付を表示。',
	},
	{
		no: '10',
		src: '/works/brain-infinity/v1.1.2/10-settings.webp',
		caption: '名前・音・データ共有を選ぶ',
		alt: '設定画面。言語、ランキング参加時に公開する名前、効果音と音楽、アクセシビリティ、生まれた年、利用状況データの送信と広告除去の購入を表示。',
	},
	{
		no: '11',
		src: '/works/brain-infinity/v1.1.2/11-accessibility.webp',
		caption: 'アクセシビリティ',
		alt: 'アクセシビリティ画面。高コントラスト、文字を拡大する画面のズーム、形状とラベル、視差効果を減らす、効果音の字幕を切り替えられる。',
	},
	{
		no: '12',
		src: '/works/brain-infinity/v1.1.2/12-action-puzzle.webp',
		caption: 'タップと配置で解く「数の天秤」',
		alt: '数の天秤の操作パズル。4つのブロックを左右の皿に配置して合計をそろえる問題と、選択中の標準難度、10問の進捗を表示。',
	},
].map((shot) => ({ ...shot, width: 720, height: 1558 }));
