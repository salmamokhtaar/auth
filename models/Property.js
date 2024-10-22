import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    rooms: {type: Number, required: true},
    size: {type: Number, required: true},
    price: {type: Number, required: true},
    owner:{type:mongoose.Schema.Types.ObjectId, ref:'User'}
}

)

const Property = mongoose.models.Property || mongoose.model('Property', PropertySchema);

module.exports = Property;