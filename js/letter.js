//なまえを受け取る
let name = sessionStorage.getItem('name');
if (name == 'やまぐちひかり') {
  document.getElementById('name').textContent = 'Magu';
}
else if(name == 'つつみなるみ'){
  document.getElementById('name').textContent = 'Narumi';
}
else if(name == 'ふじもりゆいり'){
  document.getElementById('name').textContent = 'Yuiri';
}
else if(name == 'やなせきの'){
  document.getElementById('name').textContent = 'Kino';
}
else if(name == 'かやまゆきの'){
  document.getElementById('name').textContent = 'Yukino';
}
else if(name == 'もとだまな'){
  document.getElementById('name').textContent = 'Mana';
}
else if(name == 'よしいけなお'){
  document.getElementById('name').textContent = 'Nao';
}
else if(name == 'とやまふみか'){
  document.getElementById('name').textContent = 'Fumika';
}
else if(name == 'ふじきまい'){
  document.getElementById('name').textContent = 'Mai';
}
else if(name == 'なかざわみく'){
  document.getElementById('name').textContent = 'Mikuu';
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
else{
  window.location.href = './index.html';
}


sessionStorage.clear();
