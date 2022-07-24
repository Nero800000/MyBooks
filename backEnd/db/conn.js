const mongoose = require('mongoose')

const user = process.env.DB_USER
const password  =process.env.DB_PASSWORD


const conn = async () => {

    try {
  const dbConnect = await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.kpnjg.mongodb.net/?retryWrites=true&w=majority`)
      console.log('banco Conectado')
 
      return dbConnect
    } catch (error) {
       console.log(error)
        
    }
}

conn()

module.exports = conn