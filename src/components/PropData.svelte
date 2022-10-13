<script>
	import { property } from './../stores/stores.js';
    // Importaciones
      import { contact } from '../stores/stores'
      import Ubication from '../components/Ubication.svelte'
      import Tags from '../components/Tags.svelte'
      import { typeProperties, modePays, oneTofive, oneToFour, ranges, contactMode } from '../assets/parameters'

</script>

    
     <!-- Tipo de propiedad buscada -->
          <select class="selTP" id="selTP" name="selTP" bind:value={$property.selecTP}>
            <option disabled selected value="">Tipo de Propiedad</option>
            {#each typeProperties as selecTP}
                  <option type="checkbox" value={selecTP}>{selecTP}</option>
            {/each}
          </select>

    <!-- Características buscadas -->
          <select bind:value={$property.beds}>
            <option disabled selected value="" ># Recámaras</option>
            {#each oneTofive as beds}
              <option type="checkbox" value={beds} >{beds} Recámaras</option>
            {/each}
          </select>

          <select bind:value={$property.bathroom}>
            <option disabled selected value=""># Baños</option>
            {#each oneToFour as bathroom}
              <option type="checkbox" value={bathroom}>{bathroom} baños</option>
            {/each}
          </select>

          <select bind:value={$property.halfBathroom}>
            <option disabled selected value=""># Medios Baños</option>
            {#each oneToFour as numberHalfBath}
              <option type="checkbox" value={numberHalfBath}>{numberHalfBath} Medios baños</option>
            {/each}
          </select>

          <select bind:value={$property.park}>
            <option disabled selected value=""># Estacionamientos</option>
            {#each oneToFour as park}
              <option type="checkbox" value={park}>{park} Estacionamientos</option>
            {/each}
          </select>

    <!-- Comentarios del contacto -->
          <div class="col">
            <textarea  placeholder="Comentarios" cols="65" rows="5" bind:value={$property.description} class="form-control"/>
            <!-- <textarea on:keypress={seleTypeAction} class="texArea" cols="65" rows="5" bind:value = {commInpuyBinnacle} placeholder ="Ingresa un comentario"/>  -->

          </div>

          <!-- <select bind:value={$property.rangeProp}>
            <option disabled selected value="">Rango Buscado</option>
            {#each ranges as range}
              <option type="checkbox" value={range}>{range}</option>
            {/each}
          </select> -->

          <!-- <select bind:value={$property.contMode}>
            <option disabled selected value="">Modo de Contacto</option>
            {#each contactMode as mode}
              <option type="checkbox" value={mode}>{mode}</option>
            {/each}
          </select> -->

    <!-- Tags -->
        <Ubication bind:ubication={$property.locaProperty}/>
        <Tags bind:tag = {$property.tagsProperty} />

