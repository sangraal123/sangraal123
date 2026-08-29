# googja.dev

sangraal のポートフォリオと、実践ガイド「VibeCode Mobile」を配信する Astro プロジェクト。

## 構成

サイトは **2つの層** に分かれている。同じ Astro プロジェクトだが、DOM もレイアウトも別物。

| 層 | URL | 実装 | 使うもの |
| --- | --- | --- | --- |
| ポートフォリオ | `/` `/works/` `/works/brain-infinity/` `/about/` `/privacy/` `/404` | 素の Astro ページ（`src/pages/`） | `src/layouts/Base.astro` + `src/styles/site.css` |
| VibeCode Mobile ガイド | `/vibecode-mobile/` `/prep/…` `/research/…` ほか各フェーズ | Starlight（`src/content/docs/`） | `src/styles/custom.css` |

Astro はファイルベースのルート（`src/pages/`）をインテグレーションの注入ルートより優先するため、
ポートフォリオのページが Starlight のキャッチオールより先に解決される。
サイドバー・検索・目次といったドキュメント機能が必要なのはガイドだけなので、Starlight もそこにしか掛けていない。

### 見た目を揃えている仕組み

- 配色は「紙（生成り）・墨・朱」の3色。ポートフォリオは `site.css` のトークン、ガイドは `custom.css` で
  Starlight のトークン（`--sl-color-*`）を同じ値に置き換えている。個別セレクタは基本叩かない。
- 明暗の切り替えは Starlight と同じ仕組みに乗せている。
  `localStorage['starlight-theme']` と `<html data-theme="light|dark">` を共有するので、
  ポートフォリオ ⇄ ガイドを行き来しても設定が引き継がれる。
- 節を立てるときに地の明暗をひっくり返さない。紙 → 墨の全面反転はそこだけ別サイトに見えるので、
  一段沈めた面（`.band--sunk` / `--paper-2`）と細い縦罫で差をつける。反転を使うのは作品行の hover だけ。
- 版面の密度は、装飾ではなく組みで出す：全高のヒーロー、4分割の縦罫、節番号の大書き、流れる帯、版下のロゴ。

## 開発

```
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
npm run preview
```

`main` への push で `googja/**` に変更があると、`.github/workflows/` の GitHub Actions が
ビルドして GCE の `/var/www/home` に配信する。

## 手を入れるときの注意

- 配色は必ずトークン経由で参照する。固定値を直書きすると、片方のテーマだけ壊れる。
- 動きは `prefers-reduced-motion` で必ず止める（ヒーローの行送り、流れる帯、hover の拭い、スクロール表示）。
- スクロール表示（`[data-reveal]`）は `:root.has-js` が付いているときだけ伏せる。素の CSS で伏せると JS 無効時に本文が消える。
- ダークテーマは目で確認する。コントラストの計算はライト側だけ見て済ませない。
- ガイドの記事は `src/content/docs/<phase>/NN.md`。サイドバーの並びは `astro.config.mjs` の
  `sidebar` に対応させる。
