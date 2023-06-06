function pow(x, n)
{
    return x**n; 
}
function sumTo(n)
{
    return (n*(n+1))/2  

}

function factorial(n)
{
    if (n<=0)
    {
        return 1n; 
    }
    else{
        return ( BigInt (n) *  BigInt(factorial(n-1))); 
    }
}

export function fib(n) {
    let a = 1n;
    let b = 1n;
    if (n == 0n) {
        return 0n;
    }
    else {
        for (let i = 3n; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

function compare(x)
{
return function(y)
{
    if (y>x) return true;
    else if (y<x) return false;
    else if (y==x) return null;
}
}

function sum()
{
    var result=0; //сумма
    for (var i=0; i<arguments.length; i++)
    {
        result+=arguments[i] 
    }
    return result;
}