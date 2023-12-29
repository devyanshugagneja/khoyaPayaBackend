const adharModel=require('../models/adharModel');

module.exports.createAdhar=async function(req,res){
    try{
        let userData=req.body;
        let user=await adharModel.create(userData);
        
        return res.json({
            message:"adhar added succesfully",
            data:user
        })
    } catch(err){
        return res.status(500).json({
            message:"error while making adhar",
            error:err.message
        })
    }
}

module.exports.getAllAdhars=async function(req,res){
    try{
    let users=await adharModel.find();
    if(users){
        return res.json({
            message:"adhars retrieved",
            data:users
        })
    }
}catch(err){
    return res.status(500).json({
        message:"error while retriving adhars",
        error:err.message
    })
}
}

module.exports.getAdhar=async function(req,res){
    try{
    let id = req.params.id;
    let user=await userModel.findById(id);

    if(user){
        return res.json({
            message:"adhar retrived",
            data:user
        })
    }else{
            return res.json({
                message:"error retriving adhar",
            })
        
    }
}catch(err){
    return res.status(500).json({
        message:"error while making adhar",
        error:err.message
    })
}
}

module.exports.updateAdhar=async function(req,res){
    try{
        let id=req.params.id;
        let user=await adharModel.findById(id);
        let dataToBeUpdated=req.body;
        if(user){
            const keys=[];
            for(let key in dataToBeUpdated){
                keys.push(key);
            }
            for(let i=0;i<keys.length;i++){
                user[keys[i]]=dataToBeUpdated[keys[i]];
            }
            const updatedData=await user.save();
            return res.json({
                message:"data updated succesfulyy",
                data:user
            })
        }else{
            return res.json({
                message:"user not found"
            })
        }
    }catch(err){
        return res.status(500).json({
            message:"error while making adhar",
            error:err.message
        })
    }
}

module.exports.deleteAdhar=async function(req,res){
       try{
        let id = req.params.id;
        let user=await userModel.findByIdAndDelete(id);
        if(!user){
            return res.json({
                message:"user not found"
            })
        }
        res.json({
            message:"user deleted ! success"
    
        })
       }catch(err){
        return res.status(500).json({
            message:"error while making adhar",
            error:err.message
        })
       }
}