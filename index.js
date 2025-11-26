const test = document.getElementById("hello");
const btn = document.getElementById("btn")

const sum = (f1, f2) => {
  const total = f1 + f2;
  return total;
};
setTimeout(() => {
  test.innerHTML = sum(5, 8);
  test.style.backgroundColor = "red";
  test.style.color = "white";
  test.style.padding = "10px";
  test.style.textAlign = "end";
}, 5000);

test.addEventListener("click", () => {
  test.innerHTML = "Welcome to JS World";
  test.style.backgroundColor = "green";
  test.style.color = "white";
  test.style.padding = "10px";
  test.style.textAlign = "center";
});

btn.addEventListener('click',()=>{
  test.innerHTML = "Welcome to JS World My World";
  test.style.backgroundColor = "grey";
  test.style.color = "blue";
  test.style.padding = "15px";
  test.style.textAlign = "center";
})

const change = ()=>{
    btn.style.fontSize ='30px'
    btn.style.color ='white'
    btn.style.backgroundColor ='orange'
    btn.style.padding ='20px'
    btn.style.borderRadius ='10px'
    btn.innerHTML ='Adjust'
    btn.style.margin = "30px"
    btn.style.width = "200px"
    btn.style.cursor = "pointer"
    btn.style.fontWeight = "bold"
}

setTimeout(()=>{
    sum(6,9) == 15 ? change() : alert("No")
},10000)
