import { db } from "../db";
import { contact, systStatus, proInterest} from '../../stores/stores'

let lowRange;
let upRange;
let message;
let proInt=[];

    function ranPrice(rangeProp) {
      console.log("ir a range price", systStatus)
    }

// Filtrar contact -- properties
    export function filtContPropInte($contact){

       let proInt = db.properties
        proInt = proInt.filter((item) => item.selectTP === $contact.selecTP);
        // console.log(proInt )
       
       if ($contact.numBeds > 0) {
         proInt = proInt.filter((item) => item.beds >= $contact.numBeds);
        }
        // console.log(proInt)
        if ($contact.numBaths > 0) {
          proInt = proInt.filter((item) => item.bathroom >= $contact.numBaths);
        }
        // console.log(proInt)

        if ($contact.numParks > 0) {
          proInt = proInt.filter((item) => item.park >= $contact.numParks);
        }
        // console.log(proInt)
        // Filtra por Rango
        if($contact.budget){
          lowRange=($contact.budget * .7)
          upRange=($contact.budget * 1.1)
          proInt = proInt.filter(function (prop) {
            return (prop.price >= lowRange && prop.price <= upRange);
          });  
          
        } else {
          
          ranPrice($contact.rangeProp);
          proInt = proInt.filter(function (prop, index) {
            return (prop.price >= lowRange &&  prop.price <= upRange);
          });
        };
        
        // Filtra por Ubicación  
        if($contact.locaProperty.length > 0){
          {proInt = proInt.filter(e => ($contact.locaProperty).some(c => (e.locaProperty).includes(c)))};
        };
        
        // Filtra por Etiquetas
        if($contact.tagsProperty.length > 0){
          // console.log("estas dentro de tags", $contact.tagsProperty.length)
          proInt= proInt.filter(e => $contact.tagsProperty.every(c => e.tagsProperty.includes(c)));
        };
        // console.log(proInt) 

        if (proInt.length === 0) {
            message = "No hay resultados con este criterio de busqueda"
            // console.logproInt.length, message)
        } else {
          message = ("Se encontraron" + proInt.length + "propiedades con este criterio de busqueda" )
        };
          
          // console.log(proInt)
        return proInterest.set(proInt)
          //  console.log(proInterest) 
          //  $systStatus = "contSelect"
    }
