const zagolovok = document.querySelector('.titel');
const knopka = document.querySelector('.baton');
const fon = document.querySelector('.body')
const zvuk = document.querySelector('.audio')

knopka.addEventListener('click', function (){

    if (zagolovok.style.color == ""){
        zagolovok.style.color = "red"
        zagolovok.style.fontSize = "200px"
        zvuk.play()
    }else if(zagolovok.style.color == "red"){
        zagolovok.style.color = "white"
        zagolovok.style.fontSize = "60px"
    }else{
        zagolovok.style.color = "red"
        zagolovok.style.fontSize = "200px"
        zvuk.play()
    };
});