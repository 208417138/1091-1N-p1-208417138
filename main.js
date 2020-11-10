document.querySelector('.mc').addEventListener('click', () => {
    document.querySelector('.classdemo').classList.toggle('show');
  });
  document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('.classdemo').classList.toggle('show');
  });
function change(index) {
    const p = document.getElementById('switch');
    console.log('switch', p);
    switch (index) {
      case 1:
        p.innerHTML =
          "<iframe width=100% height=100% src='../w01-intro-pokemon/index.html'/>";
        break;
      case 2:
        p.innerHTML =
          "<iframe width=100% height=100% src='../w01-intro-pokemon/pokemon.html'/>";
        break;
      case 3:
        p.innerHTML =
          "<iframe width=100% height=100% src='../w02-blog/blog.html'/>";
        break;
      case 4:
        p.innerHTML =
          "<iframe width=100% height=100% src='../w02-imgGallery/imgGallery.html'/>";
        break;
      case 5:
        p.innerHTML =
          "<iframe width=100% height=100% src='../w03-div/div.html'/>";
        break;
      case 6:
        p.innerHTML =
          "<iframe width=100% height=100% src='../w03-div-tku60/div_tku60.html'/>";
        break;
      case 7:
        p.innerHTML =
          "<iframe width=100% height=100% src='../w04-tku60-js/div_tku60.html'/>";
        break;
      case 8:
        p.innerHTML =
          "<iframe width=100% height=100% src='../w05-bootstrap/nav.html'/>";
      case 9:
        p.innerHTML =
          "<iframe width=100% height=100% src='../w07-msclone/index.html'/>";
        break;
      case 10:
        p.innerHTML="<iframe width=100% height=100% src=''>";
        break;
      case 11:
            p.innerHTML="<iframe width=100% height=100% src='./109-1課表/課表.html'>";
            break;
      case 12:
            p.innerHTML="<iframe width=100% height=100% src='./履歷表/履歷表.html'>";
            break;            
    }
  }