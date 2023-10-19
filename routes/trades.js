const express = require('express');
const trades = require('../controllers/trades');
const tradeMiddleware = require('../middleware/tradeMiddleware');
const router = express.Router();


router.post('/',tradeMiddleware.addTradeValidation,trades.addTrade)

router.get('/',trades.getTrades)


router.delete('/:id',trades.deleteTrade)
router.patch('/:id',trades.updateTrade)
router.put('/:id',trades.updateTrade)


module.exports = router;
