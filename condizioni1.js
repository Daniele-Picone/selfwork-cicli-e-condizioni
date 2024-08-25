// converti numerico in giudizio



// let voto = 30
// voto = prompt('inserisci il voto');


// if ( voto < 18 ){

//     console.log(`il tuo voto è ${ voto } , hai un insufficenza!`);
    
// }

// if( voto >= 18 && voto <= 21){
//     console.log(`il tuo voto è ${ voto}, La valutazione è sufficiente!`);
    
// }

// if( voto >= 21 && voto < 24 ){
//     console.log(`la tua valutazione è ${voto}, Un bel Buono!`);
    
// }

// if(voto >= 24 && voto < 27 ){
//     console.log(`la tua valutazione è ${ voto }, Sei Distinto!`);
    
// }

// if( voto >= 27 && voto <= 29){
//     console.log(`Grande la tua valutazione è ${ voto }, Ottimo!`);
    
// }

// if( voto == 30 ){
//     console.log(`Eccellente la tua valutazione è ${ voto }, ECCELLENTE!`);
    
// } else if( voto > 30){
//     console.log('valitazione errata');
    
// }


//  if/else if/else

// let voto = 30
// voto = prompt('inserisci il voto')

// if(voto <= 18){
//     console.log('inssufficiente');
    
// }else if( voto > 18 && voto <= 21){
//     console.log('sufficenza');

    
// }else if( voto > 21 && voto <= 24){
//     console.log('buono');
    
// }else if( voto > 24 && voto <=27 ){
//     console.log('Distinto');
    
// }else if( voto > 27 && voto <= 29){
//     console.log('ottimo');
    
// }else if ( voto == 30){
//     console.log('eccellente');

    
// }else if( voto > 30 ){
//     console.log('valutazione errata');
    
// }





// SWITCH

let voto = prompt('inserisci voto');
let giudizio;

switch (true) {
    case voto <= 18:
        giudizio = 'insufficiente'
        
        break;
        case voto > 18 && voto <= 21:
        giudizio = 'sufficiente'
        
        break;
        case voto > 21 && voto <= 24:
        giudizio = 'buono'
        
        break;
        case voto > 24 && voto <= 27:
        giudizio = 'distinto'
        
        break;
        case voto > 27 && voto <= 29:
        giudizio = 'ottimo'
        
        break;
        case voto == 30 :
        giudizio = 'ECCELLENTE'
        
        break;

    default:
        giudizio = ' giudiozio non valido'
        break;
}

console.log(giudizio);

