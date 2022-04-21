const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET /tickets/new
router.get('/tickets/new', ticketsCtrl.new);
// POST /tickets/:id/tickets
router.post('/tickets/:id/tickets', ticketsCtrl.create); 
