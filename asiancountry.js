// XML - HTTP REQUEST: it is used to interact with servers via API.
//Why: to get the data from the server via API.

//Step 01: Create a XHR Objects
//var variableName: userdefined your choice
var request = new XMLHttpRequest();
//Step 02: Specifiy the API
request.open("GET", "https://restcountries.com/v3.1/all");
//Step 03: Sending the request
request.send();
//Step 04: Once the requested data is there in server once data is successfully loaded,
//Server response will be of 200 status code.
//Functions: they are used to perform specific task.
request.onload=()=>{
    var result = JSON.parse(request.response);
    console.log(result);
     let asia = result.filter((country) =>
        country.continents.includes('Asia') || country.region.includes('Asia')
     );
   console.log("countries of Asia ")
   console.log(asia)
  
}
