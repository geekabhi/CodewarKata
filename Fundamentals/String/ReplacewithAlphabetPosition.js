function alphabetPosition(text) {

  //var re = /[^a-zA-Z]/;

  // return text.split('').join(' ').split(re).filter(Boolean).map( (e) => {
  //   if ((e.charCodeAt(0) - 96) > 0) {
  //     return (e.charCodeAt(0) - 96) 
  //   } 
  //   else {
  //     return (e.charCodeAt(0) - 64)
  //   }
  // }).join(' ')
  
  return text.toLowerCase().replace(/[^a-z]/g,'').split('').map( e => e.charCodeAt(0) - 96).join(' ')
  
  
}
