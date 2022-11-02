//find prime
function find_prime(n){
count=0
for(let i=0;i<=N;i++){
    if(n%i==0){
     count++
}
   }
if(count==1){
return true
}return false
}
