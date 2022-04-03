// darkmode theme

const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

load();

bdark.addEventListener('click', e=>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
});

function load(){
    const darkmode = localStorage.getItem('darkmode');

    if(!darkmode){
        store('false');
    }else if(darkmode == 'true'){
        body.classList.add('darkmode');
    }
}

function store(value){
    localStorage.setItem('darkmode', value);
}


// saludo
 
function mostrarSaludo(){
 
  fecha = new Date(); 
  hora = fecha.getHours();
 
  if(hora >= 0 && hora < 12){
    texto = "Good morning!";
  }
 
  if(hora >= 12 && hora < 18){
    texto = " Good afternoon!";
 
  }
 
  if(hora >= 18 && hora < 24){
    texto = "Good night!";
   
  }
 

  document.getElementById('txtsaludo').innerHTML = texto;
 
}
