// Require mongoose
const mongoose = require ('mongoose'); // like import 
const { toUnicode } = require('punycode');

// Connecting with MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/StudentDB1",
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
})
data1.save()
.then((doc)=>console.log("Document Created"))
.catch((err)=>console.log(err));
