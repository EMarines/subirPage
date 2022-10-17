<script>
   import { db } from '../firebase';
   import { vbadb } from '../assets/dbvbaPrueba'
   // import ContData from '../components/ContData.svelte'
   import { formatDate } from '../assets/funcions/sevralFunctions'
   import { contact, systStatus } from '../stores/stores'
   import { collection, addDoc} from 'firebase/firestore';



   var patAmp = [];

// searCont();
   // Search contacto
    function searCont() {
      // console.log("estas en la funcion")
            // patAmp= vbadb.filter((contacto) => 
            // contacto.tagsProperty != "VERDADERO")
            // patAmp.forEach((item) => item.tagsProperty = "");

            // patAmp= vbadb.filter((contacto) => 
            // contacto.unaPlanta === "VERDADERO")
            // @ts-ignore
            // patAmp.forEach((item) => (item.tagsProperty).push())

            // patAmp= vbadb.filter((contacto) => 
            // contacto.fracPrivado === "VERDADERO")
            // patAmp.forEach((item) => item.tagsProperty.push("Fracc. Privado"))

            // console.log(patAmp) 
                     
    };

      function saveContacts(){
         vbadb.forEach((item) => save(item)
      )}

         async function save($contact){  
            console.log($contact)         
            const contToAdd = collection(db, "contacts")
               await addDoc(contToAdd, $contact);
         }

   //  const lista = vbadb.filter((item) => item.tagsProperty.length > 0)
   //  console.log(lista)
</script>

   <h1>About</h1>

  <button on:click={saveContacts}>Clic to save</button>

   {#each patAmp as item}
      {#if item.patioAmplio == ""}
         <p>{item.name} {item.lastname} que contactó el {formatDate(item.createdAt)}/p>
      {/if}
   {/each}