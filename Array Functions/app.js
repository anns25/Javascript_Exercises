let num_array = [];
const add_btn = document.getElementById("add-btn");
const input = document.getElementById("numberInput");
const arr_elem = document.getElementById("arr-elem");
const double_btn = document.getElementById("double-btn");
const even_btn = document.getElementById("even-btn");
const sum_btn = document.getElementById("sum-btn");
const pop_btn = document.getElementById("pop-btn");
const shift_btn = document.getElementById("shift-btn");
const rev_btn = document.getElementById("rev-btn");
const sort_btn = document.getElementById("sort-btn");
const clear_btn = document.getElementById("clear-btn");

arr_elem.innerHTML = "";

function display(){
        arr_elem.textContent = `${num_array.join()}`;
}

add_btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (input.value !== null) {
        num_array.push(Number(input.value));
        input.value = "";
    }
    display();

});

double_btn.addEventListener('click',()=>{
    num_array = num_array.map(n => n*2);
    display();
});

even_btn.addEventListener('click',()=>{
    num_array = num_array.filter(n=> n % 2 === 0);
    display();
});

sum_btn.addEventListener('click',()=>{
    const sum = num_array.reduce((sum, n)=> sum + n, 0);
    document.getElementById("sum_display").textContent = sum;
    display();
});

pop_btn.addEventListener('click',()=>{
    num_array.pop();
    display();
});

rev_btn.addEventListener('click',()=>{
    num_array = num_array.reverse();
    display();
});

clear_btn.addEventListener('click',()=>{
    num_array=[];
    display();
});

shift_btn.addEventListener('click',()=>{
    num_array.shift();
    display();
});

sort_btn.addEventListener('click',()=>{
    num_array.sort((a,b) => a -b);
    display();
});



display();
