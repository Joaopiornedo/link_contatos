let m = document.querySelector("#m");
console.log(m.children[0])

if (window.innerHeight < 620) {
    m.style.width = "55%"
    m.children[0].firstElementChild.style.width = "25%"
    
}if (window.innerHeight < 490) {
    m.style.width = "55%"
    m.children[0].firstElementChild.style.width = "20%"
    m.children[0].style.gap = "0px"
    
}
