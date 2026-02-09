import mongooose from 'mongoose'

// connect to the MongoDb Database
const connectDb = async ()=>{
    mongooose.connection.on('connected',()=>console.log('Database Connetecd')
    )

    await mongooose.connect(`${process.env.MONGODB_URI}/lms`)
}

export default connectDb