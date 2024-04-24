let req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
  req.send();
  req.onload= ()=>{
    let result = JSON.parse(req.response)
    // console.log(result)
    let total= result.filter((country) =>country.currencies&&country.currencies.USD);
    //  console.log(total)
   let final= total.map((value)=>
    value.name.common);
    console.log(final)
  }
