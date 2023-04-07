"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangle.prototype.print = function () {
        console.log('hello');
    };
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    Rectangle.prototype.perimeter = function () {
        return (this.a + this.b) * 2;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(2, 3);
rectangle.print();
//
// class Triangle implements IShapeActions {
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return 88
//     }
//
//     perimeter(): number {
//         return this.c + this.c + this.b
//     }
//
// }
// Triangle.area()
//
// const shapes: IShapeActions[] = [
//     new Triangle(1, 2, 3),
//     new Rectangle(3, 6),
//     new Triangle(2, 3, 5)
// ]
//
// for (let shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }
//
// console.log('kjsdhfkshdfj');
console.log('hello');
// userService.getAll().then(value => value.data).then(users => {
//     for (let user of users) {
//         console.log(user.email);
//     }
// })
// const start = async ()=> {
//     const res = await userService.getAll();
//     const users = res.data;
//     for (let user of users) {
//
//     }
// }
// const asdf = (id: number): void => {
//     console.log(id);
// }
//
// asdf('ssss')
// enum DaysOfWeek{
//     MON=10,
//     TUE,
//     WED
//
// }
//
// console.log(DaysOfWeek.MON);
