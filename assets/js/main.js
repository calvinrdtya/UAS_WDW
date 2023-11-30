
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		} else {
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}

// let mybutton = document.getElementById("btn-top");

// window.onscroll = function() {
//     toggleButtonVisibility();
// };

// function toggleButtonVisibility() {
//     if (window.scrollY > 30) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }

// function topFunction() {
//     document.body.style.scrollBehavior = "smooth";
//     document.documentElement.style.scrollBehavior = "smooth";

//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
//     mybutton.addEventListener('transitionend', function() {
//         document.body.style.scrollBehavior = "auto";
//         document.documentElement.style.scrollBehavior = "auto";
//         mybutton.removeEventListener('transitionend', arguments.callee);
//     });
// }
