<script>
	// import ContactCard from './../components/ContactCard.svelte';
      import Search from '../components/Search.svelte'
      import { db } from '../assets/db'
      import ContactCard from '../components/ContactCard.svelte'
      import user from '../assets/images/add-user.png'

   // Declaraciónes
      let searchTerm;
      let filteredContacts = [];
      let listToRender = db.contacts

   // Array contacto
         let contact = {
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
          };


   // Funciones 
      function contactSelect(){
         console.log("estas en Contact Select")
      }

      function addContact(){
         window.location.href="/altaContacto"
      }
   // Input filter ""searchContact""
      const searchContact = () => {
         if (searchTerm.length > 0){
            listToRender = filteredContacts
         } else {
            listToRender = db.contacts
         }
            return (filteredContacts = db.contacts.filter((contact) => {
            let contInfo = (contact.name + " " + contact.lastname + " " + contact.telephon).toLowerCase();
            return contInfo.includes(searchTerm.toLowerCase());
         }));
      };
</script>

   <main>
      <div>
         <h1>Contactos</h1>
         <button on:click={addContact}>alta de contacto</button>
      </div>
      <img src={user} alt="contactos">
      <h2>Contactos a Mostrar</h2>

      <Search bind:searchTerm on:input={searchContact} />                

      <div>    
         {#each listToRender as item}
            <ContactCard name={item.name}
               lastname={item.lastname}
               createdAt={item.createdAt}
               contactStage={item.contactStage}
               telephon={item.telephon}
               email={item.email}
               budget={item.budget}
               rangeProp={item.rangeProp} />
         {/each}         
      </div>
   </main>

<style>
   img{
      max-width: 148px;
   }
</style>