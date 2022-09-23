import { db } from '../db'
const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado' ];
const mesAnyo = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ];
let fecha;



// Convertir fecha en timestamp a formato legible SIN hora
      export function formatDate(fecha){
          fecha = new Date(+fecha)
          let dia = fecha.getDate();
          if(dia < 10){
            dia = '0' + dia
          }
          let mes = mesAnyo[fecha.getMonth()];
          let ano = fecha.getFullYear();

          return (`${dia}-${mes}-${ano}`)
       }

// Convertir HORA en timestamp   
      export function formatHour(fecha){
          fecha = new Date(+fecha)
          let minutes = fecha.getMinutes();
            if(minutes.length < 2){
              minutes = '0' + minutes
            }
          let hora = fecha.getHours();
          if (hora > 12){
            hora = hora - 12
          }
          
          if(hora < 10){
              hora = '0' + hora
            }
            
          let dia = fecha.getDate();
          if(dia < 10)
            dia = '0' + dia

          return (`${hora}:${minutes}`)
       }
      

//  Extraer dia de la semana
        export function formatDay(fecha){
          fecha = new Date(+fecha)
            let dia = diaSemana[fecha.getDay()];

          return (`${dia}-`)
          }


// Search Properties

let systStatus = "start";
let searchTerm;
let porpInterest = [];
let properties = db.properties

        export const searchProperty = () => {
          systStatus = "propSearch"
          console.log("estoy en searchProperty")
          return (porpInterest = db.properties.filter((property) => {
          let propTitle = (property.nameProperty + property.colonia).toLowerCase();
          return propTitle.includes(searchTerm.toLowerCase());
          }));
        };


        