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
  document.getElementById('main').textContent = ''
}
else if(name == 'あかふく'){
  document.getElementById('name').textContent = 'Yuiri';
  document.getElementById('main').textContent = ''
}
else if(name == 'えいがかん'){
  document.getElementById('name').textContent = 'Kino';
  document.getElementById('main').textContent = '2023年、一番お喋りしたのはきのちゃんなんじゃないかなぁ、と思うくらい、今までの大学生活で話せなかった時間を取り戻す勢いで一緒に遊んで沢山お喋りしてもらいました。ありがとう！「何か新しいこと始めたい」って春からずっと話してて、津田津田しい私たちは、津田津田しいラジオまで始めちゃって！どんな時でも話したいことや自分の理想像があるきのちゃんを尊敬してます。毎週きのちゃんが書いてくれる概要欄が楽しみなの〜！一番最初に読める特権！私もきのちゃんみたいに、温かくて、心にすーっと寄り添ってくれるような文章が書けたらなぁといつも羨ましく思っているよ！あとね、きのちゃんって普段はチャキチャキしてて、ファッションもメイクもエレガントでかっこいいイメージだけど、ふとした瞬間にニフラーみたいな顔でニマァって笑ってる顔が、私はとっても大好き笑　今年も私と沢山の時間を過ごしてくれてありがとう。来年も社会の荒波に負けず、素敵な夢みて、沢山楽しい思い出作ろうね！'
}
else if(name == 'パパド'){
  document.getElementById('name').textContent = 'Yukino';
  document.getElementById('main').textContent = ''
}
else if(name == 'ミラノ'){
  document.getElementById('name').textContent = 'Mana';
  document.getElementById('main').textContent = ''
}
else if(name == 'パエリア'){
  document.getElementById('name').textContent = 'Yumi';
  document.getElementById('main').textContent = ''
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
  document.getElementById('main1').textContent = '年賀状代わりのクリスマスカードだよ！今年はSEらしくサイトを作ってみたのだ〜！今思えば、ひかりさんにあまり自分が作ったもの見せたことない気がしたし、いい機会と思った先輩の意地！笑　これもフロントはHTML／CSS、バックはJavaScriptで書いてるよ。先人たちの力が大きいけれど！（例のおさんぽアプリ(?)はその後どう？また話聞かせてね！）'
  document.getElementById('main2').textContent = '山田ひかりが3年生になるなんて、おばさん信じられないよ。進路選択、卒論とまだまだ大学生活のお楽しみは沢山あるので大いに謳歌して、たまには私にもその頑張りを聞かせてください☺️ '
  document.getElementById('main3').textContent = 'あ、あと最近インスタにあがる写真のクオリティが爆上がりしてない？iPhone15？腕の上達？笑　ウィキッドも見にいこうね〜！良いお年を！'
}
else if(name == 'そねはらのぼる'){
  document.getElementById('name').textContent = 'そねっち';
  document.getElementById('main').textContent = ''
}
else if(name == 'すずきたかひさ'){
  document.getElementById('name').textContent = '鈴木せんせい';
  document.getElementById('main').textContent = ''
}
else if(name == 'a'){
  document.getElementById('name').textContent = 'test';
}
else{
  window.location.href = './index.html';
}


sessionStorage.clear();
