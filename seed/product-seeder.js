var Prodcut = require('../models/product');

var mongoose = require('mongoose')

mongoose.connect('localhost:27017/shopping')

var products = [
    new Prodcut({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/9/91/WoW_Box_Art1.jpg',
        title: 'World of Warcraft',
        description: 'Waste hundreds of hours!',
        price: 30,
        type: 'game'
    }),
    new Prodcut({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png',
        title: 'Diablo 3',
        description: 'Slay some demons!!',
        price: 50,
        type: 'game'
    }),
    new Prodcut({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/7/70/Fallout_4_cover_art.jpg',
        title: 'Fallout 4',
        description: 'My best buddy was a dog',
        price: 10,
        type: 'game'
    }),
    new Prodcut({
        imagePath: 'https://www.rockstargames.com/V/img/global/order/GTAV-PC.jpg',
        title: 'Grand Theft Auto V',
        description: 'nice rpg',
        price: 20,
        type: 'game'
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}