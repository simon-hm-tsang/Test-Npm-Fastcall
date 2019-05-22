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

    void OutputEmployeeName(Employee* emp){
        cout << emp->empid << ':' << emp->name << ':' << emp->wage << endl;
    }

    void ChangeEmpid(int* out_Empid){
        *out_Empid = 666;
    }
}
