 const {readFileSync,writeFileSync}=require("fs")
 console.log("start");

 const first=readFileSync('./content/first.txt',"utf-8")
 const second =readFileSync('./content/second.txt',"utf-8")
// console.log(first,second);
console.log("done with this task");
console.log("starting next task");

writeFileSync('./content/resultsync.txt',`Here is the result ${first},${second}`,{flag:"a"})