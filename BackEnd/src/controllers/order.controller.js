const orderService = require("../services/order.service.js");

const createOrder = async(req,res)=>{
    const user = req.user;

    try {
        let createdOrder = await orderService.createOrder(user,req.body);
        res.status(201).send(createdOrder);
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

const findOrderById = async(req,res)=>{
    const user = req.user;
    try {
        let order = await orderService.findOrderById(req.params.id);
        res.status(201).send(order);
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

const orderHistory = async(req,res)=>{
    const user = req.user;
    try {
        let order = await orderService.usersOrderHistory(user._id);
        res.status(201).send(order);
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

module.exports = {
    createOrder,
    findOrderById,
    orderHistory
}
