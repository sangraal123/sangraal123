/** 事業者情報。About の運営者情報と構造化データで共有する。 */
export const business = {
	name: 'sangraal',
	entity: '個人事業主',
	entityEn: 'Sole proprietorship',
	owner: '上田 悠太',
	ownerEn: 'Yuta Ueda',
	founded: '2026-08-08',
	foundedJa: '2026年8月8日',
	foundedEn: 'August 8, 2026',
	address: {
		region: '愛媛県',
		locality: '松山市',
		street: '鷹子町804番地1',
		en: 'Matsuyama, Ehime, Japan',
	},
	duns: '699778965',
	email: 'admin@googja.dev',
	url: 'https://googja.dev/',
};

/** 検索エンジンや審査で事業者を機械的に確認できるよう、トップと About に埋め込む。 */
export const businessJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: business.name,
	url: business.url,
	logo: 'https://googja.dev/profile-icon.png',
	email: business.email,
	foundingDate: business.founded,
	founder: { '@type': 'Person', name: business.owner, alternateName: business.ownerEn },
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.address.street,
		addressLocality: business.address.locality,
		addressRegion: business.address.region,
		addressCountry: 'JP',
	},
	duns: business.duns,
	sameAs: [
		'https://github.com/sangraal123',
		'https://apps.apple.com/jp/developer/yuta-ueda/id1853129120',
		'https://play.google.com/store/apps/developer?id=sangraal',
	],
};

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

export const brainInfinity = {
	version: '1.1.4',
	screenshotsCaptured: '2026-10-19',
	screenshotsCapturedJa: '2026年10月19日',
};

/** トップと /works/ で共有する作品の索引。順番がそのまま通し番号になる。 */
export const works: Work[] = [
	{
		no: '01',
		group: 'product',
		name: '無限脳',
		note: '900問の推理・操作パズル・全モードの復習と、7コロニーの基地開拓を楽しむ脳トレゲーム',
		stack: 'Flutter / Flame / Firebase',
		status: `v${brainInfinity.version}`,
		href: '/works/brain-infinity/',
	},
	{
		no: '02',
		group: 'product',
		name: '漢字脳',
		note: '和同開珎・四字熟語・手がかり想起を、1日3問から楽しむ漢字パズル',
		stack: 'Expo / SQLite / Firebase',
		status: '開発中',
		href: 'https://kanjinou.googja.dev/',
		external: true,
	},
	{
		no: '03',
		group: 'product',
		name: 'VibeCode Mobile',
		note: 'AIとExpoでモバイルアプリを作り切るための実践ガイド',
		stack: 'Astro / Writing',
		status: '公開中',
		href: '/vibecode-mobile/',
	},
	{
		no: '04',
		group: 'collab',
		name: 'HENKAKU Initiation',
		note: 'ウォレット準備から申請までを案内するNext.jsアプリ',
		stack: 'Next.js / Web3',
		status: 'Open Source',
		href: 'https://github.com/henkaku-center/initiation',
		external: true,
	},
	{
		no: '05',
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

/** 無限脳 1.1.4+89 の実画面。2026-10-19 生成の store-shots 素材。
    日本語・iPhone 6.5、進行・フィード・アカウントは撮影用データ。
    .screenshots/store の実画面を幅720pxのWebPへ変換。
    バージョン別のパスで、以前の画像のブラウザキャッシュを避ける。 */
export const shots: Shot[] = [
	{
		"no": "01",
		"src": "/works/brain-infinity/v1.1.4/01-home.webp",
		"caption": "相棒と、今日のトレーニングへ",
		"alt": "無限脳1.1.4のホーム画面。相棒、数学・論理・記憶・注意・言語の5分野とチャレンジ問題、レベル選択、画面下部の4つのナビゲーションを表示。"
	},
	{
		"no": "02",
		"src": "/works/brain-infinity/v1.1.4/02-frontier.webp",
		"caption": "表示を刷新した7つのコロニー",
		"alt": "フロンティアのORIGIN STATION。刷新した基地の外観、施設のレベル、ルミナとコアレベル、復旧目標と遠征への入口を表示。"
	},
	{
		"no": "03",
		"src": "/works/brain-infinity/v1.1.4/03-reasoning.webp",
		"caption": "900問の推理チャレンジ",
		"alt": "推理チャレンジの図形行列。3×3の図形と空欄、規則を探す説明、選択肢と残り時間を表示。"
	},
	{
		"no": "04",
		"src": "/works/brain-infinity/v1.1.4/04-action-catalog.webp",
		"caption": "10形式から選ぶ操作パズル",
		"alt": "アクションラボの一覧。5分野の絞り込みと、つなぎ算・数の天秤などの形式、選択した難度とプレイボタンを表示。"
	},
	{
		"no": "05",
		"src": "/works/brain-infinity/v1.1.4/05-action-puzzle.webp",
		"caption": "タップと配置で解く「数の天秤」",
		"alt": "数の天秤の操作パズル。遊び方、左右の皿の合計、使えるブロック、リセットと答え合わせのボタンを表示。"
	},
	{
		"no": "06",
		"src": "/works/brain-infinity/v1.1.4/06-review-notebook.webp",
		"caption": "分野を選んで、要復習の問題を解く",
		"alt": "復習帳。全モードの間違い、要復習・復習済みの切り替え、数学・論理・記憶・注意・言語の絞り込みと解き直しボタンを表示。"
	},
	{
		"no": "07",
		"src": "/works/brain-infinity/v1.1.4/07-missions.webp",
		"caption": "通常・推理・操作パズルの毎日の目標",
		"alt": "ミッション画面。通常問題・推理チャレンジ・アクションラボのメインミッション、開始ボタン、フィードとランキングへの入口を表示。"
	},
	{
		"no": "08",
		"src": "/works/brain-infinity/v1.1.4/08-community.webp",
		"caption": "みんなの達成に「お祝い」を送る",
		"alt": "みんなのフィード。撮影用の自己ベスト更新、連続トレーニング、メインミッション達成のカードと、お祝い・更新ボタンを表示。"
	},
	{
		"no": "09",
		"src": "/works/brain-infinity/v1.1.4/09-cloud-account.webp",
		"caption": "任意のアカウント連携とクラウド保存",
		"alt": "設定のデータ欄。撮影用のGoogle連携済み表示、Apple連携、連携解除、クラウド保存の説明とアカウント削除への入口を表示。"
	},
	{
		"no": "10",
		"src": "/works/brain-infinity/v1.1.4/10-rankings.webp",
		"caption": "今週・先週・全期間の記録を比較",
		"alt": "ランキング画面。自分の順位、上位100人の名前と記録、プロフィール表示への入口を撮影用データで表示。"
	},
	{
		"no": "11",
		"src": "/works/brain-infinity/v1.1.4/11-lab.webp",
		"caption": "ブレインコアと成長の記録",
		"alt": "研究ラボ。見た目を調整したブレインコア、コアレベルと経験値、ゲーム内の成長指標NEURAL INDEXと成長軌道を表示。"
	},
	{
		"no": "12",
		"src": "/works/brain-infinity/v1.1.4/12-calendar.webp",
		"caption": "毎日のプレイをカレンダーに残す",
		"alt": "プレイカレンダー。メダルと連続記録、プレイ日数、2026年10月のプレイ日とメインミッションの達成状況を撮影用データで表示。"
	},
	{
		"no": "13",
		"src": "/works/brain-infinity/v1.1.4/13-settings.webp",
		"caption": "名前・音・表示と公開設定を選ぶ",
		"alt": "設定画面。公開する名前、音楽・効果音、アクセシビリティ、生年、達成フィードの公開停止と利用状況データの設定を表示。"
	},
	{
		"no": "14",
		"src": "/works/brain-infinity/v1.1.4/14-expedition.webp",
		"caption": "3部隊で指揮する拠点奪還戦",
		"alt": "居住支援の遠征。制限時間と電力、拠点を結ぶ戦場、3部隊の状況、進軍・守備・全体表示への操作を表示。"
	}
].map((shot) => ({ ...shot, width: 720, height: 1558 }));
