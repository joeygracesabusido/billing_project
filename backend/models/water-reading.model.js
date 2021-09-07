const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Water_cubic_dataSchema = new Schema({

    owners_name: {
        type: String,
        required: true,
        trim: true
    },
    building_no: {
        type: String,
        required: true,
        trim: true
    },
    unit_num: {
        type: String,
        required: true,
        trim: true
    },
    water_m_num: {
        type: String,
        required: true,
        trim: true
    },

    w_begging_balance: {
        type: Number,
        required: true,
        trim: true
    },

    w_reading_data: {
        type: Number,
        required: true,
        trim: true
    },

    w_cubic_reading: {
        type: Number,
        required: true,
        trim: true
    },

}, {
    timestamps: true
})

const Water_cubic_data = mongoose.model('water_cubic_data', Water_cubic_dataSchema);

module.exports = Water_cubic_data;