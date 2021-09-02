const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Water_billing_beg_dataSchema = new Schema({

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
   
    w_begging_balance:{
        type: Number,
        required: true,
        trim: true
    },

}, {
    timestamps: true
})

const Water_billing_beg_data = mongoose.model('water_beg_balance', Water_billing_beg_dataSchema);

module.exports = Water_billing_beg_data;