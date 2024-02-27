// Get all countries from Asia continent/region using Filter function

 const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
    const obj = JSON.parse(this.response);
    obj.filter((item, index)=>{
        if(item.region === 'Asia'){
            console.log(item);
        }
    })


// Get all countries with a population of less than 2 lakhs using Filter function

    obj.filter((item, index)=>{
        if(item.population < 200000){
            console.log(item);
        }
    });

// Print the following details name, capital, flag, using forEach function



    obj.forEach((item) => {
        console.log(item.name.common);
        console.log(item.flag);
        console.log(item.capital);
    });


// Print the total population of countries using reduce function



    var total = obj.reduce((a, { population: p}) => a+=p,0)
    console.log(total);

// Print the country that uses US dollars as currency



    obj.forEach((item) => {
        if(item.currencies){
            item.currencies.hasOwnProperty('USD') ? console.log(item.currencies): '';
        }
    });
  }
  
