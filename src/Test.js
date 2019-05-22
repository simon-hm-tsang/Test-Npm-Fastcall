const Fastcall = require('fastcall');
const Lib = new Fastcall.Library('./src/SharedObject.so');
const Ref = Fastcall.ref;

const Struct = {
    Employee: `struct Employee { char* name; int empid; float wage; }`
};

const Func = {
    OutName: 'void ChangeEmpid(int* out_Empid)',
    OutputEmployeeName: 'void OutputEmployeeName(Employee* emp)'
}

class Test{
    constructor(){
        this.lib = Lib
            .struct(Struct.Employee)
            .function(Func.OutputEmployeeName)
            .function(Func.OutName);
    }

    TestNewStruct(){
        let empStruct = this.lib.structs.Employee.type({name:Fastcall.makeStringBuffer('TestNewStruct'), empid:5, wage:16700});
        console.log(`TestNewStruct:`);
        console.log(Ref.readCString(empStruct.name,0));

        return empStruct;
    }

    TestLocalChangeStruct(){
        let empStruct = this.TestNewStruct();
        empStruct.name = Fastcall.makeStringBuffer('TestLocalChangeStruct');
        console.log(`TestLocalChangeStruct:`);
        console.log(Ref.readCString(empStruct.name,0));

        this.lib.interface.OutputEmployeeName(empStruct);
    }

    TestCppChangeStruct(){
        let empStruct = this.TestNewStruct();

        let intPtr = Ref.alloc(Ref.types.int);
        console.log(`empid: ${empStruct.empid}, intPtr: ${Ref.readCString(intPtr, 0)}`);

        this.lib.interface.ChangeEmpid(empStruct.empid);

        empStruct.empid = intPtr.deref();
        console.log(`After TestCppChangeStruct:`);
        console.log(`empid: ${empStruct.empid}`);
    }
}

module.exports = Test;

new Test().TestCppChangeStruct();