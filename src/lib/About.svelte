<script>
//   import AddToSchedule from "src/components/AddToSchedule.svelte";
// import { systStatus } from "src/stores/stores";
import { contact, systStatus } from '../stores/stores'
console.log("hhhh", $contact)
let cont;
$: cont = $contact.name

</script>

<h1>About</h1>

<h3>ffff{$systStatus}</h3>

<h2>fffff{$contact.lastname}</h2>