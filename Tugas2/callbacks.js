function user(name, greeting, callback) {
    return callback(name, greeting);
}

var cetak = user('ITERA', 'Halo ', function(name, greeting) {
    return greeting+name;
});

console.log(cetak);