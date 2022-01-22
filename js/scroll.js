const scrollFunc = () => {
    const linksRef = document.querySelectorAll('.header-menu__item a');
const cardLinkRef = document.querySelector('.card-details__link-characteristics');

const newArray = [...linksRef, cardLinkRef];
seamless.polyfill();

newArray.forEach((element) => {
element.addEventListener('click',(e) => {
e.preventDefault();

const id = element.getAttribute('href').substring(1);
const section = document.getElementById(id);

if(section) {
    seamless.elementScrollIntoView(section, {
        behavior: "smooth",
        block: 'start',
    })
} else {
    seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
        behavior: "smooth",
        block: "center",
        inline: "center",
    });
}
}) 
})
}

scrollFunc();