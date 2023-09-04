const express = require('express');
const router = express.Router();

const pageCtrl = require('../controllers/pageCtrl');
const dBCtrl = require('../controllers/dBCtrl');
const dBCtrlOrders = require('../controllers/dBCtrlOrders');
const dBCtrlStore = require('../controllers/dBCtrlStore');

// // Site requests.
router.get('/index', pageCtrl.index);
// router.get('/history', siteController.history);
// router.get('/about', siteController.about);

//data base requests

//user requests
router.get('/user', dBCtrl.user); // returns all data from user 
router.post('/createUser', dBCtrl.createUser); //post user
router.patch('/updateUser/:firstName', dBCtrl.updateUser) //update user
router.delete('/deleteUser/:firstName', dBCtrl.deleteUser); // delete user

//order requests
router.get('/order', dBCtrlOrders.user); // returns all data from order
router.post('/createOrder', dBCtrlOrders.createUser); //post order
router.patch('/updateOrder/:matchID', dBCtrlOrders.updateUser) //update order
router.delete('/deleteOrder/:matchID', dBCtrlOrders.deleteUser); // delete order

//Store requests
router.get('/store', dBCtrlStore.user); // returns all data from order
router.post('/createStore', dBCtrlStore.createUser); //post order
router.patch('/updateStore/:matchID', dBCtrlStore.updateUser) //update order
router.delete('/deleteStore/:matchID', dBCtrlStore.deleteUser); // delete order


module.exports = router;

