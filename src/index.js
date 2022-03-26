console.log('사랑해');

const h1Element = document.querySelector('h1');  // 첫번째놈
const h1Elements = document.querySelectorAll('h1'); //모두

console.log('h1Elements:::::::', h1Elements);
h1Element.addEventListener('dblclick', function () {
    console.log('click해쏘!!!!!');
})
console.log('h1Element:::::', h1Element);


for (let i = 0; i < h1Elements.length; i++) {
    console.log(h1Elements[i]);
    h1Elements[i].addEventListener('dblclick', function () {
        console.log(i + h1Elements[i].innerHTML);
    });
}
