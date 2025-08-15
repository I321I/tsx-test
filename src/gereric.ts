// only support number
const add = (a: number, b: number): number => {
    return a + b;
}

// support number and string, but can not condition while input
const add2 = (a: number | string, b: number | string): number | string => {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    if (typeof a === 'string' && typeof b === 'string') return a + b;
    return '';
}

// generic, 泛型函数
function add3<T>(a: T, b: T): T {
    return a as any + b as any; // unsafe, but works for both number and string
}

let i = 8
add3(i, 5);


const arrComponent = <T, U>(props: T,): U => {
    return props as any as U
}
type arrowComponentType<T> = (props: T) => any;
interface arrowComponentInterface<T> {
    prop: T;
}

const a: arrowComponentType<number> = (props) => {
    return props + 5;
}
let b: arrowComponentInterface<number> = {
    prop: 10
}