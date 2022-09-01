const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

    let n = result.input.split(",");
    let sum = 0;
    let a = n.length
    for (i = 0; i < n.length; i++) {
        const element = parseInt(n[i]);
        sum += element
    }
    sum /= a
    let count = 0
    let cem = 0
    for (i = 0; i < n.length; i++) {
        const element = parseInt(n[i]);
        if (n[i] > sum) {
            count++
            cem += element
        }
    }
    console.log(cem);
    console.log(count);

});