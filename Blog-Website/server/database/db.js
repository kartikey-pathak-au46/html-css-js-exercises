import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://Kartikey963:12345@cluster0.fvcrire.mongodb.net/newBlog`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;