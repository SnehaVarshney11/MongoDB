// Require mongoose
const mongoose = require ('mongoose') // like import 

// Connecting with MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/StudentDB1",
{   useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
}
)
.then(()=>console.log("Connection Successful..."))
.catch(()=>console.log("Erroe, Not connecting..."))