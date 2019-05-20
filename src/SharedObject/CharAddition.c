#include <stdio.h>

// Complex pointer
char CharAddition(char* c1, char* c2, int which){
    switch (which)
    {
    case 1:
        return *c1;
    case 2:
        return *c2;
    default:
        break;
    }

    return 'n';
};