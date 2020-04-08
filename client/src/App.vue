<template>
  <div id="app">
    <h1>Bookings App</h1>
    <bookings-form></bookings-form>
    <bookings-grid></bookings-grid>
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';

export default {
  name: "app",
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  mounted(){
    fetch('http://localhost:3001/api/bookings')
      .then(res => res.json())
      .then( data => console.log(data) )
  }
}
</script>

<style>
body{
  font-family: 'Work Sans', sans-serif;
}
</style>