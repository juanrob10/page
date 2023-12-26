/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
  
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
         
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*================CHANGE THE ACTIVATE LINK  WHEN YOU SCROLL===================*/

function activateLink (){
  
    const sections =  document.getElementsByClassName("section"),
    sections_array = Array.from(sections)

    sections_array.forEach((section)=>{
  
        const  scroll_top = this.scrollY,
        section_height = section.offsetHeight,
        section_top =  section.offsetTop - 72,
        get_element = document.querySelectorAll(`[href="#${section.id}"]`)[0];

        if( scroll_top >= section_top &&  scroll_top <= section_top + section_height) {        
                 get_element.classList.add("active-link") 
                } else {
                get_element.classList.remove("active-link")    
        }

    })
}
window.addEventListener("scroll", activateLink)


/*=============FORM=================*/

    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
    let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);
    });







