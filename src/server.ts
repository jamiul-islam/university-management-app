import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string)
    console.log(`🛢️ database connected successful`)

    app.listen(config.port, () => {
      console.log(`Application app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(`connection failed`, error)
  }
}
main()
