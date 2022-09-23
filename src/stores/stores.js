import { writable, readable } from 'svelte/store';

export const systStatus = writable("start")

export const contactI = writable();

export const contact = writable({
   name: "",
   lastname: "",
   telephon: "",
   email: "",
   selecMC: "",      // Modo de contacto
   propCont: "",     // Propiedad de contacto
   comContact: "",   // Comentarios
   rangeProp: "",    // Rango buscado
   contMode: "",     // Modo de contacto
   budget: "",       // Presupuesto tope
   numBeds:"",
   numBaths:"",
   halfBathroom: "",
   numParks:"",
   modePay: "",      // Modo de pago
   selecTP: "",      // Tipo de propiedad
   contactType: "",  // Modo de contacto
   contactStage: "", // Etapa del cliente
   locaProperty: [], // Localicacion buscada
   tagsProperty: [], // Etiquetas
   sendedProperties:[],  // Propiedades enviadas
});