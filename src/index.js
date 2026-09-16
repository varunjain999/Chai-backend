import dotenv from 'dotenv'
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB();


/*
;( async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    
        app.listen(process.env.PORT, ()=> {
            console.log(`App listening on port ${process.env.PORT}`)
        })
    
    }catch(err){
        console.error("ERROR: ",error)
        throw err
    }
})()

*/