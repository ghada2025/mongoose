import mongosse from "mongoose"
export async function connectDB() {
    try {
        await mongosse.connect(process.env.MONGODB_URI)
        console.log(process.env.MONGODB_URI)
        console.log("DB is connected")
    } catch (error) {
        console.log(error)
    }
}