import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

let User;
if(mongoose.models.User) {
    User = mongoose.models.User;
} else {
    User = mongoose.model("User", userSchema);
}


export default User;