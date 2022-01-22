const linksRef = document.querySelectorAll('.header-menu__item a');
const cardLinkRef = document.querySelector('.card-details__link-characteristics');

seamless.polyfill();

linksRef.forEach((element) => {
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

cardLinkRef.addEventListener('click', (e) => {
    e.preventDefault;
if(cardLinkRef) {
    seamless.elementScrollIntoView(cardLinkRef, {
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
