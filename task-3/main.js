const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

    let n = result.input.split(",");
    let max = parseInt(n[0]);
    let min = parseInt(n[0]);
    let max_index = 0;
    let min_index = 0;
    for (i = 0; i < n.length; i++) {
        const element = parseInt(n[i]);
        if (element > max) {
            max = element
            max_index = i
        }
        if (element < min) {
            min = element
            min_index = i
        }
    }
    [n[min_index],n[max_index]]=[max,min]
    console.log(n.join("\n"));
});
