tabs = document.getElementsByClassName("tab")
buttons = document.getElementsByTagName("button")
img = document.getElementById("img")

imgs = [
    "technology/image-space-capsule-portrait.jpg",
    "technology/image-launch-vehicle-portrait.jpg", 
    "technology/image-spaceport-portrait.jpg"
]

imgsPortrait = [
    "technology/image-launch-vehicle-portrait.jpg", 
    "technology/image-space-capsule-portrait.jpg",
    "technology/image-spaceport-portrait.jpg"
]

imgsLandScape = [
    "technology/image-launch-vehicle-landscape.jpg",
    "technology/image-space-capsule-landscape.jpg",
    "technology/image-spaceport-landscape.jpg"
]

if(document.body.clientWidth > 1164) {
    img.src = "technology/image-launch-vehicle-portrait.jpg"
}

    Array.prototype.forEach.call(buttons, button => {  
        window.onresize = _ => {
            indexOfItem = Array.prototype.indexOf.call(buttons, button)
            if(document.body.clientWidth > 1164) {
                img.src = imgsPortrait[indexOfItem]
            }
            else {
                img.src = imgsLandScape[indexOfItem]
            }
        }    


    button.onclick = _ => { 
        indexOfItem = Array.prototype.indexOf.call(buttons, button)
        img.src = imgsLandScape[indexOfItem]
        if(document.body.clientWidth > 1164) {
            img.src = imgsPortrait[indexOfItem]
        }

        Array.prototype.forEach.call(tabs, tab => {          
            tab.style.display = "none";
            tabs[indexOfItem].style.display = "block"
        })
    }
})

// function media() {
    
// }