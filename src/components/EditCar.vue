<template>
 <div>
   <h2>Editar Carro</h2>
   <form @submit.prevent="updateCar">
     <label>Marca</label>
     <input v-model="car.brand" required>
     <label>Modelo</label>
     <input v-model="car.model" required>
     <label>Cor</label>
     <input v-model="car.color" required>
     <label>Placa</label>
     <input v-model="car.licensePlate" required>
     <label>Ano de Fabricação</label>
     <input v-model="car.manufactureYear" required>
     <label>Km Rodada</label>
     <input v-model="car.mileage" required>
     <button type="submit">Atualizar</button>
   </form>
 </div>
</template>

<script>
export default {
 data() {
   return {
     car: {
       id: this.$route.params.id,
       brand: '',
       model: '',
       color: '',
       licensePlate: '',
       manufactureYear: '',
       mileage: ''
     }
   }
 },
 created() {
   // TODO: Get car from Firestore
 },
 methods: {
   updateCar() {
     // TODO: Update car in Firestore
   }
 }
}
</script>
