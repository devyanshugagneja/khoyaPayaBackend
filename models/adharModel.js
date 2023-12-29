const mongoose=require('mongoose');
const db_link='mongodb+srv://khoyapaya975:saharanpur@cluster0.cgrq5yc.mongodb.net/';
mongoose.connect(db_link)
.then(function(db){
    
    console.log("db  connected");
})
.catch(function(err){
    console.log(err);
})

const adharSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true,
    },
    adharNumber:{
        type:Number,
        require:true
    },
    adress:{
        type:String,
        require:true
    },
    image:{
        type:String
    },
    fingerPrint:{
        type:String
    }

})

const adharModel=mongoose.model("adharModel",adharSchema);



module.exports=adharModel;