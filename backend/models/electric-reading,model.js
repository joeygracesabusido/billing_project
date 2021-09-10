const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Electric_billing_beg_dataSchema = new Schema({

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

}, {
    timestamps: true
})

const Electric_billing_beg_data = mongoose.model('electric_beg_balance', Electric_billing_beg_dataSchema);

module.exports = Electric_billing_beg_data;