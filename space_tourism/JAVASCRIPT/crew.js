
slideOne = document.getElementById("slideOne")
slideTwo = document.getElementById("slideTwo")
slideThree = document.getElementById("slideThree")
slideFour = document.getElementById("slideFour")
buttonsControl = document.querySelectorAll("#sliderControl button")
slidesTags = document.getElementsByClassName("slide")

imgsUrls = [
    'D:/Projects/by_me/space_tourism/crew/image-douglas-hurley.webp',
    'D:/Projects/by_me/space_tourism/crew/image-mark-shuttleworth.webp',
]

Array.prototype.forEach.call(buttonsControl, buttonControl => {
    buttonControl.onclick = _ => {

        // حذف السلايد الموجودة قبل ما اضغط كليك وجيب سلايد جديدة
        Array.prototype.forEach.call(slidesTags, slideTag => {
            slideTag.style.display = "none"
        })

        indexOfSlide = Array.prototype.indexOf.call(buttonsControl, buttonControl)
        slidesTags[indexOfSlide].style.display = "grid" 

        Array.prototype.forEach.call(buttonsControl, buttonControl => {
            buttonControl.style.backgroundColor = "#464950"
        })
        buttonControl.style.backgroundColor = "var(--secondary-color)" 
}})




