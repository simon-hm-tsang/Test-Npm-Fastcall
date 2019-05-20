const fastcall = require('fastcall');
const lib = new fastcall.Library('src/SharedObject/CharAddition.so');

lib
    .function('char CharAddition(char* c1, char* c2, int which)');

const CharAddition = (which = 1) => {
    console.time();

    const c1 = fastcall.makeStringBuffer('123');
    const c2 = fastcall.makeStringBuffer('456');

    console.log(lib.interface.CharAddition(c1, c2, which));

    console.timeEnd();
}

CharAddition(1);