<template>
  <div id="bookingsGrid">
      <booking v-for="booking, index in bookings" :key="index" :booking="booking"></booking>
  </div>
</template>

<script>
import BookingService from '../services/BookingService'
import Booking from './Booking'

export default {
    name: 'bookings-grid',
    data() {
        return{
            bookings: []
        }
    },
    components: {
        'booking': Booking
    },
    mounted(){
        this.fetchData();
    },
    methods: {
        fetchData(){
            BookingService.getBookings()
            .then(bookings => this.bookings = bookings);
        }
    }
}
</script>

<style>

</style>