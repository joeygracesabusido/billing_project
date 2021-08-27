const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const owners_infoSchema = new Schema({

    owners_name:{
        type: String,
        required: true,
        trim: true
    },
    building_no:{
        type: String,
        required: true,
        trim: true
    },
    unit_num:{
        type: String,
        required: true,
        trim: true
    },
    water_m_num:{
        type: String,
        required: true,
        trim: true
    },
    electric_m_num:{
        type: String,
        required: true,
        trim: true
    },
    condodues:{
        type: Number,
        required: true,
        trim: true
    },

}, {
    timestamps: true
})

const Owners_info = mongoose.model('owners_detail', owners_infoSchema);

module.exports = Owners_info;