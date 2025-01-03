const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const tabAuthSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true, 
        },
        password: {
            type: String,
            default: ""
        },


    },
    {
        timestamps: true,
        collection: "tabauth",
    }
);


tabAuthSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

tabAuthSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next();
    }

    if (!this.password) {
        next();
    }

    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);
});

const model = mongoose.model("tabauth", tabAuthSchema);
module.exports = model;
