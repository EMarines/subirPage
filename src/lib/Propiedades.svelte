<script>
	// import { properties } from './../assets/parameters.js';
	// import { searchProperty } from './../assets/funcions/search.js';
   // import checkLoggedIn from "./router";
   // import {navigate} from "svelte-routing";
   import { db } from '../assets/db'
	import Search from '../components/Search.svelte';
   import CardProperty from '../components/CardProperty.svelte';
   import { property, systStatus, proInterest } from '../stores/stores'
   import { searchProperty } from '../assets/funcions/search'

   let searchTerm;

   function searProp() {
      $systStatus = "showProperties"
      let properties = db.properties
      // window.location.href = '/about';
      proInterest.set(searchProperty(properties, searchTerm))
   }

</script>

<h1>Estas en Propiedades</h1>

<Search bind:searchTerm on:input={searProp} />

<CardProperty />