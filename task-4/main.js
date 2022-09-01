const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

    let n = result.input.split(",");
    let a = parseInt(n[0])
    let arr = []
    for (i = 0; i < n.length; i++) {
        const element = parseInt(n[i]);
        const next_element = parseInt(n[i + 1]);
        if(a!==next_element && next_element!==element){
            arr.push(n[i])
        }
    }
    console.log(arr.join(" "));
});
