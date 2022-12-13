const f5 = require('f5');
const process = require('process');
const axios = require('axios');


function output (text, out) {
    if (out) {
        f5.write(out, text, 'utf8', function (err) {
            if (err) {
                console.log(`Could not write ${out}: ${err}`);
                process.exit(1);
            }
        });
    } else {
        console.log(text);
    }
}

function cat(path, out) {
    f5.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.log(`Could not read ${path}: ${err}`);
            process.exit(1);
        } else {
            handleOutput(data, out);
        }
        });
    }




async function kittyCat(url) {
        try {
            let resp = await axios.get(url);
            console.log(resp.data);
        } catch (err) {
            console.log(`Error ${url}: ${err}`);
            process.exit(1);
        }
    }

        

        if (path.slice(0, 4) === 'http') {
            kittyCat(path);
        } else {
            cat(path);
        }


        let path;
        let out;

        if (process.argv[2] === 'out') {
            out = process.argv[3];
            path = process.argv[4];
        }else {
            path = process.argv[2];
        }

        if (path.slice(0, 4) === 'http') {
            kittyCat(path, out);
        }else{
            cat(path, out);
        }