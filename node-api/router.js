const express =  require('express');
const controller = require('./controller')

const router = express.Router();
// All API routes
router.get('/api/quiz/:id', controller.getQuiz);

module.exports = router;