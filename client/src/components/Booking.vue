<template>
  <div>
      <h2>{{ booking.name }}</h2>
      <p>{{ booking.email }}</p>
      <p v-if="booking.checkedIn">Checked In</p>
      <p v-else>Not Checked In</p>

      <button v-on:click="handleDelete(booking._id)">Delete</button>
      </div>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService';

export default {
    name: "booking",
    props: ['booking'],
    methods: {
    handleDelete(id){
    			BookingService.deleteBooking(id)
    			.then(response => eventBus.$emit('booking-deleted', id));
    		}
    }
}
</script>

<style>

</style>