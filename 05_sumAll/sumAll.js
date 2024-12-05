const sumAll = function(num1,num2) {
if(num1>=0 && num2>=0){
    let sum=0;
    while(num1>=num2)
    {
        sum+=num2;
        num2++;
    }
    sum=0;
    while(num2>=num1){
            sum+=num1;
            num1++;
    }
    return sum;
}
return "ERROR";
}
// Do not edit below this line
module.exports = sumAll;
