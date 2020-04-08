<template>
  <form id="bookings-form" v-on:submit="handleSubmit">
		<h2>Add a Booking</h2>
		<div class="formWrap">
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" />
		</div>
		<div class="formWrap">
			<label for="email">Email:</label>
			<input type="text" id="email" v-model="email" />
		</div>
		<div class="formWrap">
            <p>Check In / Check Out</p>
			<select id="checked-in" v-model="checkedIn" >
                <option disabled value="">Select</option>
                <option value="true">Check In</option>
                <option value="false">Check Out</option>
            </select>
		</div>

		<input type="submit" value="Save" id="save"/>
	</form>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService';

export default {
    name: "bookings-form",
    data(){
        return{
            name: "",
            email: "",
            checkedIn: null
        }
    },
    methods: {
		handleSubmit(event){
			event.preventDefault();

			const payload = {
				name: this.name,
				email: this.email,
				checkedIn: this.checkedIn
			};

			BookingService.postBooking(payload)
			.then(booking => {
					eventBus.$emit('booking-added', booking);
			});
		}
	}
}
</script>

<style>

</style>