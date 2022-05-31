const main = document.querySelector('#content');
const header = document.getElementById('header');
const menu_button = document.getElementById('js-menu-button');
var headerHeight = header.clientHeight;
// menu_button.addEventListener('click', ShowHeader);
menu_button.onclick = function () {
    var HeaderIsClose = header.clientHeight === headerHeight;
    if (HeaderIsClose) {
        header.style.height = 'auto';
    } 
    else {
        header.style.height = headerHeight + 'px';
    }
}
// Auto close header when click menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var menuItem of menuItems){
    // var isparentMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains("subnav");
    // if (!isparentMenu){
    // menuItem.addEventListener('click', ShowHeader);
    // }
    menuItem.onclick = function (event) {
        var isparentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
        if (!isparentMenu) {
            header.style.height = '46px'
        } else {
            header.style.height = 'auto'
        }
    }
}


const modal = document.querySelector('.js-modal')
const model_container = document.querySelector('.js-modal-container')
const close_modal = document.querySelector('.js-modal-close')
const buyBtns = document.querySelectorAll('.js-buy-ticket')

function showBuytickets() {
    modal.classList.add('open')
}
function closeBuytickets() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuytickets)
}

close_modal.addEventListener('click', closeBuytickets)
modal.addEventListener('click', closeBuytickets)

model_container.addEventListener('click', function (event) {
    event.stopPropagation()
})