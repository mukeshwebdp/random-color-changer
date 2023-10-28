let btn = document.getElementById("Colorbtn")
let randomColor = () => {
    let hexNumber = "1234567890ABCDEF"
    let cons = "#"
    for(let i = 0; i<6; i++){
        let colorMakeer = hexNumber[Math.floor(Math.random() * 16)]
        cons = cons + colorMakeer;
    }
    return cons
}
function eventColor (){
    document.body.style.backgroundColor = randomColor()
    let paragraph = document.createElement("p")
    paragraph.innerText = randomColor()
    document.body.append(paragraph)
    setTimeout(paragraphText, 3000)
}
function paragraphText (){
    let paragraphRemove = document.querySelector("p")
    paragraphRemove.remove()

}
btn.addEventListener("click", eventColor)