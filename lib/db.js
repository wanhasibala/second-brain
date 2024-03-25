import mongoose from "mongoose";

global.mongoose ={
 conn : null,
 promise : null 
}

 export async function dbConnect (){
    if (global.mongoose && global.mongoose.com){
        console.log('connected from the previous')
        return global.mongoose.com
    } else{
        const consString = process.env.MONGO_URL;
        const promise = mongoose.connect(consString,{
            autoIndex:true,
        })
        global.mongoose ={
            conn : await promise,
            promise,
        };
        console.log('Newly Connected')
        return await promise;
    }
 }