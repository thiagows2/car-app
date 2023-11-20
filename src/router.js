import AddCar from './components/AddCar.vue';
import ListCars from './components/ListCars.vue';
import EditCar from './components/EditCar.vue';

const routes = [
  {
    path: '/',
    name: 'list',
    component: ListCars
  },
  {
    path: '/add',
    name: 'add',
    component: AddCar
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditCar
  }
]

export default routes;
