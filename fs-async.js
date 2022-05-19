const {readFile,writeFile}=require('fs')

readFile('./content/first.txt','utf-8',(err,res)=>{
 if(err){
     console.log(err);
     return;
}
const first=res;
console.log("start");
readFile('./content/second.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
const second=res;
writeFile('./content/result-async.txt',`Here is my final async message : ${first} and ${second}`,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
        console.log("done with this");
    })
 })
})
console.log("start next task");



