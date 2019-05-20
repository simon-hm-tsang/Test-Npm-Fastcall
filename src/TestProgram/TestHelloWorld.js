const fastcall = require('fastcall');
const lib = new fastcall.Library('src/SharedObject/HelloWorld.so');

lib
    .function('int HelloWorld(int)')

const HelloWorld = (times = 1) => {
    console.time();
    for(let i = 0; i < times; i++){
        const result = lib.interface.HelloWorld(100);
    }
    console.timeEnd();
}

HelloWorld(10);