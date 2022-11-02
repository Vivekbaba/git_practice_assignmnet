//find prime
function find_prime(number){
count=0
for(let i=0;i<=number;i++){
    if(number%i==0){
     count++
}
   }
if(count==2){
return true
}return false
}
let answer=find_prime(11);
if (answer==true){
   console.log("Prime Number");
}else{
    console.log("Not a Prime Number")
}