import { db } from "../db";
import {  conInterest } from '../../stores/stores'
import { setRange, mosRange } from '../funcions/rangValue'

let lowRange;
let upRange;
let message;
let rng;

// Filtrar property -- properties
    export function filtPropContInte($property, conInt){

  // Tipo de propiedad
        conInt = conInt.filter((item) => item.selecTP === $property.selectTP);
        console.log("tipo Prop", conInt)

  // Numero de recámaras   
        if ($property.numBeds > 0) {
        conInt = conInt.filter((item) => item.numBeds >= $property.beds);
        };
        console.log("recamaras", conInt)

  // Numero de baños
        if ($property.numBaths > 0) {
          conInt = conInt.filter((item) => item.numBaths >= $property.bathroom);
        };
        console.log("baños ", $property.numBaths, conInt)

  // Estacionamientos
        if ($property.numParks > 0) {
          conInt = conInt.filter((item) => item.numPark >= $property.parks);
        };
        console.log("estacionamientos", conInt)
        console.log($property.budget)
  // Presupuesto
        // if($property.price){
          lowRange=($property.price * .7)
          upRange=($property.price * 1.1)
          conInt = conInt.filter(function (prop) {
            if(prop.budget){
              return (prop.budget >= lowRange && prop.budget <= upRange);
            }
            console.log("no tiene budget")
            mosRange($property.price)
            console.log(rng)
            // rngo = "crt"
            return conInt = conInt.filter((item) => item.rangeProp === rng)
          }); 
          
          let conInt1 = 
        // } else {          
        //   filRange($property.price)
        //     console.log("estas en rng", lowRange, upRange)
        //     conInt = conInt.filter(function (proInt) {
        //       console.log(lowRange, upRange)
        //       return (proInt.price >= lowRange &&  proInt.price <= upRange);
        //     });
        // };
          console.log("precio", conInt)
          
  // Filtra por Ubicación  
          if($property.locaProperty.length > 0){
            conInt = conInt.filter(e => ($property.locaProperty).every(c => (e.locaProperty).includes(c)));
          };
          console.log("ubicacion", conInt)
          
  // Filtra por Etiquetas

          let conInt2 = conInt.filter((item) =>item.tagsProperty.length === 0)
            console.log("estas dentro de tags", $property.tagsProperty.length)
            conInt= conInt.filter(e => $property.tagsProperty.some(c => e.tagsProperty.includes(c)));
            conInt = conInt.concat(conInt2)
            console.log("Etiquetas", conInt)
          

          if (conInt.length === 0) {
              message = "No hay resultados con este criterio de busqueda"
              console.log(conInt.length, message)
          } else {
            message = ("Se encontraron" + conInt.length + "propiedades con este criterio de busqueda" )
          };
          console.log(conInt)
            
          return conInterest.set(conInt)

    };


