// imgsUrls = [
//     'D:/Projects/by_me/space_tourism/crew/image-douglas-hurley.webp',
//     'D:/Projects/by_me/space_tourism/crew/image-mark-shuttleworth.webp',
// ]

// Array.prototype.forEach.call(buttonsControl, buttonControl => {
//     buttonControl.onclick = _ => {

        // // حذف السلايد الموجودة قبل ما اضغط كليك وجيب سلايد جديدة
        // Array.prototype.forEach.call(slidesTags, slideTag => {
        //     slideTag.style.display = "none"
        // })

//         indexOfSlide = Array.prototype.indexOf.call(buttonsControl, buttonControl)
//         slidesTags[indexOfSlide].style.display = "grid" 

//         Array.prototype.forEach.call(buttonsControl, buttonControl => {
//             buttonControl.style.backgroundColor = "#464950"
//         })
//         buttonControl.style.backgroundColor = "var(--secondary-color)" 
// }})


itemsNavList = document.querySelectorAll("#containerTabs nav span")
tabs = document.getElementsByClassName("tab")
imgPlanet = document.getElementById("imgPlanet")
numberOfDistance= document.getElementById("numberDistance")
numberTime = document.getElementById("numberTime")
imgs = [
    "destination/image-moon.webp",
    "destination/image-mars.webp",
    "destination/image-europa.webp",
    "destination/image-titan.webp"
]
const contentNumberElement = {
    moon: {
        distance: "384,400 km",
        time: "3 days " 
    },  
    mars: {
        distance: "225 mil. km",
        time: "9 months" 
    },
    europa: {
        distance: "628 mil. km",
        time: "3 years" 
    },
    titan: {
        distance: "1.6 bil. km",
        time: "7 years" 
    }
}

Array.prototype.forEach.call(itemsNavList, itemNavList => {

    itemNavList.onclick = _ => {

        indexOfItem = Array.prototype.indexOf.call(itemsNavList, itemNavList)

        Array.prototype.forEach.call(tabs, tab => {

        // حذف التاب الموجودة قبل ما اضغط كليك وجيب تاب جديدة
            tab.style.display = "none"

            // اضافة تاب جديدة
            tabs[indexOfItem].style.display = "block"
            imgPlanet.src = imgs[indexOfItem]


            currentItem = Object.values(contentNumberElement)[indexOfItem]

            numberOfDistance.textContent = currentItem.distance
            numberTime.textContent = currentItem.time



        })
    }
})


