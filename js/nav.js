const navigationItems = document.querySelectorAll(".navigation__item");
const navigationCheckbox = document.querySelector(".navigation__checkbox");

navigationItems.forEach((item) => {
    item.addEventListener("click", (e) => { navigationCheckbox.checked = false;}
)});

const popup = document.querySelector('#popup');

popup.addEventListener("click", (e) => {
    if(e.target.id == "popup"){
        console.log("working")
    }
});