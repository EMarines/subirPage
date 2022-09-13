<script>
   import { Router, Route, Link } from "svelte-navigator";
   import Home from './Home.svelte'
   import Contactos from './Contactos.svelte'
   import Propiedades from './Propiedades.svelte'
   import Captacion from './Captacion.svelte'
   import Agenda from './Agenda.svelte'   
   import About from './About.svelte'
   import logoMH from '../assets/logoMH.png'
   
   </script>
    <div class= "nav">
      
      <input type="checkbox" id="check">      
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      
  <!-- Menú del nav -->
      <Router>
        <div class="navMenu">
        <ul>
          <li class= "active">
            <Link to="/">Home</Link>
          </li>
          <li class="hide">
            <Link to="contactos">Contactos</Link>
          </li>
          <li>
            <Link to="propiedades">Propiedades</Link>
          </li>
          <li>
            <Link to="captacion">Captación</Link>            
          </li>
          <li>
            <Link to="agenda">Agenda</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>

        </ul>
        </div>
        
        <main>
          <Route path="/">
            <Home />
          </Route>
          
          <Route path="contactos">
            <Contactos />
          </Route>
          
          <Route path="propiedades">
            <Propiedades />
          </Route>
          
          <Route path="captacion">
            <Captacion />
          </Route>
          
          <Route path="agenda">
            <Agenda />
          </Route>
          
          <Route path="about">
            <About />
          </Route>
          
        </main>

        
      <a href="https://matchhome.net" target="_blank" class="enlace"> 
        <img src={logoMH} class="logoMH" alt="MatchHome" />
      </a>
        
      </Router>
      
      <section>
        
      </section>
    </div>

   
<style> 

  .nav{
    background: #2fcdcd;
    height: 80px;
    width: 100%;
  }
  .enlace{
    position: absolute;
    padding: 20px 50px;
  }

  .logoMH {
    height: 40px;
  }

  .logoMH:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  } 

  .nav ul{
    float: right;
    margin-right: 20px;
  }

  .nav ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
  }

  .nav ul li a{
    color: #fff;
    font-size: 18px;
    padding: 7px 13pz;
    border-radius: 3px;
    text-transform: uppercase;
  }

  li:active, li:hover{
    background: #000090;
    transition: .5s;
  }
  
  .checkbtn{
    font-size: 30px;
    color: #fff;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor:pointer;
    display: none;
  }

  #check{
    display: none;
  }

  section{
    background: url(logMh);
    background-size: cover;
    background-position: center center;
    height: calc(100vh -80);
  }

  @media (max-width: 952px){
    .enlace{
      padding-left: 20px;
    }
    .nav ul li a{
      font-size: 16px;
    }
  }

  @media (max-width: 858px){
   .checkbtn{
     display: block;
   }

   ul{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
   }

   .nav ul li{
    display: block;
    margin: 5px 0;
    line-height: 30px;
   }

   .nav ul li a{
    font-size: 20px;
   }

  .hide:hover, li{
    background: none;
    color: red;
   } 

   /* #check:checked, ~ ul{
    left: 0;
   }  */
/*    
  .nav{
    display: block;
  } */


  }

</style>
