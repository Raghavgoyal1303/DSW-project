import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwords: {
        type: String,       
        required: true
    }
});

const Faculty = mongoose.model("Faculty", facultySchema);

export default Faculty;

