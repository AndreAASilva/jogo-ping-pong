 //Elemntos do jogo

 var vbtIniciar;
 var vbola;
 var vcpu;
 var vjogador;
 var vPaineltxtPontos;

 //Controles de animação

 var game, frames;

 //Posições dos elementos 

 var posBolaX, posBolaY;
 var posJogadorX, posJogadorY;
 var posCpuX, posCpuY;

 //Direção de acordo com o teclado

 var dirJy;

 //Posições iniciais

 var posJogIniJ=180, posCpuIniY=180, posBolaIniX=475,posBolaIniY=240;

 //Tamanhos

 var campoX=0, campoY=0, campoW=960, campoH=500;
 var barraW=20, barraH=140, bolaW=20, bolaH=20;


 //Direção

 var bolaX, bolaY;
 var jogY=0, CpuY=0;

 //Velocidade

 var velBola, velCpu, velJogador;

 //Controle

 var pontos=0;
 var tecla;
 jogo=false; //Verificar se o jogo está rolando ou não

 function controlajog(){
     if(jogo){
         posJogadorY+=velJogador*dirJy;
         vjogador.style.top=posJogadorY+'px';
     }
 }


 function teclaDw(){
     tecla=event.keyCode;
         if(tecla==38){//CIMA
             dirJy=-1;
         }else if(tecla==40){//BAIXO
             dirJy=+1;
         }
 }

 function teclaUp(){
     tecla=event.keyCode;
         if(tecla==38){//CIMA
             dirJy=0;
         }else if(tecla==40){//BAIXO
             dirJy=0;
         }
 }


 function game(){
     if(jogo){
         controlajog()
     }
     frames=requestAnimationFrame(game)
 }


 function iniciaJogo(){
     if(!jogo){
         cancelAnimationFrame(frames)
         jogo=true;
         dirJy=0;
         posBolaX=posBolaIniX;
         posBolaY=posBolaIniY;
         posJogadorY=0;
         posCpuY=posCpuIniY;
         game()
     }
 }


 function inicializa(){
     velBola=velCpu=velJogador=8;
     vbtIniciar=document.getElementById('btIniciar')
     vbtIniciar.addEventListener('click',iniciaJogo)
     vjogador=document.getElementById('dvJogador')
     vcpu=document.getElementById('dvCpu')
     vbola=document.getElementById('dvBola')
     vPaineltxtPontos=document.getElementById('txtPontos')
     document.addEventListener('keydown',teclaDw)
     document.addEventListener('keyup',teclaUp)
 }

 window.addEventListener("load",inicializa)