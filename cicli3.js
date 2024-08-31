// let num = prompt('scegli la tua bevanda')



// while ( num  ) {
//     num = prompt('scegli la tua bevanda')
    
//     if( num == 1){
//         console.log(`hai scelto l'acqua`);
        
//     }else if (num == 2){
//         console.log(`hai scelto la coca cola`);
         
//     }else if ( num == 3) {
//         console.log(`hai scelto la birra`);
        
//     } else if ( num >= 3 || num <=0 ){
//         console.log('scelta non valida');
        
//     } else if ( num !== Number){
//         console.log('scelta non valida');

//     }
// }


// Correzione

let scelta;

do{
   scelta = Number(prompt('scegli la tua bevanda- 1 acuqa - 2 coca cola - 3 birra'));
   

   switch (scelta) {
    case  1:
        console.log(`hai scelto l'acqua`);
        
        break;
        case 2:
            console.log(`hai scelto la coca cola`);
          break;
        case 3 :
            console.log('hai scelto la birra3'); 
        break;
    default:
        console.log('scelta non valida');

        break;
   }
}while( scelta <1 || scelta > 3 );

                                                             

