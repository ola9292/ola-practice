let chars = "yOu can have data without information but you cannot have information wihtout data."
let count={}
let newChars=chars.toLowerCase().split(" ").join("")

for(let i=0; i<newChars.length; i++){
   if(!count[newChars[i]]){
        count[newChars[i]] = 1
   }else{
        count[newChars[i]]+=1
   }
}

console.log(count)

// console.log(newChars)