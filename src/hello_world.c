#include <stdio.h>

int num(int input) {
    printf("From shared library, I got input of %d", input);

    return input;
}