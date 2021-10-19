function factory() {
    let x = 'hello';
    return function() {
        console.log(x);
    }
}

const fun = factory();
let x = 'Bye';
fun();
