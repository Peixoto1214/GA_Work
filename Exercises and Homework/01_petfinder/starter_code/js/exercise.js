function selectPet(petType){

    // Get the specific pet data set
    const thePet = petData[petType];

    // Set the title
    document.querySelector('.petDisplayName').innerText = thePet['displayName'];


    // Empty the specification data
    document.querySelector('.petsDataSpecs').innerHTML = " ";

    let listData = " ";

    // Add the space required, size, weight
    listData = listData +  "<dt> Space Required</dt>";
    listData += "<dd>" + thePet.spaceRequired + "</dd>";

    listData +="<dt>Weight</dt>";
    listData +="<dd>" + thePet.weight + "</dd>";

    listData +="<dt>Size</dt>";
    listData +="<dd>" + thePet.size + "</dd>";

 
    // Add logic to add the trainability and lap size images
    listData+="<dt>Trainability</dt>";
    if (thePet.trainability == true){
        listData += "<dd><img class='checkmark' src='./img/200px-Gnome-emblem-default.svg.png' alt=\"Yes\"/> </dd>";

    }else{
        listData += "<dd><img class='checkmark' src='./img/200px-Gnome-emblem-unreadable.svg.png' alt=\"Yes\"/></dd>";
       
       
    }
    listData += "<dt>Fits on Lap</dt>";

    if(thePet.fitsOnLap == true){
        listData += "<dd><img class='checkmark' src='./img/200px-Gnome-emblem-default.svg.png' alt=\"Yes\"/></dd>";
    }else{
        listData += "<dd><img class='checkmark' src='./img/200px-Gnome-emblem-unreadable.svg.png' alt=\"Yes\"/></dd>";
    }

    
    



    


    // Add the foods (may require loop)
   
    listData+="<dt>Foods</dt>";
    listData+="</dd>";

    for (let index = 0; index < thePet.foods.length; index++) 
    {
        listData+="<li>"+ thePet.foods[index]+"</li>";
        
    }


    document.querySelector('.petsDataSpecs').innerHTML = listData;


    // Update the images

    //set the big image
    document.querySelector('.photoLarge').setAttribute('src',thePet.images[0].img);

    document.querySelector('.photoLarge').setAttribute('alt',thePet.images[0].alt);
    // add the thumbnails
    let theThumbnails = "";
    //Seu animal use o array.images.lenght
    for (let i = 0; i < thePet.images.length; i++) {
        theThumbnails +="<a href='"+ thePet.images[i].img +"'><img class='photoThumb' src='"+ thePet.images[i].thumb  +"' alt=''/></a>";
       
    }
    document.querySelector('.thumbHaus').innerHTML = theThumbnails;
    
        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)
        let theThumbnailTags = document.querySelectorAll('.thumbHaus > a');

        for (let i = 0; i < theThumbnailTags.length; i++) {
            theThumbnailTags[i].addEventListener('click',function(e){
                //get href of the A(this is the big image)
                e.preventDefault
                //get the href of the A(big image url)
                
                let TheBigImageURL  = this.getAttribute('href');

                //get the alt of the image tag
                let theAlt = this.querySelector('.photoThumb').getAttribute('alt');

                //set the big image alt and src

                document.querySelector('.photoLarge').setAttribute('src',TheBigImageURL);

                document.querySelector('.photoLarge').setAttribute('alt',theAlt);




            });
            
        }

    // Empty the ideal for
    document.querySelector('.idealFor').innerHTML = " ";


    // Insert the ideal for
    let idealOwnerList ="";

    for (let index = 0; index < thePet.idealOwner.length; index++) {
      idealOwnerList+= '<li>'+ thePet.idealOwner[index] +'</li>';
    }
    document.querySelector('.idealFor').innerHTML = idealOwnerList;

    // Empty the Adoption Groups
    document.querySelector('.adoptionGroups').innerHTML = " ";

    // Add the adoption groups
    let adoptAPet = "";

    for (let i = 0; i < thePet.adoption.length; i++) {
        adoptAPet +="<li><a href='"+ thePet.adoption[i].url +"'> "+ thePet.adoption[i].name +" </a></li>";
        console.log(thePet.adoption[i])
    }
    document.querySelector('.adoptionGroups').innerHTML = adoptAPet;

// end selectPet

}

document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener("change",function(){
        //get the selected ped
        let selectedPet = document.querySelector('#petType').value;



        //call selectPet

        selectPet(selectedPet);

    });
});