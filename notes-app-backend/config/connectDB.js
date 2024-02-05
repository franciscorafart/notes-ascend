const mongoose = require('mongoose')

const env = process.env.NODE_ENV;
const dbUri = env === "production" || env === "development" ? process.env.URI : process.env.TEST_URI;

const connectDB = async() => {
  try {
    const connect = await mongoose.connect(dbUri)
    console.log(`Db is connected:
    host ${connect.connection.host}
    name ${connect.connection.name}
    `)
  
  } catch (error){
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB