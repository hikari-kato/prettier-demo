# Prettier 導入サンプル

Web ページのソースコード（HTML・CSS・JavaScript など）の**見た目の揃え方**を、ファイルを保存したときに自動で整えるための設定例です。

---

## 何のために使うか

同じ内容でも、人によって改行や余白の入れ方がバラバラになりがちです。  
Prettier を使うと、**保存するだけで**チーム内で揃った書き方になります。

- 手で体裁を直す手間が減る
- 「ここは改行を揃えて」といったやりとりが減る

---

## 導入手順（最低限）

### 1. 拡張機能を入れる

**VS Code** または **Cursor** で、次の拡張機能をインストールします。

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

（拡張機能の検索欄に「Prettier」と入力すると見つかります）

### 2. 設定ファイルをプロジェクトに置く

プロジェクトの**一番上のフォルダ**に、次の 3 つを置きます。  
このリポジトリからそのままコピーして使えます。

| ファイル名              | ざっくりした役割               |
| ----------------------- | ------------------------------ |
| `.prettierrc`           | チームで揃えるルール           |
| `.prettierignore`       | 自動整形しないファイルの一覧   |
| `.vscode/settings.json` | 「保存したら整える」などの設定 |

### 3. プロジェクトを開いて試す

1. Cursor / VS Code で、このプロジェクトのフォルダを開く
2. `sample.html` を開く
3. わざと改行や余白を崩してから **保存**（Mac: `⌘ + S` / Windows: `Ctrl + S`）
4. 保存した瞬間に、きれいに揃えば成功です

同じ要領で、次のファイルでも試せます。

- `common/js/sample.js`
- `common/sass/sample.scss`

**PHP について:** Prettier は PHP ファイルには対応していません。`.php` を保存しても自動では整いませんが、不具合ではなく想定どおりの動きです。

---

## スタイル（CSS）を SCSS で書いている場合

このサンプルでは、スタイルは `common/sass/sample.scss` を編集します。  
`common/css/sample.css` は自動で作られるファイルなので、**こちらは直接いじらない**でください。

SCSS を CSS に変換する機能を使う場合は、別途 [Live Sass Compile](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) という拡張機能も入れてください（設定はすでに `.vscode/settings.json` に入っています）。

---

## 保存しても整わないとき

- Prettier の拡張機能が入っているか、もう一度確認する
- プロジェクトのフォルダごと開いているか確認する（ファイル 1 つだけ開いていると設定が効かないことがあります）
- スタイルを直したいのに `sample.css` を開いていないか確認する（編集するのは `sample.scss` 側です）
- **PHP ファイル**を試したが整わない → Prettier は PHP 非対応です（上記「PHP について」を参照）

それでも直らない場合は、分かりそうな人にご相談ください。
