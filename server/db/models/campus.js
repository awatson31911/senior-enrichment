'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
    name: {
        type: Sequelize.TEXT,
        alowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING
    }
})

