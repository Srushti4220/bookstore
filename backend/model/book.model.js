import mongoose from "mongoose";
const bookSchema=mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Book = mongoose.model("Book", bookSchema);
export default Book;

//https://cloud.mongodb.com/v2/66c740ccf99deb0e8c3d0360#/metrics/replicaSet/66c74295d257104664df7170/explorer