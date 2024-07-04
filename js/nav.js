console.log("Navbar js loaded ")

let path_str = document.location.pathname


const paths = path_str.split("/")
console.log(paths[1].split(".")[0])

const navItem_about = document.getElementsByClassName("nav-active-about")
const navItem_products = document.getElementsByClassName("nav-active-products")
const navItem_contact = document.getElementsByClassName("nav-active-contact")



function toggleClass(elements, className, action) {
    for (let i = 0; i < elements.length; i++) {
        if (action === "add") {
            elements[i].classList.add(className);
        } else if (action === "remove") {
            elements[i].classList.remove(className);
        }
    }
}

if(paths[1].split(".")[0] === "about" || paths[1].split(".")[0] === "" || paths[1].split(".")[0] === "index"){

    toggleClass(navItem_about, "hidden","remove")
    toggleClass(navItem_products, "hidden","add")
    toggleClass(navItem_contact, "hidden","add")




}
if(paths[1].split(".")[0] === "contact"){

    toggleClass(navItem_about, "hidden","add")
    toggleClass(navItem_products, "hidden","add")
    toggleClass(navItem_contact, "hidden","remove")

}
if(paths[1].split(".")[0] === "products"){


    toggleClass(navItem_about, "hidden","add")
    toggleClass(navItem_products, "hidden","remove")
    toggleClass(navItem_contact, "hidden","add")

}





const hamburgerButtonOpen = document.getElementById("open-hamburger")
const hamburgerButtonClose = document.getElementById("close-hamburger")
const responsiveNavItmesList = document.getElementById("responsive-navItems-list")




hamburgerButtonOpen.addEventListener("click",()=>{
    responsiveNavItmesList.classList.remove("hidden")
    responsiveNavItmesList.classList.add("flex")
    responsiveNavItmesList.classList.add("z-50")




})
hamburgerButtonClose.addEventListener("click",()=>{
    responsiveNavItmesList.classList.remove("flex")
    responsiveNavItmesList.classList.add("hidden")
    responsiveNavItmesList.classList.remove("z-50")

})

let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.remove('visible-navbar');
        navbar.classList.add('hidden-navbar');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden-navbar');
        navbar.classList.add('visible-navbar');
    }

    lastScrollTop = scrollTop;
});