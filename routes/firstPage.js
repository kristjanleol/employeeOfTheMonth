const express = require('express');
const router = express.Router();
const homeController = require('../controllers/firstPage');

router.get('/', homeController.getInfos);
router.get('/admin/edit', homeController.getEditInfo);
router.post('/admin/edit', homeController.postEditInfo);

module.exports = router;