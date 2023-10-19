const tradeSchema = require("../schema/tradeSchema");

class tradeMiddleware {

    addTradeValidation = (req, res, next) => {
        const { error } = tradeSchema.addTrade.validate(req.body);
        
        if (error ) {
            const errorMessages = error.details.map((detail) => detail.message);
            res.status(500).send({
                status: false,
                code: 500,
                message: "fields are required.",

                errors: errorMessages,
            });
        } else {
            next();
        }
    }
}

module.exports = new tradeMiddleware()