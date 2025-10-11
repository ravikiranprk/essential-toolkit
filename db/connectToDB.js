import mongoose from "mongoose";

let cached = global.mongoose;

if(!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDB() {
    if(cached.conn) {
        return cached.conn;
    }

    if(!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
        return cached.conn;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
}

export default connectToDB;