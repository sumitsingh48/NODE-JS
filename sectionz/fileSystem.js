let fs = require("fs").promises;

fs.writeFile("cb.txt",
    "this is simple call back file data",()=>{
      if(error){
        console.log("file is loading error",error)

      }else{
        console.log("file is created with simple call_back");
      }
});

async function readFilewithpromises(){
    try{
         let data = await fs.readFile("cb.txt","utf-8");
         console.log("aysc file data:",data)
    }catch(error){
        console.log
              ("Error is loading aysc file:",error)
       }
    }


readFilewithpromises();
    
