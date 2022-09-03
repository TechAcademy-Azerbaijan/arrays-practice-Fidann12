const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

    let n = result.input.split(",");
    let count = 0;
    for (i = 0; i < n.length; i++) {
        const element = parseInt(n[i]);
        const next_element = parseInt(n[i + 1]);
        const before_element = parseInt(n[i - 1])
        if (element > next_element && element > before_element) {
            count++
        }
    }
console.log(count);

});
