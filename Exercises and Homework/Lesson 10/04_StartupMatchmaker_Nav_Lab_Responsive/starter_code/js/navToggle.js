document.addEventListener('DOMContentLoaded', function(event) {

    // When I click on hamburger  icon
    document.querySelector(".nav-toggle").addEventListener('click', function(e){
        //prevent link from working
        e.preventDefault();
        //add or remove the mobile-hide class
        document.querySelector('.main-nav').classList.toggle('main-nav-mobilehide');
    });
});