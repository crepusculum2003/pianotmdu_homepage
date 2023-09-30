# 取説

2023年作成

どうも、作成者のCrepusculumです。

このホームページはreact + TypeScriptを用いて作成しています。
分からねぇって方が大半だと思いますが、(私も分かりません)コード自体は最低限のhtml(と空気を読む力)の知識があればコンテンツを追加できるように頑張りました。

ちょっと追加するだけなら1年の時tkngちゃんの洗礼を受けた例のhtml課題の知識でなんとかなるよ!
空気を読んで、divで囲っているところをコピペしていい感じに書けばいけるかなと思います。
ダメそうだったら 大橋 に連絡して下さい。彼の人脈パワーでなんとかなる、はず。

フォントは容量削減のため常用漢字＋英数字+最低限の記号のみカバーしているので
カバーしてない漢字がある場合は.woffファイルを置き換えるなり別途用意するなりして下さい。
使用フォントは Noto Serif JP です。


(作成者の怠慢により)容量が3MB近くあるため、写真を追加する場合は出来るだけ軽量化してください。
ついでに既存の写真も軽量化できたらお願いします。


最後に、俺の方が100倍いいコード書けるわって方はどしどし変えちゃって大丈夫です!
むしろやっちゃってくだせぇ()


## Change log

ver 1.02: 写真の追加/リサイズによる軽量化
ver 1.01: 内容の修正

## 引継ぎ

githubの共同編集者になる(または既存のアカウントの情報もらう)
google analyticsの...(ry)


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

このリポジトリを更新したい場合はgithub push などでggってそれに沿ってやりましょう。(公開されてるサイトには反映されません)

更新をサイトに反映させたい場合はgithub pages reactでggって出来そうなのを見繕いましょう。
(参考にしたサイト https://qiita.com/EisKern/items/15dcf7864fa49df8f247)

