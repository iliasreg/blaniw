import mongoose from 'mongoose'

// Cashing the connection to only connect once
const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null};

export const connectToDb = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error("MONGODB_URI is missing");

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'Blaniw',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}