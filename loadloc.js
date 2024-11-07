fetch("loc.json")
  .then(response => response.json())
  .then(data => {
    let countryList = document.getElementById("loc");
    console.log(countryList);
    data.forEach(country => {
      let option = document.createElement("option");
      option.text = country.name;
      option.value = country.iso_code;
      countryList.add(option);
    });
  })
  .catch(error => console.error("Error:", error));  
  

  