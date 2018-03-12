function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
$(document).ready(function(){
    $('.slider').bxSlider({
        pager: false,
        
    });
});
;(function(){
    
    // preloader 
    setTimeout(function(){
        let preloader = document.querySelector('.preloader')
        if (!preloader.classList.contains('done')){
            preloader.classList.add('done')
        };
    }, 1000);
    
    let menuBtn = document.querySelector('.menu-btn'),
        menu = document.querySelector('.header-nav');
    

    menuBtn.onclick = function(){
        menu.classList.toggle('active');
        menuBtn.classList.toggle('close')
    }
   
}())
