# 取説

どうも、作成者のCrepusculumです。

このホームページはreact + TypeScriptを用いて作成しています。
分からねぇって方が大半だと思いますが、(私も分かりません)最低限のhtml(と空気を読む力)の知識があればコンテンツを追加できるように頑張りました。
ほめて←

ちょっと追加するだけなら1年の時tkngちゃんの洗礼を受けた例のhtml課題の知識でなんとかなるよ!

空気を読んで、divで囲っているところをコピペしてhtmlの知識に基いて書けばいけるかなと思います。
ダメそうだったら 大橋 に連絡して下さい。彼の人脈パワーでなんとかなる、はず。

最後に、こいつのコード分かりづら!俺の方が100倍いいコード書けるわって方はどしどし変えちゃって大丈夫です!
むしろやっちゃってくだせぇ()

## 環境構築

前提となるソフト: git, node.js

gitをインストールして、落としたい所にフォルダを作ります。ターミナルで $ cd フォルダのパス　と打ってディレクトリを写したあと、($は入れないでね！)

 $ git clone ここのurl 

と打つとローカル環境にこのファイルたちをdlできます。

次に、react 環境構築等でggって手順通りにnode.js, npmのインストールを行います。
一般的なチュートリアルでは $ create-react-app ... と打てって言われると思いますが、このファイル達はもうやってあるので必要ないです。
ここまで環境構築が完了したら、

 $ npm start 

と打つと起動されると思います。

コーディングはvscodeがおススメです。snippets等の拡張機能が優秀です。html, css, js, reactあたりの拡張機能を入れておきましょう。

更新したい場合はgithub push などでggってそれに沿ってやりましょう。(共同編集者になるのを忘れないで!!!)

## 付録

以下reactのあれです。備忘録にでもどうぞ

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
