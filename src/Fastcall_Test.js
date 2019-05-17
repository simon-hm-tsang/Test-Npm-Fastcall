const fastcall = require('fastcall');
const lib = new fastcall.Library('./numlib.so').function('int num(int)');

const call = (times = 1) => {
    console.time();
    for(let i = 0; i < times; i++){
        const result = lib.interface.num(100);
    }
    console.timeEnd();
}

call(1000000);