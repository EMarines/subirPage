  import { initializeApp } from 'firebase/app';
  import { collection, addDoc, getDoc, getDocs } from 'firebase/firestore'
  import { getFirestore } from 'firebase/firestore';
  import { getStorage } from 'firebase/storage'  
  // import 'firebase/firestore';
  // import 'firebase/auth';                                                                                                                                                                  
  // import 'firebase/storage';
  // let bitacora = [];
  // import * as firebase from 'firebase/app';

  export let dbContacts = [];
  export let dbBinnacle = [];
  export let dbProperties = [];
  export let dbTodos = [];

  
  
  // <script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js"></script>
  // <script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-storage.js"></script>
  
  // Your web app's Firebase configuration
  const  firebaseConfig = {
    apiKey: "AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",
    authDomain: "match-home-7d1f9.firebaseapp.com",
    projectId: "match-home-7d1f9",
    storageBucket: "match-home-7d1f9.appspot.com",
    messagingSenderId: "747751099607",
    appId: "1:747751099607:web:29d1e5beda87c847dfb492"
    
    // gs://match-home-7d1f9.appspot.com
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // export const db = firebase.firestore();
  
  
  const db = initializeApp(firebaseConfig);
  const database = getFirestore(db);
  const storage = getStorage(db)
  
  const bitacora = collection(database, "binnacles")
  const contactos = collection(database, "contacts")
  const propiedades = collection(database, "properties")
  const tareas = collection(database, "todos")

  
  function getBinnacles() {
    getDocs(bitacora)
    .then((response) => {
       const dbBinnacle = response.docs.map((item) => {
          return {... item.data()};
       })
       // console.log(dbBinnacle)        
    })
 };

 (() => {
    getDocs(bitacora)
    .then((response) => {
       return dbBinnacle = response.docs.map((item) => {
          return {... item.data()};
       })
    })
 })();

 (() => {
  getDocs(contactos)
  .then((response) => {
     return dbContacts = response.docs.map((item) => {
        return {... item.data()};
     })
  })
})();

(() => {
  getDocs(propiedades)
  .then((response) => {
     return dbProperties = response.docs.map((item) => {
        return {... item.data()};
     })
  })
})();
(() => {
  getDocs(tareas)
  .then((response) => {
     return dbTodos = response.docs.map((item) => {
        return {... item.data()};
     })
  })
})();

// export dbBinnacle



  // console.log(database)

  


  


  