function isArmstrongNumber(num){
    const numofdigits=num.toString().length;
    let sumofnum=0;
    let temp=num;
    while(temp>0){
        const digit=temp%10;
        sumofnum=sumofnum+(digit**numofdigits);
        temp=Math.floor(temp/10);
    }
    return sumofnum === num;
}


function printArmstrongNumberTillN(num){
    if(num<0)
        return;
    for(let i=1;i<=num;i++){
        if(isArmstrongNumber(i)){
            console.log(i)
        }
    }
}

printArmstrongNumberTillN(153);