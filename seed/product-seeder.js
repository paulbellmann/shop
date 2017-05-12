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
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png',
        title: 'Grand Theft Auto V',
        description: 'nice rpg',
        price: 20,
        type: 'game'
    }),
    new Prodcut({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/41GPhYN9ZFL._SX355_.jpg',
        title: 'Happy Hacking Keyboard Professional2',
        description: 'Best Topre out there',
        price: 244.55,
        type: 'keyboard'
    }),
    new Prodcut({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81alii2vdhL._SL1500_.jpg',
        title: 'Vortex KBC poker 3',
        description: 'Ultra-kompakte mechanische Tastatur',
        price: 135.99,
        type: 'keyboard'
    }),
    new Prodcut({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61U6lwIIJoL._SL1201_.jpg',
        title: 'Razer Blackwidow Chroma',
        description: 'RGB Beleuchtet und voll programmbierbar mit 5 Macrotasten, DE-Layout',
        price: 164.99,
        type: 'keyboard'
    }),
    new Prodcut({
        imagePath: 'https://mechanicalkeyboards.com/shop/images/products/large_1323_DSC_1268.jpg',
        title: 'Leopold FC660C',
        description: 'Excellent for gaming and typing',
        price: 229.00,
        type: 'keyboard'
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