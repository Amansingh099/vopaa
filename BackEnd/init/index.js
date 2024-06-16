const mongoose = require("mongoose");
const Question = require("../Models/question.js");
const initData = require("./questiondata.js");

const ATLAS_URL ="mongodb+srv://amansinghas9815:63ILu26ynAUowTZJ@cluster0.wvlxaix.mongodb.net/VOPA?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
    try {
        await mongoose.connect(ATLAS_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to db");
        await initDB();
    } catch (err) {
        console.error(err);
    }
}

const initDB = async () => {
    try {
        await Question.insertMany(initData.data);
        console.log("Data was initialized");
    } catch (err) {
        console.error(err);
    }
};

main();
