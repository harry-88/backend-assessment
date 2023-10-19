const Joi = require("joi");

class tradeSchema {

    addTrade = Joi.object({
        type: Joi.string(),
        user_id: Joi.number(),
        symbol: Joi.string(),
        shares: Joi.number(),
        price: Joi.number(),
        timestamp: Joi.number(),
    })
}

module.exports = new tradeSchema()