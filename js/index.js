function nameClick(){
  let inputName = document.getElementById('name').value;
  console.log(inputName); //後で消す
  //ローカルステージに値を持たせる
  if (!(inputName)) {
    alert('なまえを入力してね！');
  }
  else {
    sessionStrage.setItem('name', inputName);
  }
}
