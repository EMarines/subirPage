<script>
    // Importaciones
      import { contact } from '../stores/stores'
      import Ubication from '../components/Ubication.svelte'
      import Stages from '../components/Stages.svelte'
      import Tags from '../components/Tags.svelte'
      import { typeProperties, modePays, oneTofive, oneToFour, ranges, contactMode } from '../assets/parameters'

</script>

    
     <!-- Tipo de propiedad buscada -->
          <select class="selTP" id="selTP" name="selTP" bind:value={$contact.selecTP}>
            <option disabled selected value="">Tipo de Propiedad</option>
            {#each typeProperties as selecTP}
                  <option type="checkbox" value={selecTP}>{selecTP}</option>
            {/each}
          </select>

    <!-- Características buscadas -->
          <select bind:value={$contact.numBeds}>
            <option disabled selected value="" ># Recámaras</option>
            {#each oneTofive as numberBed}
              <option type="checkbox" value={numberBed} >{numberBed} Recámaras</option>
            {/each}
          </select>

          <select bind:value={$contact.numBaths}>
            <option disabled selected value=""># Baños</option>
            {#each oneToFour as numberBath}
              <option type="checkbox" value={numberBath}>{numberBath} baños</option>
            {/each}
          </select>

          <select bind:value={$contact.halfBathroom}>
            <option disabled selected value=""># Medios Baños</option>
            {#each oneToFour as numberHalfBath}
              <option type="checkbox" value={numberHalfBath}>{numberHalfBath} Medios baños</option>
            {/each}
          </select>

          <select bind:value={$contact.numParks}>
            <option disabled selected value=""># Estacionamientos</option>
            {#each oneToFour as numberParks}
              <option type="checkbox" value={numberParks}>{numberParks} Estacionamientos</option>
            {/each}
          </select>

    <!-- Comentarios del contacto -->
          <div class="col">
            <textarea  placeholder="Comentarios" cols="65" rows="5" bind:value={$contact.comContact} class="form-control"/>
            <!-- <textarea on:keypress={seleTypeAction} class="texArea" cols="65" rows="5" bind:value = {commInpuyBinnacle} placeholder ="Ingresa un comentario"/>  -->

          </div>

          <!-- <select bind:value={$contact.rangeProp}>
            <option disabled selected value="">Rango Buscado</option>
            {#each ranges as range}
              <option type="checkbox" value={range}>{range}</option>
            {/each}
          </select> -->

          <!-- <select bind:value={$contact.contMode}>
            <option disabled selected value="">Modo de Contacto</option>
            {#each contactMode as mode}
              <option type="checkbox" value={mode}>{mode}</option>
            {/each}
          </select> -->

    <!-- Tags -->
        <Ubication bind:ubication={$contact.locaProperty}/>
        <Stages bind:value = {$contact.contactStage} />
        <Tags bind:tag = {$contact.tagsProperty} />

