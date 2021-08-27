const router = require('express').Router();
let Owners_info = require('../models/owners.model');

router.route('/').get((req, res)=> {
    Owners_info.find()
        .then(owners_detail => res.json(owners_detail)) 
        .catch(err => res. status(400).json('Error :' + err));
})

// add owners info
router.route('/add_ownersinfo').post((req, res)=> {
    const owners_name = req.body.owners_name
    const building_no = req.body.building_no
    const unit_num = req.body.unit_num
    const water_m_num = req.body.water_m_num
    const electric_m_num = req.body.electric_m_num
    const condodues = req.body.condodues


    const newOwners_infoDeclarations = new Owners_info({owners_name,building_no,unit_num,       
                                                unit_num,water_m_num,electric_m_num,condodues});

    newOwners_infoDeclarations.save()
        .then(owners_detail => res.json('New Record Added'))
        .catch(err => res.status(400).json('Error :' + err));
})

// details
router.route('/edit-for-owners-info/:id').get((req, res) =>{
    Owners_info.findById(req.params.id)
    .then(owners_detail => res.json(owners_detail))
    .catch(err => res.status(400).json('Error :' + err));
});

// UPDATE DATA
router.route('/updateOwner/:id').post((req, res) =>{

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

router.route('/:id').delete((req, res) =>{
    Owners_info.findByIdAndDelete(req.params.id)
    .then(owners_detail => res.json('Record was deleted.'))
    .catch(err => res.status(400).json('Error :' + err));
});

module.exports = router;