function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Emp {
    aa: string;
    constructor(aa: string) {
        this.aa = aa;
    }

    @enumerable(false)
    preintA() {
        return this.aa;
    }
}

// type B = { a: string };
// const b: B = { a: '' };
// console.log(b);
for (let i in new Emp('AA')) {
    console.log(i);
}

// console.log(Object.getOwnPropertyDescriptor(new Emp('AA'), 'preintA'));