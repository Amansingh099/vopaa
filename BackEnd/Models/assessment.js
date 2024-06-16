const mongoose= require("mongoose");

const assessmentSchema = new mongoose.Schema({
   sid: { type: Schema.Types.ObjectId, ref:"Student" },
    level:{type:String,required:true},
});

const assessment = mongoose.model('assessment', assessmentSchema);
module.exports = assessment;