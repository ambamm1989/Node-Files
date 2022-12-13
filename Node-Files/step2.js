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

    async function kittyCat(url) {
        try {
            let resp = await axios.get(url);
            console.log(resp.data);
        } catch (err) {
            console.log(`Error ${url}: ${err}`);
            process.exit(1);
        }
    }

        let path = process.argv[2];

        if (path.slice(0, 4) === 'http') {
            kittyCat(path);
        } else {
            cat(path);
        }