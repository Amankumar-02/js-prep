let b1 = 100;
{
    var a1 = 10;
    let b1 = 20;
    const c1 = 30;
    console.log(a1)
    console.log(b1)
    console.log(c1)
}
console.log(b1)

let x = 10;
{
    let x = 100;
    {
        let x = 10000;
        console.log(x)
    }
    console.log(x)
}
console.log(x)