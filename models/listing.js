const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bnNldCUyMGJlYWNofGVufDB8fDB8fHww',
        set: (v) => v === ' ' ? 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bnNldCUyMGJlYWNofGVufDB8fDB8fHww' : v
    },
    price: {
        type: Number,
        min: 1
    },
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
})

const Listing = mongoose.model('listing', listingSchema);

module.exports = Listing;