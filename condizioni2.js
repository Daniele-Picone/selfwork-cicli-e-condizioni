// if/else

// temperatura = prompt('inserisci la temperatura')

// if( temperatura >= 30){
//     console.log('lu mare, lu sole lu iento');
    
// }else if( temperatura < 30 && temperatura >= 20){
//     console.log('mi di una peroni sudata');
    
// }else if( temperatura <= 19 && temperatura >= 0 ){
//     console.log('non ci sono piu le mezze stagioni');
    
// }else if( temperatura < 0 && temperatura >= -10){
//     console.log(`non è tanto freddo quanto l'umidità`);
    

// }else if( temperatura < -10){
//     console.log('copriti.. ancora ti raffreddi');
    
// }





// SWITCH

temperatura = prompt('inserisci la temperatura')

switch (true) {
    case temperatura >30 :
        console.log('lu sule lu mare lu ientu');
        break;
        case temperatura <= 30 && temperatura >= 20 :
        console.log('mi dia una peroni sudata');
        break;
        case temperatura < 20 && temperatura >= 0 :
        console.log('onon esistono piu le mezze stagioni');
        break;
        case temperatura < 0 && temperatura >= -10 :
        console.log(`non è tanto freddo quanto l'umidità`);
        break;
        case temperatura < -10 :
        console.log('copriti ancora che ti freddi');
        break;
       
    default: console.log('temperatura non valida');
    
        break;
}