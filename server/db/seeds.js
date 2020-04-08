use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    { name: "Chuck Berry", email:"chuck@berry.com", checkedIn: false },
    { name: "Bob Morgan", email:"bob@morgan.com", checkedIn: true },
]);
