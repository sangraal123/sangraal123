# VibeCode Mobile レビュー記録

確認日：2026年9月8日

## 所見と確認範囲

「企画 → デザイン仕様 → 実装 → テスト配布 → 公開 → 運用」を一つの教材につなげている点は、このガイドの強みです。特に `SPEC.md` と `DESIGN.md` を成果物にする構成、実機で確かめる習慣、公開後の計測まで扱う流れは活かせます。

全8フェーズ・40記事の構成と記事間の整合性を概観し、料金、開発環境、SDK、コード例、ストア要件、セキュリティを重点的に確認しました。事実・作例・著者の推奨が混ざっていた箇所を整理し、確認できた誤りや実装上の問題を原稿へ反映しています。

今回の確認は教材のレビューです。完成したExpoアプリを構築して、両OSで全工程を通した検証ではありません。実サービスの設定・配布・ストア申請は行っていません。

## 主な修正

| 優先度 | 対象 | 修正した点 |
| :--- | :--- | :--- |
| 高 | 準備02・応用03 | Gemini 3.5 Flashの標準APIに大きな無料枠があるという説明を訂正。サブスク・API課金・利用倍率・モデル名を区別し、「無限に近いコンテキスト」などの過度な断定を整理 |
| 高 | 準備01・03 | Firebase Studioを新規開発の推奨先として扱う説明を更新。新規登録・新規ワークスペース作成停止を明記 |
| 高 | 応用01 | クラウド移行で毎回ランダムIDを作る処理を変更。部分的な失敗からの再試行、既存クラウドデータの保持、不正な入力、別アカウントへの再取り込みを考慮 |
| 高 | 応用02 | Androidの通知チャンネルを権限要求より先に作成。通知予約を一括削除せず対象を限定。終了状態から通知を開く場合を補足。FCM/APNs資格情報が不要という説明を訂正 |
| 高 | 応用03 | Functionsへの秘密情報の明示的な関連付け、App Checkの強制適用、入力サイズ・日次回数の制限、出力スキーマと受信後検証を実装例に追加 |
| 高 | セキュリティ05 | Firestoreの許可が重複すると一つの許可だけでアクセスできることを明記。広い再帰許可を絞り、作成・更新の両方でタイトルを検証。Storageの削除をアップロード検証から分離 |
| 高 | 公開04 | Google Playの基本画像条件と推奨・端末別条件を分離。iPhone 6.5インチ必須という断定を訂正。キーワードのバイト数と掲載用素材も補足 |
| 高 | 公開05 | ATTをテストのため必ず許可させる案内を訂正。テスト広告を使用し許可・拒否の両方を確認する説明へ変更。購入情報の取得失敗を未購入と判定する例とリスナー解除漏れを修正 |
| 高 | 応用05 | fastlaneが審査送信の設定を変えて再試行しないよう設定。掲載文・画像の存在確認を追加。Appleのキーにも公開防止権限があるかのような説明を訂正 |
| 中 | 応用04 | カスタム定義、DebugView、通常レポート、BigQueryの違いを整理。「永久に分析不能」という断定とテスト用フィルタのディメンション名を訂正。SparkのBigQueryサンドボックス、集計スクリプト、OAuthスコープを補足 |
| 中 | 公開02・03・05 | Apple登録や最終ビルドの順序、EAS Submitと自動転送の違い、12人・14日と本番承認の違いを明確化。プライバシーポリシーを実装に合わせて完成させる下書きへ変更 |
| 中 | 準備05・セキュリティ04 | 古いFirebase SDK指定とEASの秘密情報登録コマンドを更新。公開用Firebase設定ファイルとサービスアカウント秘密鍵を区別 |
| 中 | リサーチ編 | AI生成ペルソナは仮説であること、出典の確認、実ユーザーでの検証を補足。星1・5のレビューを一律に除外する説明を修正 |
| 中 | リデザイン編 | StitchとExpoのTSXが自動で常時双方向同期するという保証を外し、画面案・DESIGN.md・開発エージェントでの受け渡しを説明。対応形式や連携先の確認を促す形へ整理 |
| 中 | コーディング編 | CLIとSDKのバージョン確認を区別。既存ディレクトリへの生成とポート競合の説明を修正。Spec Kitの入手元・版を明示。タブ高さの固定、チェックボックスのアクセシビリティを改善。GitHubへmainだけを送る例を、作業中のブランチと対象タグを保存する形へ修正 |
| 中 | ガイド全体 | 7フェーズ表記を8フェーズ・40記事へ訂正。公開前にセキュリティ編へ進む導線を追加。ガイドの言語を日本語に設定し、検索・目次・前後リンクも日本語化 |

## 主な公式資料

- **料金・利用枠**：[Gemini API料金](https://ai.google.dev/gemini-api/docs/pricing)、[Google AIプラン](https://one.google.com/intl/en/about/google-ai-plans/)、[Codex料金](https://developers.openai.com/codex/pricing/)、[Google Cloudの予算と通知](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- **開発環境・SDK**：[Firebase Studioの提供状況](https://firebase.google.com/docs/studio)、[ExpoでのFirebase導入](https://docs.expo.dev/guides/using-firebase/)、[React Native Firebase](https://rnfirebase.io/)、[Spec Kit](https://github.com/github/spec-kit)
- **通知・AI・権限**：[Expo通知セットアップ](https://docs.expo.dev/push-notifications/push-notifications-setup/)、[App Checkの強制適用](https://firebase.google.com/docs/app-check/cloud-functions)、[Firestoreルールの構造](https://firebase.google.com/docs/firestore/security/rules-structure)、[Geminiの出力スキーマ](https://ai.google.dev/gemini-api/docs/structured-output)
- **ストア素材・テスト**：[Apple画像仕様](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/)、[Google Play画像仕様](https://support.google.com/googleplay/android-developer/answer/9866151?hl=en)、[Google Playテスト要件](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en-GB)
- **広告・課金**：[Appleの追跡許可の変更](https://support.apple.com/en-us/102420)、[AdMobテスト広告](https://developers.google.com/admob/ios/test-ads)、[Expoの課金ガイド](https://docs.expo.dev/guides/in-app-purchases/)、[RevenueCat料金](https://www.revenuecat.com/pricing)
- **運用**：[GA4開発者トラフィックのフィルタ](https://support.google.com/analytics/answer/13296662)、[FirebaseとBigQuery](https://firebase.google.com/docs/projects/bigquery-export)、[fastlane supplyの設定](https://docs.fastlane.tools/actions/supply/)、[AppleのAPIキーと権限](https://developer.apple.com/help/app-store-connect/get-started/app-store-connect-api/)
- **デザイン・サイト**：[Stitchの公式紹介](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)、[Starlightの言語設定](https://starlight.astro.build/guides/i18n/)

## 次に推奨する改善

1. **実行できるHabitFlowの参照プロジェクトを用意する。** 各フェーズの到達点をタグで固定し、Expo・React Native・Firebase・Spec Kitの版と検証端末を記録します。原稿だけでは検出しにくいSDK間の接続漏れを発見でき、読者も途中から再開できます。特にFirebase JS SDKからネイティブのAuth・App Check・Analyticsへ進む経路を一つ実証する効果が大きいです。
2. **各記事の冒頭を「前提・今回作るもの・完了条件」に揃える。** 料金契約、対応OS、Expo Goか開発ビルドかを明示し、最後に期待する画面または成果物を一つ示します。最短のMVPコースと追加機能のコースを分けると、初心者が40記事すべてを必須作業と思い込まずに済みます。
3. **更新情報をまとめて管理する。** 記事に「確認日」「対応バージョン」「公式資料」を持たせ、料金・公開条件・モデルIDなど変わりやすい情報を一か所にまとめます。定期的なリンク確認と、サンプルプロジェクトのビルドを継続すると、今回のような古い説明を早く見つけられます。
4. **断定を、条件や実測に置き換える。** 「必ず」「完全」「一択」「数秒で完璧」などは、手順の必須条件・著者の好み・実測結果を分けて使います。「通知で継続率が上がる」「色で印象が決まる」といった効果は、条件のない数値で保証せず、検証方法を添えると教材としての信頼性が上がります。
5. **公開直前の一枚チェックリストを作る。** 最終ビルド、権限と削除、広告・課金、SDKのデータ送信、掲載情報を同じビルドに対して確認できる形にします。各編の情報を集約し、広告やクラウド機能追加後の申告漏れを防ぎます。

## 検証

- Astroの本番ビルド：48ページ生成成功。
- 生成HTMLの内部リンク・目次アンカー：4,115件を確認、切れたリンクなし。全48ページの `lang="ja"` も確認。
- TypeScript / TSX / JSONのコード例：29ブロックの構文確認が成功。
- AIバックエンドの例：実際の依存ライブラリに対してstrictなTypeScript型チェック成功。
- fastlaneの例：Ruby構文チェック成功。
- GA4集計の例：Python構文チェック。
- 外部・ネイティブ機能を模擬した回帰確認：移行の再試行・別アカウント・不正データ、通知の順序と予約、AIの認証・入力制限・回数制限・不正出力の計10項目が成功。
- ブラウザで、ガイド入口・提出画像の説明・日本語UIの表示を確認。

実際のiOS / Android通知、StoreKit / Play Billing、Firebaseルールのエミュレータ、App Checkの端末証明、ストアへのアップロードは未検証です。掲載コードは前提条件を満たした開発用プロジェクトで統合確認してから利用してください。
