let req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
  req.send();
  req.onload= ()=>{
    let result = JSON.parse(req.response)
    // console.log(result)
    let total= result.reduce((acc,country) =>acc+country.population,0);
     console.log("total population"+total)
  }
