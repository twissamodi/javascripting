function areWordsRepeating(stringInput){
    stringInput=stringInput.toLowerCase();
    let individualWords=stringInput.split(" ");
    let mapOfWords={};
    for(let i=0;i<individualWords.length;i++){
        let currentValue=mapOfWords[individualWords[i]];
        if(currentValue)
            return true;
        mapOfWords[individualWords[i]]=1;
    }
    return false;
}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter a string.\n`, stringInput => {
    console.log(areWordsRepeating(stringInput))
    readline.close()
  })
  