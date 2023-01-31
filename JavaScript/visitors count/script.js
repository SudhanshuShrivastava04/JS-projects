const countE1 = document.getElementById("count");
countvisits();

function countvisits(){
    fetch('https://api.countapi.xyz/update/value?amount=1')
    .then((res) => res.json())
    .then((res) =>{
        countE1.innerHTML = res.value;
    });
}