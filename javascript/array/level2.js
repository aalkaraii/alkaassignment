const arr = ['kaylin', 'ram', 'gopal', 'ankit']

const userDetails = {
    'kaylin': 'khanal',
    'alisha': 'rauniyar',
    'ayush': 'rai',
    'gopal': 'tharu'
}

arr.filter((item)=>{
  if(userDetails[item]){
return item +' '+userDetails[item]
  }
})