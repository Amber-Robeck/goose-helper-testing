// import {connect} from "mongoose";
//can't get the above to work
import mongoose from "mongoose";

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/gooseHelper';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('gooseHelper connected'))
    .catch(err => console.log(err));


export default mongoose.connection;