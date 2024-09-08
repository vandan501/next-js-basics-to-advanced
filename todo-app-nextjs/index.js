import mongoose from "mongoose";


const connectToDb = async ()=>{
    const connectionURL="mongodb+srv://vandanraval2002:Kz9vrFwOAoeu0V05@cluster0.aig15.mongodb.net/"

    mongoose.connect(connectionURL)
    .then(()=>console.log("Blog Database Connected Successfully"))
    .catch((e)=>console.log(e))
}

export default connectToDb