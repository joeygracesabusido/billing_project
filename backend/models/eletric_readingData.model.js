const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Electric_readingData_dataSchema = new Schema({

    date_from: {
        type: Date,
        required: false,
        trim: true
    },

    date_to: {
        type: Date,
        required: false,
        trim: true
    },

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
    electric_m_num:{
        type: String,
        required: true,
        trim: true
    },
   
    e_begging_balance:{
        type: Number,
        required: true,
        trim: true
    },

    e_reading_data:{
        type: Number,
        required: true,
        trim: true
    },

    totalElectric_reading_data:{
        type: Number,
        required: true,
        trim: true
    },

}, {
    timestamps: true
})

const Electric_reading_data = mongoose.model('electric_readingData', Electric_readingData_dataSchema);

module.exports = Electric_reading_data;