#include <stdio.h>

// Hello world
int HelloWorld(int input) {
    printf("From shared library, I got input of %d", input);

    return input;
};