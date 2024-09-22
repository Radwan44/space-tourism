openMenuIcon = document.getElementById("openMenuIcon")
closedIcon = document.getElementById("closedIcon")
nav = document.getElementById("nav")



// احتجت لهذا الكود لانه كود الonresize ما بيشتغل الا لما يصير تغيير بحجم الشاشة، اي ما رح احسن افتح القائمة او سكرها 
function funcNavVertical() {
    openMenuIcon.style.display = "none"
    nav.style.display = "flex"
}
function closeFuncVertical() {
    openMenuIcon.style.display = "block"
    nav.style.display = "none"
}

// اضطريت حط هالكود هون بال css لانه بالcss عبصرله تجاوز
if(document.body.clientWidth >= 1164) {
    nav.style.display = "flex"
}

openMenuIcon.onclick = _ => {
    funcNavVertical()
}
closedIcon.onclick = _ => {
    closeFuncVertical()
}

window.onresize = _ => {
    if(0 < document.body.clientWidth < 1164) {

        // style without click
        openMenuIcon.style.display = "block"
        nav.style.display = "none"

        openMenuIcon.onclick = _ => {
            funcNavVertical()
        }
        
        closedIcon.onclick = _ => {
            closeFuncVertical()
        }
    }
    if(document.body.clientWidth >= 1164) {
        openMenuIcon.style.display = "none"
        nav.style.display = "flex"
    }
}