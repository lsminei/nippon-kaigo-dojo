# NIPPON介護道場 セットアップガイド

このガイドでは、開発環境のセットアップ手順を説明します。

## 前提条件

- Node.js 18以上
- npm または pnpm
- Supabaseアカウント
- Cloudflareアカウント（動画機能用）
- Stripeアカウント（決済機能用）

## 1. Supabaseプロジェクトのセットアップ

### 1.1 Supabaseプロジェクトの作成

1. [Supabase](https://supabase.com)にアクセスしてログイン
2. "New Project"をクリック
3. プロジェクト情報を入力：
   - **Name**: nippon-kaigo-dojo
   - **Database Password**: 安全なパスワードを設定（後で使用）
   - **Region**: Northeast Asia (Tokyo) - 日本に近いリージョン
4. "Create new project"をクリック（数分かかります）

### 1.2 データベーススキーマの作成

1. Supabaseダッシュボードで"SQL Editor"を開く
2. `supabase/schema.sql`の内容をコピー＆ペースト
3. "Run"をクリックしてスキーマを作成

### 1.3 サンプルデータの投入（オプション）

1. SQL Editorで`supabase/seed.sql`の内容をコピー＆ペースト
2. "Run"をクリック

**注意**: サンプルデータを使用する前に、まずテストユーザーを作成する必要があります。

### 1.4 テストユーザーの作成

1. Supabaseダッシュボードで"Authentication"を開く
2. "Add user" → "Create new user"をクリック
3. テストユーザーを作成：
   - **Email**: tamaki@example.com
   - **Password**: Test1234!
   - **Auto Confirm User**: チェックを入れる

### 1.5 API キーの取得

1. Supabaseダッシュボードで"Settings" → "API"を開く
2. 以下の値をコピー：
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...`
   - **service_role key**: `eyJhbGc...` (管理用、秘密に保つ)

## 2. 環境変数の設定

`.env.local`ファイルを開き、Supabaseの情報を入力：

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

## 3. Cloudflare Streamのセットアップ

### 3.1 Cloudflareアカウントの作成

1. [Cloudflare](https://cloudflare.com)にアクセス
2. アカウントを作成
3. ダッシュボードで"Stream"を選択
4. 料金プランを確認して有効化

### 3.2 API トークンの作成

1. Cloudflareダッシュボードで"My Profile" → "API Tokens"を開く
2. "Create Token"をクリック
3. "Stream" テンプレートを選択
4. 必要な権限を設定：
   - **Stream: Edit** 権限を有効化
5. "Continue to summary" → "Create Token"
6. トークンをコピー（一度しか表示されません！）

### 3.3 Account IDの取得

1. Cloudflareダッシュボードで"Stream"を開く
2. URLから Account ID を取得: `https://dash.cloudflare.com/<account-id>/stream`

### 3.4 環境変数に追加

```bash
CLOUDFLARE_ACCOUNT_ID=your-account-id
CLOUDFLARE_API_TOKEN=your-api-token
```

## 4. Stripeのセットアップ（決済機能）

### 4.1 Stripeアカウントの作成

1. [Stripe](https://stripe.com/jp)にアクセス
2. アカウントを作成
3. まずは"テストモード"で開発

### 4.2 API キーの取得

1. Stripeダッシュボードで"Developers" → "API keys"を開く
2. 以下をコピー：
   - **Publishable key**: `pk_test_...`
   - **Secret key**: `sk_test_...`

### 4.3 サブスクリプション商品の作成

1. Stripeダッシュボードで"Products"を開く
2. "Add product"をクリック
3. プロフェッショナルプラン：
   - **Name**: プロフェッショナルプラン
   - **Price**: ¥1,800 / 月
4. 学生プラン：
   - **Name**: スチューデントプラン
   - **Price**: ¥500 / 月

### 4.4 環境変数に追加

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

## 5. アプリケーションの起動

```bash
# 依存関係のインストール（既に完了）
npm install --legacy-peer-deps

# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:3000 を開く

## 6. テストログイン

1. http://localhost:3000/login にアクセス
2. 作成したテストユーザーでログイン：
   - Email: tamaki@example.com
   - Password: Test1234!

## 次のステップ

- [ ] 認証機能の実装
- [ ] 動画プレーヤーの実装
- [ ] 動画アップロード機能の実装
- [ ] Stripe決済の統合
- [ ] 学習進捗トラッキング

## トラブルシューティング

### Supabaseに接続できない

- `.env.local`の値が正しいか確認
- Supabaseプロジェクトが起動しているか確認
- ブラウザのコンソールでエラーを確認

### データベースエラー

- スキーマが正しく作成されているかSQL Editorで確認
- RLSポリシーが有効になっているか確認

### 認証エラー

- Supabase Authenticationでユーザーが作成されているか確認
- メール確認が必要な場合は、"Auto Confirm User"を有効化

## サポート

問題が発生した場合は、以下を確認してください：

- [Supabase Documentation](https://supabase.com/docs)
- [Cloudflare Stream Documentation](https://developers.cloudflare.com/stream/)
- [Stripe Documentation](https://stripe.com/docs)
