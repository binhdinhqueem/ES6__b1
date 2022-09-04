
let heading = document.querySelector(".heading").innerHTML;
let arr = [...heading];

let span = '';

for (var item of arr) {
    span += `
        <span>${item}</span>
    `;
  console.log(arr);
}
document.querySelector('.heading').innerHTML = span;

