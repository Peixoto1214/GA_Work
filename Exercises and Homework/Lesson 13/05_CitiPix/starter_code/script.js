

//document.addEventListener('DOMContentLoaded', function(event){

//create array of cities
const citiesList = ['nyc' , 'lax', 'sfo', 'aus', 'sid' ]
const citiesNames = ['New York City', 'Los Angeles', 'San Francisco', 'Austin', 'Sydney']


//Function that changes background






    

//when the page loads


    //add the cities to the select 

    //Loop thru cities

    for (let i=0;i<citiesList.length;i++){
        //creat option for city
        let newElement = document.createElement('option');

        //set the text for the city
        newElement.innerText = citiesNames[i];

        //set the value of attribute
        newElement.setAttribute('value', citiesList[i]);


        //add to select tag
        document.getElementById('city-type').appendChild(newElement);



    }

//Bind change event of select to function that changes background
document.getElementById('city-type').addEventListener('change', function(thatWhichHasChanged){
//gets a city abbreviation as parameter
    let theCityChosen = document.getElementById('city-type').value;


    //figure out what class to use
    let theClass = "";
    if(theCityChosen.toLowerCase() == 'nyc'){
        theClass = 'nyc';
    }else if(theCityChosen.toLowerCase() =='lax'){
        theClass = 'la';
    }else if(theCityChosen.toLowerCase() =='sfo'){
        theClass = 'sf';
    }else if(theCityChosen.toLowerCase() =='aus'){
        theClass = 'austin';
    }else{
        theClass = 'sydney';
    }
    


    //set the class of the body
    document.querySelector('body').setAttribute('class', theClass);




});