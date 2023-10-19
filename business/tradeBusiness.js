const Trade = require("../models/trades")

class tradeBusiness{

    addTrade = async(data)=>{

        try {
            const result = await Trade.create(data);
            
            if (result)
                return true;
            else
                return false;
        } catch (error) {
            console.log("error is ",error)
            return false
            
        }
    }

    getTrade = async(filter ={})=>{
        try {
            const result = await Trade.findAll(filter);
            return result;
        } catch (error) {
            console.log("erroris ",error)
            return []

        }
    }
}

module.exports = new tradeBusiness()