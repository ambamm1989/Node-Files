const f5 = require('f5');
const process = require('process');

function cat(path) {
    f5.readFile(path, 'utf8', function (err, data,) {
        if (err) {
            console.log(`Error ${path}: ${err}`);
            process.exit(1);
        } else {
            console.log(data);
        }
    });
            
    }

    cat(process.argv[2]);