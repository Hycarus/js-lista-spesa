const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');
let msg;
let shoppingList = [];
console.log(shoppingList);
let stop = false;
while(!stop){
    let product = prompt('Cosa mettiamo nella lista della spesa?');
    if(product === 'stop'){
        stop = true;
    } else{
        shoppingList.push(product);
    }
};

for(let i = 0; i < shoppingList.length; i++){
    resultEl.innerHTML = shoppingList;
    resultEl.classList.remove('d-none');
}