const express =  require('express');
const controller = require('./controller')

const router = express.Router();
// All API routes
router.get('/api/getQuizQuestions', controller.getQuizQuestions);

module.exports = router;