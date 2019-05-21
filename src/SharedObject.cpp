#include <iostream>
#include <stdio.h>

using namespace std;

extern "C" {
    struct Employee
    {
        char* name;
        int empid;
        float wage;
    };

    void OutName(Employee* emp){
        emp->name = "Changed";
    }

    void OutputEmployeeName(Employee* emp){
        cout << emp->empid << ':' << emp->name << ':' << emp->wage << endl;
    }
}
