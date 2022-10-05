<script>
	import Login from './Login.svelte';
   // import firebase from "@firebase/app";
   // import "@firebase/auth";
   
   let email;
   let password;
   let user;
   let auth = false;
   
   function handleSubmit() {
       // event.preventDefault();
      //  firebase.auth().signInWithEmailAndPassword(email, password)
      //  .then(function(){
      //      console.log("Estas Logeado")
      //      window.location.href='/'
      //  })
      //  .catch(function(error) {
      //      var errorCode = error.code;
      //      var errorMessage = error.message;
      //     console.log(errorMessage, errorCode);
      //     window.location.href='#/registro'
      //    })
   };

   function logOut() {

   }
   
   </script>

      {#if !auth}   
         <div class="container login">
            <form class='register form' on:submit|preventDefault={handleSubmit}>  
                  <h3>Login</h3>  
                  <label class="form_label">Email
                     <input required type="email" name='email' bind:value={email}>  
                  </label>
                  <label class="form_label">Usuario
                     <input required type="texy" name='user' bind:value={user}>  
               </label>
                  <label class="form_label">Password
                     <input required type="password" name='password' bind:value={password} >
                  </label>
                  <button>
                     Registrarme
                  </button>
            </form>
         </div>
      {/if}

       {#if auth}
         <div class="container logout">
            <button on:click={logOut}>Logout</button>
         </div>
      {/if}
   
       <style>

         .login{
            padding-top: 15px;
            padding-bottom: 15px;
         }        

         .logout{
            height: 50px;
            padding-top: 15px;
         }

       </style>