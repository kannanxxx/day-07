var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();
 request.onload=()=>{
    var result = JSON.parse(request.response)
    console.log(result)

    let pop = result.filter((country)=>
      country.population < 200000
 );
    console.log(pop)
 }