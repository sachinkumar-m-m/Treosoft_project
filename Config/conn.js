
const mongoose = require('mongoose')


// let uri = "mongodb://localhost:27017"

// const URI = process.env.MONGO_URI
// const dbname = process.env.MONGO_DBNAME

async function connectToDB() {
    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/CustomeReport")
        .then(() => console.log("Connection Successful"))
        .catch((error)=> console.log(error))
    } catch (error) {
      console.error('Failed to connect to the database:', error)
      throw error
    }
  }

module.exports = connectToDB