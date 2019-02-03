const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

//Connection to MongoDB
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
var db;


MongoClient.connect('mongodb://test1:testone1@ds125574.mlab.com:25574/testone', { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('testone');
});


// Add new entry to Occupancy Report
router.get('/regdata/:month/:year/:standard/:deluxe/:twinBed/:family/:superior/:booked/:occupancy/:revenue', (req, res) => {
    db.collection('Occupancy').save({
        "month": req.params.month, "year": req.params.year,
        "standard": req.params.standard, "deluxe": req.params.deluxe, "twinBed": req.params.twinBed, "family": req.params.family, "superior": req.params.superior,
        "booked": req.params.booked, "occupancy": req.params.occupancy, "revenue": req.params.revenue
    }, (err, result) => {
    });
});

// Add new entry to Stock Report
router.get('/regitem/:stockID/:category/:item/:stock/:replenish', (req, res) => {
    db.collection('Inventory').save({
        "stockID": req.params.stockID, 
        "category": req.params.category, "item": req.params.item, 
        "stock": req.params.stock, "replenish": req.params.replenish
    }, (err, result) => {
    });
});

// Get Stock and Inventory Report
router.get('/inventory', function (req, res) {
    db.collection('Inventory').find().toArray((err, results) => { res.send(results) });
});


// Get Occupancy Report
router.get('/occupancy', function (req, res) {
    db.collection('Occupancy').find().toArray((err, results) => { res.send(results) });
});

//post staff
router.get('/insertStaff/:name/:dob/:bank/:phone/:duty/:room/:status', (req, res2) => {
    db.collection('staff').save({
        "name": req.params.name,
        "dob": req.params.dob,
        "bank": req.params.bank,
        "phone": req.params.phone,
        "duty": req.params.duty,
        "room": req.params.room,
        "status": req.params.status
    }, (err, result) => {
    });
});

//get staff
router.get('/staff', function(req, res){
    db.collection('staff').find().toArray( (err, results) => 
{res.send(results)});
});

// REFERENCE CODE
/*
router.get('/postings/:username/:post', (req,res) => {
    db.collection('travelz_journal').save({
        "username" : req.params.username, "post" : 
        req.params.post}, (err, result) => {
    });
});
*/

module.exports = router;



