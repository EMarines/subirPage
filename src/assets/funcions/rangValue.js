let lowRange, upRange, range
let rng;

  export function setRange(rng){
      console.log("El precio de la pripiedad es: ", rng)
      if(rng === "prm"){
        lowRange = 0, upRange=1000000                 // PRM
      }
      else if (rng === "sgn") {
        lowRange = 1000001, upRange=2500000           // SGN
      }
      else if (rng === "trc") {
        lowRange = 2500001, upRange=5000000           // TRC
      }
      else if (rng === "crt") {
        lowRange = 5000001, upRange=8000000           // CRT
      }
      else if (rng === "qnt") {                       // QNT
        console.log("si")
        lowRange = 8000001, upRange=12000000
         
      }
        else if (rng === "sxt") {
        lowRange = 12000000, upRange=1500000000       // SXT
      } 
      console.log(lowRange, upRange)
      
       
  };
  
    export function ranPrice(price){
      console.log("El precio de la pripiedad es: ", price)
      if(price <= 1000000){
        lowRange = 0, upRange=1000000                 // PRM
      }
      else if (price <= 2500000) {
        lowRange = 1000001, upRange=2500000           // SGN
      }
      else if (price <= 5000000) {
        lowRange = 2500001, upRange=5000000           // TRC
      }
      else if (price <= 8000000) {
        lowRange = 5000001, upRange=8000000           // CRT
      }
      else if (price <= 12000000) {                   // QNT
        console.log("si")
        return rng = "qnt"
      }
        else if (price > 12000000) {
        lowRange = 12000000, upRange=1500000000       // SXTre
      } 
      console.log(lowRange, upRange)
      return 
    };

  // Devuelve el rango en letras de un valor
    export function mosRange(price){
      // console.log("El precio de la pripiedad es: ", price)
      if(price <= 1000000){
        rng = "prm";                 // PRM
      }
      else if (price <= 2500000) {
        rng = "sgn"            // SGN
      }
      else if (price <= 5000000) {
        rng = "trc"            // TRC
      }
      else if (price <= 8000000) {
        rng = "crt"            // CRT
      }
      else if (price <= 12000000) {   // QNT
        rng = "qnt"  
      }
        else if (price > 12000000) {
        rng = "sxt"            // SXT
      } 
      console.log(rng)
      return rng     
    };

