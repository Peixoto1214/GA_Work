





document.addEventListener('DOMContentLoaded', function(event) {
  let truliaCards = document.querySelectorAll(".trulia-grid-item");
  console.log(typeof truliaCards)
// Toggle the navigation
document.querySelector('.trulia-nav-toggle').addEventListener('click',function(e){
  e.preventDefault();

  let navShow = document.querySelector('.navShow')
  navShow.classList.toggle('trulia-nav-mobilehide')
  console.log(navShow.classList)
})


// Loop through all the cards
//  truliaCards.forEach(houseCard=>{ 

//   houseCard.addEventListener('click',function(e){
//     e.preventDefault();
    
//     houseCard.classList.remove('trulia-grid-item')
//     houseCard.classList.add('trulia-featured-grid-item')
//     console.log(houseCard.classList)
//   })


//  })

for (let index = 0; index < truliaCards.length; index++) {
  const element = truliaCards[index];
  element.addEventListener('click', function(){
  
    for (let i = 0; i < truliaCards.length; i++) {
      const el = truliaCards[i];
      el.classList.remove('trulia-featured-grid-item')
    }
    this.classList.add('trulia-featured-grid-item')
})

}

 
    
  // Add a click listener on each card
      
      // Remove the featured class


      // Add the featured class on the one clicked on



});