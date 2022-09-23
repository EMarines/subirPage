import { db } from "../db";
import { contact } from '../../stores/stores'

let porpInterest

// Filtrar contact -- properties
export function filtContPropInte(){

       porpInterest = db.properties
       
       porpInterest = porpInterest.filter((item) => item.selectTP >= $contact.selecTP);

       if ($contact.numBeds > 0) {
         porpInterest = porpInterest.filter((item) => item.beds >= $contact.numBeds);
       }
       if ($contact.numBaths > 0) {
         porpInterest = porpInterest.filter((item) => item.bathroom >= $contact.numBaths);
       }
       if ($contact.numParks > 0) {
         porpInterest = porpInterest.filter((item) => item.park >= $contact.numParks);
       }
      
   // Filtra por Rango
      if($contact.budget){
         lowRange=($contact.budget * .7)
         upRange=($contact.budget * 1.1)
         porpInterest = porpInterest.filter(function (prop) {
           return (prop.price >= lowRange && prop.price <= upRange);
         });  
                          
      } else {
         
           ranPrice(contact.rangeProp);
           porpInterest = porpInterest.filter(function (prop, index) {
             return (prop.price >= lowRange &&  prop.price <= upRange);
             });
           };
           
   // Filtra por Ubicación  
           if(contact.locaProperty.length > 0){
             {porpInterest = porpInterest.filter(e => (contact.locaProperty).some(c => (e.locaProperty).includes(c)))};
           };
           
   // Filtra por Etiquetas
           if(contact.tagsProperty.length > 0){
             // console.log("estas dentro de tags", contact.tagsProperty.length)
             porpInterest= porpInterest.filter(e => contact.tagsProperty.every(c => e.tagsProperty.includes(c)));
           };

             if (porpInterest.length === 0) {
                 message = "No hay resultados con este criterio de busqueda"
                 // console.log(porpInterest.length, message)
             } else {
               message = ("Se encontraron" + porpInterest.length + "propiedades con este criterio de busqueda" )
             };
              
             
           systStatus = "porpInterest"
           // console.log(systStatus)
     }
