# Atrism - AI TRiSMコンサルティングサービス

企業のAI TRiSM（Trust, Risk, Security, Management）を支援するコンサルティングサービスの公式ウェブサイトです。

## 概要

Atrismは、企業がAIを安全かつ効果的に活用できるよう、AI TRiSMの観点から包括的なコンサルティングサービスを提供しています。

### 提供サービス

- **Trust（信頼性）**: AIシステムの信頼性を確保し、透明性と説明可能性を実現
- **Risk（リスク管理）**: AI導入におけるリスクを特定・評価し、適切な対策を立案
- **Security（セキュリティ）**: AIシステムのセキュリティを強化し、データ保護とプライバシーを確保
- **Management（ガバナンス）**: AIガバナンス体制を構築し、継続的な監視と改善を実現

### 主要な特徴

- **Gartner提唱フレームワーク**: AI TRiSMの正式な定義とベストプラクティスに基づく
- **業界別ソリューション**: 金融、医療、製造、小売、ITなど各業界に特化した戦略
- **包括的リスク管理**: セキュリティ、プライバシー、ハルシネーション対策
- **実装プロセス**: 現状分析から継続改善までの4段階アプローチ

## 技術スタック

- **フレームワーク**: Next.js 15.4.5
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: Cloudflare Workers
- **ドメイン**: atrism.com

## 開発環境のセットアップ

### 前提条件

- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

## ビルドとデプロイ

### ローカルビルド

```bash
# プロダクションビルド
npm run build

# 静的ファイルのエクスポート
npm run export
```

### GitHub Pagesへのデプロイ

#### 1. GitHubリポジトリの準備

1. GitHubで新しいリポジトリ `atrism` を作成
2. リポジトリをローカルにクローンまたはプッシュ
3. GitHub Pagesの設定を有効化

#### 2. GitHub Pages設定

1. リポジトリのSettings → Pages
2. Source: "GitHub Actions" を選択
3. 自動的にGitHub Actionsワークフローが実行されます

#### 3. デプロイ

```bash
# コードをGitHubにプッシュ
git add .
git commit -m "Initial commit"
git push origin main

# GitHub Actionsが自動的にデプロイを実行
```

### Cloudflare Workersへのデプロイ

#### 1. Cloudflareアカウントの準備

1. [Cloudflare](https://cloudflare.com) でアカウントを作成
2. ドメイン `atrism.com` をCloudflareに追加
3. Wrangler CLIをインストール: `npm install -g wrangler`
4. Wranglerでログイン: `wrangler login`

#### 2. 設定の更新

`wrangler.toml` ファイルの `zone_id` を実際のCloudflare Zone IDに更新してください。

#### 3. デプロイ

```bash
# プロダクション環境へのデプロイ
npm run deploy

# ステージング環境へのデプロイ
npm run deploy:staging
```

## プロジェクト構造

```
atrism/
├── src/
│   └── app/
│       ├── layout.tsx      # ルートレイアウト
│       ├── page.tsx        # ホームページ
│       ├── globals.css     # グローバルスタイル
│       └── favicon.ico     # ファビコン
├── public/                 # 静的ファイル
├── next.config.ts         # Next.js設定
├── wrangler.toml          # Cloudflare Workers設定
└── package.json           # 依存関係
```

## 主要機能

- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **SEO最適化**: メタデータとOpen Graphタグの設定
- **アクセシビリティ**: WCAG準拠のデザイン
- **パフォーマンス**: 最適化された画像とCSS
- **お問い合わせフォーム**: 顧客からの問い合わせ受付
- **AI TRiSM詳細説明**: Gartner提唱フレームワークの包括的解説
- **業界別ソリューション**: 6つの主要業界向けカスタマイズ戦略
- **課題と解決策**: 具体的なリスクと対策の提示
- **ベストプラクティス**: 実践的なガイドラインと推奨事項

## カスタマイズ

### ブランドカラー

メインカラーは `blue-600` を使用しています。カラーを変更する場合は、以下のファイルを編集してください：

- `src/app/page.tsx`: コンポーネント内のカラークラス
- `src/app/globals.css`: カスタムCSS変数

### コンテンツの更新

サイトのコンテンツは `src/app/page.tsx` で管理されています。以下のセクションを編集できます：

- ヒーローセクション
- サービス説明
- 会社概要
- お問い合わせ情報

## ライセンス

このプロジェクトはプライベートプロジェクトです。

## お問い合わせ

- メール: info@atrism.com
- 電話: 03-1234-5678
- 所在地: 東京都渋谷区渋谷1-1-1 渋谷スクランブルスクエア 15階
