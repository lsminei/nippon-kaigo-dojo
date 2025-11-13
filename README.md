# NIPPON介護道場 - オンライン学習プラットフォーム

介護専門職向けのオンライン学習プラットフォーム。玉城竜一氏によるケアマネ道場を中心とした、動画ベースの教育コンテンツを提供します。

## 📋 プロジェクト概要

- **技術スタック**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **バックエンド**: Supabase (PostgreSQL + Auth)
- **動画**: Cloudflare Stream
- **決済**: Stripe
- **デプロイ**: Vercel

## 🎯 主な機能

### ✅ 実装済み

- **認証システム**
  - ログイン/サインアップ
  - 3日間無料トライアル
  - ロールベースアクセス制御（学生/講師/管理者）
  - Supabase認証統合

- **データベース設計**
  - ユーザープロフィール
  - コース・レッスン管理
  - 学習進捗トラッキング
  - 記事・ニュース管理
  - ブックマーク機能

- **UI/UX**
  - レスポンシブデザイン
  - ランディングページ
  - ダッシュボード
  - 動画視聴ページ（UI のみ）
  - 講師一覧

### 🚧 実装予定

- **動画機能**
  - Cloudflare Stream統合
  - 動画プレーヤー実装
  - 進捗トラッキング
  - 講師用アップロード機能

- **決済機能**
  - Stripeサブスクリプション
  - プラン管理（プロフェッショナル¥1,800/月、学生¥500/月）
  - 請求管理

- **学習管理**
  - リアルタイム進捗トラッキング
  - 視聴履歴
  - 学習統計

## 🚀 セットアップ

### 1. リポジトリのクローン

```bash
cd nippon_kaigo_dojo
npm install --legacy-peer-deps
```

### 2. Supabaseプロジェクトのセットアップ

詳細は [SETUP.md](./SETUP.md) を参照してください。

**必要なステップ:**

1. [Supabase](https://supabase.com)でプロジェクト作成
2. `supabase/schema.sql`を実行してデータベースを作成
3. `supabase/seed.sql`でサンプルデータを投入（オプション）
4. API キーを取得

### 3. 環境変数の設定

`.env.local`ファイルにSupabaseの情報を設定：

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Cloudflare Stream (後で設定)
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_API_TOKEN=

# Stripe (後で設定)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開く

## 📁 プロジェクト構造

```
nippon_kaigo_dojo/
├── app/                      # Next.js App Router
│   ├── page.tsx             # ランディングページ
│   ├── login/               # ログインページ
│   ├── signup/              # サインアップページ
│   ├── dashboard/           # 学生用ダッシュボード
│   ├── watch/[id]/          # 動画視聴ページ
│   ├── instructors/         # 講師一覧・詳細
│   └── instructor/          # 講師用ページ
├── components/
│   ├── ui/                  # shadcn/ui コンポーネント
│   └── HeroSlider.tsx       # ヒーロースライダー
├── lib/
│   ├── supabase/            # Supabaseクライアント
│   │   ├── client.ts        # ブラウザ用
│   │   ├── server.ts        # サーバー用
│   │   └── middleware.ts    # ミドルウェア
│   ├── types/               # TypeScript型定義
│   │   └── database.ts      # データベース型
│   └── auth-context.tsx     # 認証コンテキスト
├── supabase/
│   ├── schema.sql           # データベーススキーマ
│   └── seed.sql             # サンプルデータ
├── middleware.ts            # Next.js ミドルウェア
└── SETUP.md                 # 詳細セットアップガイド
```

## 🗄️ データベース設計

### 主要テーブル

- **profiles** - ユーザープロフィール（Supabase Auth拡張）
- **instructors** - 講師情報
- **courses** - コース情報
- **lessons** - レッスン（動画）
- **user_progress** - 学習進捗
- **articles** - ニュース・記事
- **bookmarks** - ブックマーク

### セキュリティ

- Row Level Security (RLS)有効化
- ロールベースアクセス制御
- 自動プロフィール作成トリガー

## 🎬 動画機能（実装予定）

### Cloudflare Stream統合

1. Cloudflareアカウント作成
2. API トークン取得
3. 動画アップロードAPI実装
4. プレーヤーコンポーネント実装

**特徴:**
- 自動エンコーディング
- アダプティブビットレート
- グローバルCDN配信
- コスト効率的（$1/1000分視聴）

## 💳 決済機能（実装予定）

### Stripe統合

**プラン:**
- プロフェッショナル: ¥1,800/月
- 学生: ¥500/月
- 3日間無料トライアル

## 🔐 認証フロー

1. ユーザーがサインアップ
2. Supabase Authでアカウント作成
3. トリガーでprofilesテーブルにレコード作成
4. 3日間トライアル自動付与
5. ログイン後、ロールに応じてリダイレクト

## 📊 次のステップ

1. **Cloudflare Stream セットアップ** - 動画ホスティング
2. **動画プレーヤー実装** - Cloudflare Stream Player統合
3. **動画アップロード機能** - 講師用管理画面
4. **Stripe統合** - サブスクリプション決済
5. **進捗トラッキング** - リアルタイム学習進捗
6. **既存ページの更新** - バックエンドデータ統合

## 🧪 テスト

### テストアカウント作成

Supabaseダッシュボードで:

```
Email: test@example.com
Password: Test1234!
Auto Confirm: ON
```

## 📝 ライセンス

© 2025 NIPPON介護道場. All rights reserved.

## 🤝 サポート

質問や問題が発生した場合は、以下のドキュメントを参照してください：

- [SETUP.md](./SETUP.md) - 詳細セットアップガイド
- [Supabase Documentation](https://supabase.com/docs)
- [Cloudflare Stream Documentation](https://developers.cloudflare.com/stream/)
- [Next.js Documentation](https://nextjs.org/docs)
