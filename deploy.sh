#!/bin/bash

# Atrism - Cloudflare Workers デプロイスクリプト

echo "🚀 Atrism デプロイを開始します..."

# 依存関係のインストール
echo "📦 依存関係をインストール中..."
npm install

# ビルド
echo "🔨 プロジェクトをビルド中..."
npm run build

# Cloudflare Workersへのデプロイ
echo "☁️ Cloudflare Workersにデプロイ中..."
npx wrangler deploy

echo "✅ デプロイが完了しました！"
echo "🌐 サイトURL: https://atrism.com" 