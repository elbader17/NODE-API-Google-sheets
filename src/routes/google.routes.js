const {Router} =require('express')
const router =Router()


const {
    getInfo,
    pintarForm,
    guardarDato
} =require('../controllers/google.controller');

router.get('/',getInfo);
router.get('/form',pintarForm);
router.post('/form',guardarDato);

module.exports=router;