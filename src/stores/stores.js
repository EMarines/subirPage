import { writable, readable } from 'svelte/store';

export const systStatus = writable("")

export const contactI = writable();

export const proInterest = writable([]);

export const conInterest = writable([])

export const searchTermG = writable("start");

export const dbTodos = writable([])

// export const id = writable();

export const contact = writable({
   typeContact: "",  // Tipo de contacto
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
   createdAt: "",
   locaProperty: [], // Localicacion buscada
   tagsProperty: [], // Etiquetas
   sendedProperties:[],  // Propiedades enviadas
});

// Decraracion de Prperty
   export const property = writable ({
      typeProperty: "",
      claveEB: "",
      claveMH: "",
      nameProperty: "",
      price: "",
      beds: "",
      bathroom: "",
      halfBathroom: "",
      park: "",
      areaBuilding: "",
      areaTotal: "",
      description: "",
      urlImage: "",
      urlProp: "",
      urlSinergy: "",
      colonia: "",
      selectTP: "",
      selecTO: "",
      tagsProperty: [],
      locaProperty: [],
      binnacle: [],
   });

// Declaracion de todos
   export const todo = writable({
      task: "",
      isComplete: "",
      createdAt: "",
      endTask: "",
      timeTask: "", 
      notes: "",
      user: ""        
   });

// Users
   export const user = writable({
      user: "",
      email: "",
      typeUser: "",
      password: ""
   });

// Binnacle
   export const binnacle = {
      date: "",
      commBinnacle: ""
   };