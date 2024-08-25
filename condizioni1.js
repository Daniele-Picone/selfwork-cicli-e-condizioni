// converti numerico in giudizio



let voto = 30
voto = prompt('inserisci il voto');


if ( voto < 18 ){

    console.log(`il tuo voto è ${ voto } , hai un insufficenza!`);
    
}

if( voto >= 18 && voto <= 21){
    console.log(`il tuo voto è ${ voto}, La valutazione è sufficiente!`);
    
}

if( voto >= 21 && voto < 24 ){
    console.log(`la tua valutazione è ${voto}, Un bel Buono!`);
    
}

if(voto >= 24 && voto < 27 ){
    console.log(`la tua valutazione è ${ voto }, Sei Distinto!`);
    
}

if( voto >= 27 && voto <= 29){
    console.log(`Grande la tua valutazione è ${ voto }, Ottimo!`);
    
}
if( voto == 30 ){
    console.log(`Eccellente la tua valutazione è ${ voto }, ECCELLENTE!`);
    
}

if(voto > 30 ){
    console.log('valutazione errata');
    
}