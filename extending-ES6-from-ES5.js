class ParentEs6Class {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getDetails() {
        return `${this.name} ${this.id}`;
    }
};


function ChildEs5Class(name, id, dept) {
    var parentObj = new ParentEs6Class(name, id);
    Object.setPrototypeOf(parentObj, ChildEs5Class.prototype);
    parentObj.dept = dept;
    return parentObj;
};
ChildEs5Class.prototype.getDetails = function () { return this.name + ' ' + this.id + ' ' + this.dept; };

const execute = () => {
    const parentEs6Instance = new ParentEs6Class('Cave Dweller', 100);
    const val = parentEs6Instance.getDetails();
    console.log(val);
    const childEs5Instance = new ChildEs5Class('Cave Dweller', 100, 'Cave Dwelling');
    const val1 = childEs5Instance.getDetails();
    console.log(val1);
};

execute();
