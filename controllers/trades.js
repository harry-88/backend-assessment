const tradeBusiness = require("../business/tradeBusiness")

class tradeController {


    addTrade = async (req, res, next) => {
        const addTrade = await tradeBusiness.addTrade(req.body);

        if (addTrade) {
            res.status(200).send({
                status: true,
                code: 200,
                message: "trade is added.",
            });
        } else {
            res.status(500).send({
                status: false,
                code: 500,
                message: "There is some error occure while creating the user.",
            });
        }


    }


    getTrades = async (req, res, next) => {
        console.log("req.queryis ",req.query)
        const getAllTrade = await tradeBusiness.getTrade(req.query);

        res.status(200).send({ status: true, code: 200, data: getAllTrade });
    }
    deleteTrade = async (req, res, next) => {
        res.status(405).send({
            status: false,
            code: 405,
            message: "API does not allow deleting trades for any id value."
        })
    }
    updateTrade = async (req, res, next) => {
        res.status(405).send({
            status: false,
            code: 405,
            message: "API does not allow modifying  trades for any id value."
        })
    }
}

module.exports = new tradeController();