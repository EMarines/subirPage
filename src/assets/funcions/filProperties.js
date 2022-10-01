import { db } from "../db";
import { contact, systStatus, proInterest, property} from '../../stores/stores'
import { setRange } from '../funcions/rangValue'

let lowRange;
let upRange;
let message;
// let item;
// let proInt=[];
// let proInt2=[];

    export function filtContPropInte($contact){

       let proInt = db.properties
        proInt = proInt.filter((item) => item.selectTP === $contact.selecTP);
        console.log("filtraste por tipo de propiedad", proInt )
       
       if ($contact.numBeds > 0) {
         proInt = proInt.filter((item) => item.beds >= $contact.numBeds);
        }

        if ($contact.numBaths > 0) {
          proInt = proInt.filter((item) => item.bathroom >= $contact.numBaths);
        }

        if ($contact.numParks > 0) {
          proInt = proInt.filter((item) => item.park >= $contact.numParks);
        }
        console.log("Por caracteristicas", proInt)

    // Filtra por Rango
        if($contact.budget){
          console.log("filtraste por budget")
          lowRange=($contact.budget * .7)
          upRange=($contact.budget * 1.1)
          proInt = proInt.filter(function (prop) {
            (prop.price >= lowRange && prop.price <= upRange);
          })         
        } else {         
          console.log("filtraste por rango")
          proInt = proInt.filter((prop) => prop.rangeProp === $contact.rangeProp);  
        };
        
    // Filtra por Ubicación  
        if($contact.locaProperty.length > 0){
          {proInt = proInt.filter(e => ($contact.locaProperty).some(c => (e.locaProperty).includes(c)))};
        };
        console.log("Filtraste por Ubicacion", proInt)
        
    // Filtra por Etiquetas
        if($contact.tagsProperty.length > 0){
          // console.log("estas dentro de tags", $contact.tagsProperty.length)
          proInt= proInt.filter(e => $contact.tagsProperty.every(c => e.tagsProperty.includes(c)));
        };
        console.log("Filtraste por localizacion", proInt) 

    // Mensaje de no contactos
        if (proInt.length === 0) {
            message = "No hay resultados con este criterio de busqueda"
            // console.logproInt.length, message)
        } else {
          message = ("Se encontraron" + proInt.length + "propiedades con este criterio de busqueda" )
        };

        return proInterest.set(proInt)

    }

   