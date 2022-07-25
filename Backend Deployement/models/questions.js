

import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    "quiz" : [
        {
    category : {type : String, required : true},
    ques : {type : String, required : true},
    a : {type : String, required : true},
    b : {type : String, required : true},
    c : {type : String, required : true},
    d : {type : String, required : true},
    answer : {type : String, required : true},
    details : {type : String, required : true},
    points : {type : Number, required : true},

}]
}
   
)

export default mongoose.model("Question", questionSchema);

