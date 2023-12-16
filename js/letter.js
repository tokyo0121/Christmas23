//なまえを受け取る
let name = sessionStorage.getItem('name');
if (name == 'サーフィン') {
  document.getElementById('name').textContent = 'Magu';
}
else if(name == 'キラキラ'){
  document.getElementById('name').textContent = 'Narumi';
}
else if(name == 'あかふく'){
  document.getElementById('name').textContent = 'Yuiri';
}
else if(name == 'えいがかん'){
  document.getElementById('name').textContent = 'Kino';
}
else if(name == 'パパド'){
  document.getElementById('name').textContent = 'Yukino';
}
else if(name == 'ミラノ'){
  document.getElementById('name').textContent = 'Mana';
}
else if(name == 'パエリア'){
  document.getElementById('name').textContent = 'Yumi';
}
else if(name == 'リバティ'){
  document.getElementById('name').textContent = 'Nao';
}
else if(name == 'ハロッズ'){
  document.getElementById('name').textContent = 'Fumika';
}
else if(name == 'パノラマ'){
  document.getElementById('name').textContent = 'Mai';
}
else if(name == 'やまだひかり'){
  document.getElementById('name').textContent = 'Hikari';
}
else if(name == 'そねはらのぼる'){
  document.getElementById('name').textContent = 'そねっち';
}
else if(name == 'すずきたかひさ'){
  document.getElementById('name').textContent = '鈴木せんせい';
}
else if(name == 'a'){
  document.getElementById('name').textContent = 'test';
}
else{
  window.location.href = './index.html';
}


sessionStorage.clear();
