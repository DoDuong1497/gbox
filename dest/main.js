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




// BEGIN FORM RENTAL

let inputCompany = document.querySelectorAll(".rental-register__company input");
let textareaCompany = document.querySelector(".rental-register__company textarea");
let btnRental = document.querySelector(".rental-page .btn-book");
let notification = document.querySelectorAll(".rental-page .notification");
let notiTextarea = document.querySelector(".rental-register__company textarea ~ .notification");
let regex = /^[a-zA-Z\s]+$/;
let regexPhone = /(0[3|5|7|8|9])+([0-9]{8})\b/;
let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

inputCompany.forEach((element, index) => {
    btnRental.addEventListener("click", function (e) {
        e.preventDefault();

        let inputAttr = inputCompany[index].getAttribute("id");


        if(inputCompany[index].value !== ""){
            if(inputAttr == "email"){
                if (regexEmail.test(inputCompany[index].value)) {
                    notification[index].classList.add("hidden");
                }else{
                    notification[index].innerHTML = "Nhập sai dữ liệu!!!";
                }
            }else if(inputAttr == "phone"){
                if (regexPhone.test(inputCompany[index].value) && inputCompany[index].value.length < 11) {
                    notification[index].classList.add("hidden");
                }else{
                    notification[index].innerHTML = "Nhập sai dữ liệu!!!";
                }
            }else{
                if(regex.test(inputCompany[index].value)){
                    notification[index].classList.add("hidden");
                }else{
                    notification[index].innerHTML = "Nhập sai dữ liệu!!!";
                }
            }
        }else{
            notification[index].innerHTML = "Chưa nhập dữ liệu!!!";
            notification[index].classList.remove("hidden");
        }

        if (textareaCompany.value !== "" || regex.test(textareaCompany.value)) {
            notiTextarea.classList.add("hidden");
        }else{
            notiTextarea.innerHTML = "Chưa nhập dữ liệu!!!";
            notiTextarea.classList.remove("hidden");
        }
    })
})



let studioItem = document.querySelectorAll(".studio-select__item");
let studioSerial = document.querySelector(".rental-info__number .serial");

studioItem.forEach((element, index) => {
    element.addEventListener("click", function (e) {
        e.preventDefault();

        studioItem.forEach((elementSecon, indexSecon) => {
            elementSecon.classList.remove("active");
        });

        this.classList.add("active");
        studioSerial.innerHTML = this.textContent;
    })
});



//END FORM RENTAL







$(document).ready(function () {
    $('.studioBanner-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: true,
        wrapAround: true
    });

    var $carouselStudio = $('.studioBanner-carousel').flickity();

    $('.function-bar__item .prev').on( 'click', function() {
        $carouselStudio.flickity('previous');
    });
    
    $('.function-bar__item .next').on( 'click', function() {
        $carouselStudio.flickity('next');
    });

    $('.function-bar .fullscreen').on( 'click', function() {
        $carouselStudio.flickity('viewFullscreen');
    });

    $('.studioBanner-carousel__item .close').on( 'click', function() {
        $carouselStudio.flickity('exitFullscreen');
    });

    $('.project-detail__avatar').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: true,
        wrapAround: true
    });

    var $carouselProject = $('.project-detail__avatar').flickity();

    $('.function-bar .fullscreen').on( 'click', function() {
        $carouselProject.flickity('viewFullscreen');
    });

    $('.project-detail__avatar-item .close').on( 'click', function() {
        $carouselProject.flickity('exitFullscreen');
    });
});