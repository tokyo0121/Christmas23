//なまえを受け取る
let name = sessionStorage.getItem('name');
if (name == 'サーフィン') {
  document.getElementById('name').textContent = 'Magu';
  document.getElementById('main1').textContent = '2023年は大学を卒業して社会人になるっていう、私たちにとって、かなりBigなYearだったね〜。まぐにも会える機会減っちゃうかなぁ、悲しいなぁ、と思っていたけれど、なんだかんだ毎月会えただけじゃなく、学生時代はレアだった「まぐと遊ぶ日」が増えた！！そしてやっぱり津田津田しい私たちはラジオまで始めちゃって、ラジオのためではあるけど、２週間に1回くらい、定期的にまぐとお喋りできる時間があることがとても幸せです☺️';
  document.getElementById('main2').textContent = 'いやはや、私は社会人になってからね、まぐになりたいな〜って思うことが増えたよ。「えなんでなんで意味わかんないw」って言ってるまぐが今頭をよぎったけど、ほんとだからね？笑　私長女だけど、たいちゃんみたいにマネジメント力ないから大変！毎月「計画性を持ちましょう」って上司にフィードバック書かれてるんだから！';
  document.getElementById('main3').textContent = '学生時代、私の気付いてた範囲以上にきっとまぐは色んな所で支えてくれてたんだと、"親離れ"ならぬ"まぐ離れ"をして日々感じてます…まぐ離れ出来てるのかは不明だけど。今年も私と沢山の時間を過ごしてくれてありがとう。来年も社会の荒波に負けず、沢山楽しい思い出作ろうね！';
}
else if(name == 'キラキラ'){
  document.getElementById('name').textContent = 'Narumi';
  document.getElementById('main1').textContent = '社会人になったら、なるみちゃんはきっと沢山残業するだろうし、週末はきっとお疲れだろうし、家族にもちゃんと連絡とって、ご飯もゼリーに頼らずちゃんと食べてるかしら、ってみんなで心配してた卒業前。定期的に会ってくれるくらいに、なるみちゃんが元気そうで、いつも元気ななるみちゃんを見てホッと安心しているよ！そしてそれ以上に元気ももらってます！本当になるみちゃんと話してるとね、文字通り元気が出るのよ。いつも何か新しいエピソードがあるし、それをとっても楽しそうに話すなるみちゃんが可愛くて！(まなみちゃんに怒られそう笑)';
  document.getElementById('main2').textContent = 'あしげく大学に通ってた時期も懐かしい☺️ そろそろね、いげなるでまた何かしたいよね〜！分析コンペでも、ビジコンでも、はたまた何か学校に持ち込み企画とか？大学でなるみちゃんと共有する時間が長かった分、社会人になって一番寂しさを感じる部分はそこなのかなと思っています。毎日大変だけど、「何か」してたいじゃん？次の日絶対後悔するけど、夜中まで作業してたのもいい思い出だよね😆 ';
  document.getElementById('main3').textContent = 'なるちゃん、忙しい合間を縫って、今年も沢山の時間を一緒に過ごしてくれてありがとう。来年のビッグイベントはパリだね！来年も一緒に沢山楽しい思い出作ろうね！';
}
else if(name == 'あかふく'){
  document.getElementById('name').textContent = 'Yuiri';
  document.getElementById('main1').textContent = '2023年は伊勢志摩旅行から始まり、卒業前にもいちごのアフタヌーンティーでお祝いしてくれたり、星の王子ミュージアムに行ったり。社会人になってからも、お互い忙しいはずなのに、休日に色んな場所にゆいりと一緒に行けて楽しかったよ！大学時代と変わらず、ゆいりと一緒にいる時間がとっても心地よくて、次の約束が出来るとウキウキしちゃう😆(仙台もとっても楽しみ！)';
  document.getElementById('main2').textContent = 'あとね、ゆいりと同じSE職、同じ職種だから話せることあって嬉しいよ！私も早く基本情報取らなきゃ〜';
  document.getElementById('main3').textContent = '来年も沢山楽しい思い出つくろうね！仙台、ディズニー、そしてパリ！全部誘ってくれてありがとう！既にこんなにゆいりと遊べる予定あるの嬉しすぎる😆✨';
}
else if(name == 'えいがかん'){
  document.getElementById('name').textContent = 'Kino';
  document.getElementById('main1').textContent = '2023年、一番お喋りしたのはきのちゃんなんじゃないかなぁ、と思うくらい、今までの大学生活で話せなかった時間を取り戻す勢いで一緒に遊んで沢山お喋りしてもらいました。ありがとう！どんな時でも話したいことや自分の理想の形があるきのちゃんを尊敬してます。毎週きのちゃんが書いてくれる概要欄が楽しみなの〜！一番最初に読める特権！私もきのちゃんみたいに、温かくて、心にすーっと寄り添ってくれるような文章が書けたらなぁといつも羨ましく思っているよ！';
  document.getElementById('main2').textContent = 'あとね、きのちゃんって普段はチャキチャキしてて、ファッションもメイクもエレガントでかっこいいイメージだけど、ふとした瞬間にニフラーみたいな顔でニマァって笑ってる顔が、私はとっても大好き笑';
  document.getElementById('main3').textContent = '今年も私と沢山の時間を過ごしてくれてありがとう。来年も社会の荒波に負けず、素敵な夢みて、沢山楽しい思い出作ろうね！';
}
else if(name == 'パパド'){
  document.getElementById('name').textContent = 'Yukino';
  document.getElementById('main1').textContent = 'パパド、ちょっと難関すぎた？笑 今年はゆきのちゃまが藤沢に行って、あんまり会えないのかなぁ、寂しいなぁ、と思っていたけど、湘南にも猿島にも一緒に行けて、神奈川を一緒に満喫(？)出来て楽しかったよー！まぐパパに連れて行ってもらったスープカレー、絶品だったねぇ。また行きたい🍛　今度藤沢にも遊びに行きたいし、あと横浜で新年会しようね！🚢 ';
  document.getElementById('main2').textContent = 'あとね！会えてなくてもコンスタントに連絡取れてることが結構嬉しいよ！結構ね、社会人になってから知り合いとの連絡途切れがちだから、インスタにコメント入れてくれたり、ambitiousのグループにゆきのちゃまも入ってくれて嬉しい☺️';
  document.getElementById('main3').textContent = '今年1年も仲良くしてくれてありがとう！来年も沢山楽しい思い出つくろうね♪　(結婚式のご招待お待ちしてます😚💕)';
}
else if(name == 'ミラノ'){
  document.getElementById('name').textContent = 'Mana';
  document.getElementById('main1').textContent = 'まなたん、毎日寒い日が続くけど、風邪ひいたりしてない？なんか最近ね、寒くなればなるほど、去年ヨーロッパで寒がってたまなたんのこと思い出しちゃうの笑（もうあれから１年経つの衝撃！！）　温かいもの沢山食べて、お腹冷やさないように暖かい服装してね！';
  document.getElementById('main2').textContent = 'そねっちのタイ出発のお見送り以来会えてなくて寂しい〜〜🥲 来年はもう少し会える機会あるといいなー！お仕事忙しいと思うけど、あまり無理せず！まなたんが楽しくお仕事してくれてたら私も嬉しいよ！';
  document.getElementById('main3').textContent = '今年１年、ありがとう。来年も仲良くしてね🫶';
}
else if(name == 'パエリア'){
  document.getElementById('name').textContent = 'Yumi';
  document.getElementById('main1').textContent = '夏前？くらいに川崎で会えた日から、お仕事どう？私はあんなにJava頑張ったのに、まさかのローコード開発の部署！全然Javaじゃなくて、頑張った分少しショックだったんだけど、でも意外とJavaを勉強してたからシステムの構造とか用語とか分かって、最近ようやくSEらしくお仕事してるよ〜';
  document.getElementById('main2').textContent = '川崎で食べたパエリア、美味しかったね🥘意外とSE職って周りに少ないから、あの日ゆうみと色々話して共感しあえたのすごく楽しかった〜！湘南にもみんなと一緒に来てくれてありがとね🫶';
  document.getElementById('main3').textContent = '今年１年、お互いよく頑張ったよね！卒業してからも仲良くしてくれてありがとう。来年もまたご飯とか行きたい〜！よいお年を！'
}
else if(name == 'リバティ'){
  document.getElementById('name').textContent = 'Nao';
  document.getElementById('main').textContent = ''
}
else if(name == 'ハロッズ'){
  document.getElementById('name').textContent = 'Fumika';
  document.getElementById('main').textContent = ''
}
else if(name == 'パノラマ'){
  document.getElementById('name').textContent = 'Mai';
  document.getElementById('main').textContent = ''
}
else if(name == '1103'){
  document.getElementById('name').textContent = 'Hikari';
  document.getElementById('main1').textContent = '年賀状代わりのクリスマスカードだよ！今年はSEらしくサイトを作ってみたのだ〜！今思えば、ひかりさんにあまり自分が作ったもの見せたことない気がしたし、いい機会と思った先輩の意地！笑　これもフロントはHTML／CSS、バックはJavaScriptで書いてるよ。先人たちの力が大きいけれど！（例のおさんぽアプリ(?)はその後どう？また話聞かせてね！）';
  document.getElementById('main2').textContent = '山田ひかりが3年生になるなんて、おばさん信じられないよ。進路選択、卒論とまだまだ大学生活のお楽しみは沢山あるので大いに謳歌して、たまには私にもその頑張りを聞かせてください☺️ ';
  document.getElementById('main3').textContent = 'あ、あと最近インスタにあがる写真のクオリティが爆上がりしてない？iPhone15？腕の上達？笑　ウィキッドも見にいこうね〜！良いお年を！';
}
else if(name == 'そねはらのぼる'){
  document.getElementById('name').textContent = 'そねっち';
  document.getElementById('main1').textContent = 'バンコクまで郵便出すのも風情があって素敵だけど、せっかくSE職に就いたので、今年のクリスマスカード兼年賀状はこちらのサイトでお届けします✉️　';
  document.getElementById('main2').textContent = 'バンコクでの生活には慣れましたか？そねゼミのグループに時々写真を送って下さって、いつの間にかタイ文字も書けるようになってるし、本当に衰えという言葉はそねっちの中にはないんだな〜とつくづく感じています！私もそねゼミ出身らしく、毎日楽しくお仕事しています！';
  document.getElementById('main3').textContent = 'お身体に気をつけて、3月の一時帰国の際にお会いできることを楽しみにしています！';
}
else if(name == 'すずきたかひさ'){
  document.getElementById('name').textContent = '鈴木先生';
  document.getElementById('main1').textContent = '';
}
else{
  window.location.href = './index.html';
}


sessionStorage.clear();
