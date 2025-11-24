// Q5: Movie Ticket Booking
function validateBooking(name, email, seats) {
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatsNum = Number(seats);

    if (!nameRegex.test(name)) throw new Error("Invalid name!");
    if (!emailRegex.test(email)) throw new Error("Invalid email!");
    if (isNaN(seatsNum) || seatsNum < 1 || seatsNum > 10)
        throw new Error("Seats must be between 1 and 10");

    const booking = { name, email, seats: seatsNum };
    console.log("Ticket booked:", booking);
}
