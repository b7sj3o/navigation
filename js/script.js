// BACKGROUND IMAGE FOR BLURING EFFECT ON HOVER

const itemsImgWrapper = document.querySelectorAll('.links__group-item-img');
const itemsWrapper = document.querySelectorAll('.links__group-item');
var style = document.createElement('style');

itemsImgWrapper.forEach((imgWrapper, index) => {
    const imgSrc = imgWrapper.children[0].src
    const newClass = `image_${index+1}`

    itemsWrapper[index].classList.add(newClass)

    style.innerHTML += `
    .${newClass}:hover .links__group-item-img::before {
        background-image: url(${imgSrc});
    }
`;
})


document.head.appendChild(style);


// TARGET BLANK TO ALL LINKS

var links = document.querySelectorAll('a');
links.forEach(function(link) {
    link.setAttribute('target', '_blank');
});
