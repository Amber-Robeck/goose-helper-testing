// import {connect} from "mongoose";
//can't get the above to work
import mongoose from "mongoose";


mongoose.connect('mongodb://localhost/gooseHelper', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('gooseHelper connected'))
    .catch(err => console.log(err));


export default mongoose.connection;