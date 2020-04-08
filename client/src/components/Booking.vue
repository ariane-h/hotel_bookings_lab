<template>
  <div>
      <h2>{{ booking.name }}</h2>
      <p>{{ booking.email }}</p>
      <p v-if="booking.checkedIn">Checked In</p>
      <p v-else>Checked Out</p>

      <button v-on:click="handleCheckInOut(booking._id)" v-if="booking.checkedIn">Check Out</button>
      <button v-on:click="handleCheckInOut(booking._id)" v-else>Check In</button>

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
            },
    handleCheckInOut(id){
        BookingService.updateBooking(id, booking_jsonBody)

    }
    }
}
</script>

<style>

</style>