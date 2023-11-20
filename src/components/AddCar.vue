<template>
 <div>
   <h2>Adicionar Carro</h2>
   <form @submit.prevent="addCar">
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
     <button type="submit">Adicionar</button>
   </form>
 </div>
</template>

<script>

export default {
 data() {
   return {
     car: {
       brand: '',
       model: '',
       color: '',
       licensePlate: '',
       manufactureYear: '',
       mileage: ''
     }
   }
 },
 methods: {
   addCar() {
     // TODO: Add car to Firestore
   }
 }
}
</script>
