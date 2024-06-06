const arr = ['kaylin', 'ram', 'gopal', 'ankit']

const userDetails = {
    'kaylin': 'khanal',
    'alisha': 'rauniyar',
    'ayush': 'rai',
    'gopal': 'tharu'
}

let result =arr.map((item)=>{
  if(userDetails[item]){
return item +' '+userDetails[item]
  }
})
 let final = result.filter(( element )=> {
   return element !== undefined;
});
console.log(final)