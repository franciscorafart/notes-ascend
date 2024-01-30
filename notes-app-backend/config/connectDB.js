const mongoose = require('mongoose')

const connectDB = async() => {
  try {
    const connect = await mongoose.connect(process.env.URI)
    console.log(`Db is connected:
    host ${connect.connection.host}
    name ${connect.connection.name}
    `)
  
  }
  catch (error){
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB