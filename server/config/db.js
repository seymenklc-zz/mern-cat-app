import mongoose from 'mongoose';

export default async function connectDB() {
    try {
        const connectParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.DB, connectParams);
        console.log('Successfully Connnected To MongoDB');
    } catch (error) {
        console.log('Failed to conect MongoDB');
    }
};