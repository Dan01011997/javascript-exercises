const repeatString = function(str,num) {
    let tempStr=str;
    for(let i=1;i<num;i++)
     str+=tempStr;
    if(num<0)
        return "ERROR";
    else
        return str;
};

// Do not edit below this line
module.exports = repeatString;
