<template>
 <div>
   <h2>Carros</h2>
   <ul>
     <li v-for="car in cars" :key="car.id">
       {{ car.brand }} - {{ car.model }} - {{ car.color }} - {{ car.licensePlate }} - {{ car.manufactureYear }} - {{ car.mileage }}
     </li>
   </ul>
 </div>
</template>

<script>
export default {
 data() {
   return {
     cars: []
   }
 },
 created() {
   // TODO: Get cars from Firestore
 }
}
</script>
