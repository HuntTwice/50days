// 解构赋值
const [a, b, c] = [1, 2, 3]
console.log(a, b, c)


const {username: MyName, age, ...other} = {
    username: 'hunter',
    age: 22,
    sex: 'male',
    hobby: 'football'
}
console.log(MyName, age, other)


// 数据和对象的扩展
// 扩展运算符
const arr1 = [1, 2, 3];
const arr2 = [5, 6, 9];
const arr3 = [...arr1, ...arr2, 52, 63];
console.log(arr3)

const obj1 = {a: 1}
const obj2 = {b: 2}
const obj3 = {
    c: 9,
    ...obj1,
    ...obj2
}

console.log(obj3)


//数组方法
function fn() {
    Array.from(arguments).forEach(item=>{
        console.log(item);
    })
}
fn(1,2,3,4)


//对象方法
const objA = {
    name: '张三',
    age: 22
}

const objB = {
    gender: 'male'
}

const objC = Object.assign({},objA,objB)

console.log(objA,objB,objC)