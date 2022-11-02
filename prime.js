//find prime
function find_prime(N){
let count=0
for(let i=0;i<N;i++){
    if(N%i==0){
     count++
}
   }
if(count==2){
return true;
}return false;
}
find_prime(11);

