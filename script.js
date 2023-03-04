let heading = document.getElementById("heading")

let btn = document.getElementsByClassName("btn")

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click",()=>{
        heading.style.color = "white"
    })
}

let clear = document.getElementById("clear").addEventListener("click",()=>{
    heading.style.color = "gray"
})

let display = document.getElementById("display")
display.preventDefault = " "
