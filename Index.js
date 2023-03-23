function Jeu(titre, annee, console, image, description) {
  this.titre = titre;
  this.annee = annee;
  this.console = console;
  this.image = image;
  this.description = description;
}

let p=0;
let container = document.getElementById('container');
let g = document.getElementById('g');
let d = document.getElementById('d');
let pop = document.getElementById('pop');
pop.addEventListener('click', () => {
  pop.innerHTML = "";
  pop.classList.remove('active');
})

let maCollection = {
  mario1 : new Jeu("Super Mario bros", "1985", "Nintendo Entertainment system", "mario1", "Super Mario Bros. (スーパーマリオブラザーズ, Sūpā Mario Burazāzu?) est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario."),
  mario2 : new Jeu("Super Mario Bros The Lost Levels", "1986", "Famicom Disk System", "mario2", "lorem2"),
  mario3 : new Jeu("Super Mario bros 2", "2001", "Nintendo Entertainment system", "mario3", "lorem3"),
  mario4 : new Jeu("Super Mario bros 3", "2003", "Nintendo Entertainment system", "mario4", "lorem4"),
  mario5 : new Jeu("Super Mario 64", "1996" ,"Nintedo 64", "mario5", "lorem5"),
  mario6 : new Jeu("New Super Mario bros", "2006", "Nintendo DS", "mario6", "lorem6"),
  mario7 : new Jeu("New super Mario bros Wii", "2009", "Nintendo WII", "mario7", "lorem7"),
  mario8 : new Jeu("New Super Mario bros 2", "2012", "Nintendo 3DS", "mario8", "lorem8"),
  mario9 : new Jeu("New Super Mario bros U", "2012", "Nintendo WII U", "mario9", "lorem9"),
  mario10 : new Jeu("New Super Mario Bros U Deluxe", "lorem10")
};

let nbr=Object.keys(maCollection).length;

Object.values(maCollection).map(el => {
  let div = document.createElement('div');
  div.className = "game";
  div.style.backgroundImage = "url('img/"+el.image+".jpg')";
  div.style.backgroundSize= '100%';
  div.style.backgroundRepeat= 'no-repeat';
  let img = document.createElement('div');
  img.className = "img";
  img.innerHTML = "PLUS";
  

  div.innerHTML=`<div><h2>Console : ${el.console}</h2> <h3>Titre : ${el.titre}</h3> <h4>Année : ${el.annee}</h4></div>`;
  img.addEventListener('click', () => {
      pop.classList.add('active');
      let div = document.createElement('div');
      div.classList.add('content');
      div.innerHTML = `<div class="content--text"><h2>${el.titre}</h2> <h3><span>Console :</span> ${el.console}</h3> <h4><span>Année :</span> ${el.annee}</h4> <p>${el.description}</p></div><div class="content--container"><div class="content--img"><img src="img/marioicon.png"></div><div><img src='img/logo${el.image}.jpg'></div></div>`;
      pop.appendChild(div);
  });
  div.appendChild(img);
  container.appendChild(div);
});

d.addEventListener("click", function(){
  if( p == -nbr+1) {
      p = 0;
  } else {
      p--;
  }
  TranslateImage()
});

g.addEventListener("click", function(){
  if( p == 0) {
      p = -nbr+1;
  } else {
      p++;
  }
  TranslateImage()
});
function TranslateImage() {
  container.style.transform="translate("+p*600+"px)";
}