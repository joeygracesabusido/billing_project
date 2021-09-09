const router = require('express').Router();
const { request, response } = require('express');

let Owners_info = require('../models/owners.model');
let Water_billing_beg_data = require('../models/waterbilling-data.model')
let Water_cubic_data = require('../models/water-reading.model')

router.route('/').get((req, res) => {
    Owners_info.find()
        .then(owners_detail => res.json(owners_detail))
        .catch(err => res.status(400).json('Error :' + err));
})

// add owners info
router.route('/add_ownersinfo').post((req, res) => {
    const owners_name = req.body.owners_name
    const building_no = req.body.building_no
    const unit_num = req.body.unit_num
    const water_m_num = req.body.water_m_num
    const electric_m_num = req.body.electric_m_num
    const condodues = req.body.condodues


    const newOwners_infoDeclarations = new Owners_info({
        owners_name, building_no, unit_num,
        water_m_num, electric_m_num, condodues
    });

    newOwners_infoDeclarations.save()
        .then(owners_detail => res.json('New Record Added'))
        .catch(err => res.status(400).json('Error :' + err));
})

// details
router.route('/edit-for-owners-info/:id').get((req, res) => {
    Owners_info.findById(req.params.id)
        .then(owners_detail => res.json(owners_detail))
        .catch(err => res.status(400).json('Error :' + err));
});

// UPDATE DATA
router.route('/updateOwner/:id').post((req, res) => {

    Owners_info.findById((req.params.id))
        .then(owners_detail => {
            owners_detail.owners_name = req.body.owners_name
            owners_detail.building_no = req.body.building_no
            owners_detail.unit_num = req.body.unit_num
            owners_detail.water_m_num = req.body.water_m_num
            owners_detail.electric_m_num = req.body.electric_m_num
            owners_detail.condodues = req.body.condodues

            owners_detail.save()
                .then(() => res.json('New Record updated'))
                .catch(err => res.status(400).json('Error :' + err));
        })
        .catch(err => res.status(400).json('Error :' + err));

});

// DELETE DATA

router.route('/:id').delete((req, res) => {
    Owners_info.findByIdAndDelete(req.params.id)
        .then(owners_detail => res.json('Record was deleted.'))
        .catch(err => res.status(400).json('Error :' + err));
});

// search function

router.route('/get/:id').get((req, res) => {
    try {
        Water_billing_beg_data.findOne({ "_id": req.params.id })
            // Water_billing_beg_data.findById(req.params.id)
            .then(water_beg_balance => res.json(water_beg_balance))

    } catch (e) {
        res.status(500).send({ message: e.message });
    }
});



// add beginning Balance
router.route('/add_w_beg_bal').post((req, res) => {
    const owners_name = req.body.owners_name
    const building_no = req.body.building_no
    const unit_num = req.body.unit_num
    const water_m_num = req.body.water_m_num
    const w_begging_balance = req.body.w_begging_balance


    const newWater_dataDeclarations = new Water_billing_beg_data({
        owners_name, building_no, unit_num,
        water_m_num, w_begging_balance
    });

    newWater_dataDeclarations.save()
        .then(water_beg_balance => res.json('New Record Added'))
        .catch(err => res.status(400).json('Error :' + err));
})

// this is for list of water beginning balance
router.route('/water-beg-bal-list').get((req, res) => {
    Water_billing_beg_data.find()
        .then(water_beg_balance => res.json(water_beg_balance))
        .catch(err => res.status(400).json('Error :' + err));
})


//  this is for searching water beg balance for water reading

// router
//     .route('/water-beg-bal')
//     .get(async (req, res, next) => {
//         try {
//             const { owner } = req.query;

//             const water_beg_balance = await Water_billing_beg_data.findById({
//                 owners_name: {
//                     $regex: owner,
//                     $options: 'i'
//                 }
//             });

//             if (!water_beg_balance) {
//                 return res.status(404).json({ error: 'No data found.' });
//             }

//             res.json(water_beg_balance);
//         } catch (err) {
//             next(err);
//         }
//     });

// Eto search mo? Dun sa may input fields?
router
    .route('/search-water-beg-bal')
    .get(async (req, res, next) => {
        try {
            const result = await Water_billing_beg_data
                .findOne({
                    owners_name: {
                        $regex: req.query.term, // match either same value
                        $options: 'i' // case insensitive
                    }
                });

            if (!result) {
                return res.status(404).send({ message: 'No owner found.' });
            }

            res.send(result);
            // let result = Water_billing_beg_data.aggregate([
            //     {
            //         "$search": {
            //             "autocomplete": {
            //                 "query": `${request.query.term}`,
            //                 "path": "owners_name",
            //                 "fuzzy": {
            //                     "maxEdits": 2
            //                 }
            //             }
            //         }
            //     }
            // ])
            //     .then(water_beg_balance => response.json(result))
            // response.send(result)
        } catch (e) {
            res.status(500).send({ message: e.message })
        }
    })

router.route('/water-beg-bal/:id').get((req, res) => {
    Water_billing_beg_data.findById(req.params.id)
        .then(water_beg_balance => res.json(water_beg_balance))
        .catch(err => res.status(400).json('Error :' + err));
});

// save water reading to mongo db
router.route('/water-reading-save').post((req, res) => {
    const date_from = req.body.date_from
    const date_to = req.body.date_to
    const owners_name = req.body.owners_name
    const building_no = req.body.building_no
    const unit_num = req.body.unit_num
    const water_m_num = req.body.water_m_num
    const w_begging_balance = req.body.w_begging_balance
    const w_reading_data = req.body.w_reading_data
    const w_cubic_reading = req.body.w_cubic_reading


    const newWater_dataDeclarations = new Water_cubic_data({
        date_from, date_to, owners_name, building_no, unit_num,
        water_m_num, w_begging_balance, w_reading_data,  w_cubic_reading
    });

    newWater_dataDeclarations.save()
        .then(water_cubic_data => res.json('New Record Added'))
        .catch(err => res.status(400).json('Error :' + err));
})

// for water reading list

router.route('/water-reading-list').get((req, res) => {
    Water_cubic_data.find()
        .then(water_cubic_data => res.json(water_cubic_data))
        .catch(err => res.status(400).json('Error :' + err));
})

// this is for electric water balance

router
    .route('/search-ownerinfo')
    .get(async (req, res, next) => {
        try {
            const result = await Owners_info
                .findOne({
                    owners_name: {
                        $regex: req.query.term, // match either same value
                        $options: 'i' // case insensitive
                    }
                });

            if (!result) {
                return res.status(404).send({ message: 'No record found.' });
            }

            res.send(result);
            
        } catch (e) {
            res.status(500).send({ message: e.message })
        }
    })

module.exports = router;