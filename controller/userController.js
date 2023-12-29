const express = require('express');
const userModel=require('../models/userModel');
const JWT_key='qwertyui987654';
const jwt=require('jsonwebtoken');

module.exports.signup=async function(req,res){
    try{
    let Dataobj=req.body;
    let user=await userModel.create(Dataobj);
    
    return res.json({
        message:"user signed up",
        data:user
    })
    }catch(err){
        return res.status(500).json({
            message:"error signinig up",
            error:err.message
        })
    }
}

module.exports.login=async function(req,res){
    try {
        let { email, password } = req.body;
        let user = await userModel.findOne({ email: email });

        if (user) {
            if (user.password == password) {
                let uid = user['_id'];
                let token = jwt.sign({ payload: uid }, JWT_key);
                res.cookie('isLogedIn', token);
                res.json({
                    message: 'Login successful',
                    data: user
                });
            } else {
                return res.json({
                    message: 'Wrong credentials'
                });
            }
        } else {
            return res.json({
                message: 'User not found'
            });
        }
    } catch (err) {
        return res.json({
            message: err.message
        });
    }
};


module.exports.protectRoute=async function(req,res,next){
    let token;
    if(req.cookies.isLogedIn){
        token=req.cookies.login
        let payload=jwt.verify(req.cookies.isLogedIn,JWT_key);

        if(payload){
            const user=await userModel.findById(payload.payload)
           
            req.id=user.id;
            next();
        }else{
            res.json({
                message:'user galat'
            })
        }
    }else{
        return res.json({
            message:"sign in first"
        })
    }
    }
