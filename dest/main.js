// BEGIN HEADER

let btnMenuMb = document.querySelector(".btn-menu");
let headerMenu = document.querySelector(".header-menu");
let headerTop = document.querySelector(".header-top");


btnMenuMb.addEventListener("click", function (e) {
    e.preventDefault();

    this.classList.toggle("active");
    headerMenu.classList.toggle("active");
})


window.addEventListener("resize", function () {
    if(window.innerWidth > 576){
        btnMenuMb.classList.remove("active");
        headerMenu.classList.remove("active");
    }
})


window.addEventListener("scroll", function () {
    if(window.pageYOffset > 50){
        btnMenuMb.classList.add("fixed");
        headerTop.classList.add("fixed");
    }else{
        btnMenuMb.classList.remove("fixed");
        headerTop.classList.remove("fixed");
    }
})

// END HEADER



// BEGIN FOOTER

let backtotop = document.querySelector(".backtotop");

backtotop.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo(0, 0);
})

// END FOOTER





// BEGIN PROJECT

let btnTab = document.querySelectorAll(".project-tab li a");
let projectCard = document.querySelector(".project .card");
let projectItem = document.querySelectorAll(".project .card-item");


function addActive() {
    projectItem.forEach((itemProject) => {
        itemProject.classList.add("active");
    })
}

addActive();


btnTab.forEach((element, index) => {
    element.addEventListener("click", function (e) {
        e.preventDefault();

        btnTab.forEach((elementBtn) => {
            elementBtn.classList.remove("active");
        })

        this.classList.add("active");
        let textTab = btnTab[index].textContent;

        projectItem.forEach((itemProject) => {
            itemProject.classList.remove("active")
            if (textTab === itemProject.getAttribute("data-category")) {
                itemProject.classList.add("active");
            }else if(textTab === "all"){
                addActive();
            }
        })
    })
})

// END PROJECT




// BEGIN BACK TO ALL

let btnBackPage = document.querySelector(".backtoall");

function goBack() {
    window.history.back();
}

if(btnBackPage !== null){
    btnBackPage.addEventListener("click", function (e) {
        e.preventDefault();
    
        goBack();
    })
}

// END BACK TO ALL