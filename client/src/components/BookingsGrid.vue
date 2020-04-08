<template>
  <div id="bookingsGrid">
      <booking v-for="(booking, index) in bookings" :key="index" :booking="booking"></booking>
  </div>
</template>

<script>
import { eventBus } from '../main';
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
        eventBus.$on('booking-added', booking => this.bookings.push(booking));

        eventBus.$on('booking-deleted', id => {
            const index = this.bookings.findIndex(booking => booking._id === id);
            this.bookings.splice(index, 1);
        })
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