const mongoose=require('mongoose');
const db_link='mongodb+srv://khoyapaya975:saharanpur@cluster0.cgrq5yc.mongodb.net/';
mongoose.connect(db_link)
.then(function(db){
    
    console.log("db  connected");
})
.catch(function(err){
    console.log(err);
})

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true,
        unique: true
    },
    password: {
        type: String,
        require:true
    },
    ConfirmPassword: {
        type: String,
        require:true
    }
});

const userModel=mongoose.model('userModel',userSchema);

module.exports=userModel;