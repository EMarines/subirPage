a<script>
    import { db } from "../assets/db";
    import { formatDate } from '../assets/funcions/sevralFunctions'

// Decalracion de binnacle
    let binnacle = {
        date: "",
        commBinnacle: ""
    };

    const bitcora = db.binnacle

</script>
<main>

    <div class="container">
        <div class="schedule">
            <div class="binnacleHome">
                <h1 class="title">Bitácora</h1>
                {#each bitcora as item}
                <div class="int-binnacle">
                    <div class="date-binnacle">
                        {formatDate(item.date)}                  
                        {item.comment}
                    </div>
                </div>
                {/each}
                
            </div>
        </div>
    </div>
</main>

<style>
    .title{
        color:red;
    }
</style>