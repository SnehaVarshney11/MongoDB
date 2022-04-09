// Require mongoose
const mongoose = require ('mongoose'); // like import 
const { toUnicode } = require('punycode');

// Connecting with MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/StudentDB1",
// these are warning 
{   useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
}
)
.then(()=>console.log("Connection Successful..."))
.catch(()=>console.log("Erroe, Not connecting..."))

// Create Schema 
const StuSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        course: String,
        duration: Number,
        registration: Boolean,
        date: {type: Date, default: Date.now},
    }
);

// Create Model -> By this we can create Collection 
const Student = new mongoose.model("Student", StuSchema)

// Create Document
const data1 = new Student(
{
    name: "Sneha",
    course: "B.tech",
    duration: 4,
    registration: true
});
const data2 = new Student(
{
    name: "Surbhi",
    course: "B.tech",
    duration: 4,
    registration: true
});
const data3 = new Student(
{
    name: "Shikha",
    course: "B.tech",
    duration: 4,
    registration: true
});
const data4 = new Student(
{
    name: "Richa",
    course: "B.tech",
    duration: 4,
    registration: true
});

// CRUD Operations

data1.save()
.then((doc)=>console.log("Document Created"))
.catch((err)=>console.log(err));

Student.insertMany([data2, data3, data4])
.then(doc=>console.log("All data inserted..."))
.catch(err=>console.log("Error in insertion"));
Student.find()
.then(doc=>console.log("All data inserted..."))
.then(doc=>console.log(doc))
.catch(err=>console.log("Error in insertion"));


Student.findByIDAndUpdate(ObjectID, {duration : 4})
.then(doc=>console.log(doc))
.catch(err=>console.log("Error in updation"));


Student.findByIDAndDelete(ObjectID)
.then(doc=>console.log(doc))
.catch(err=>console.log("Error in deletion"));