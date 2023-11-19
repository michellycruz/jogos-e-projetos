class MobileNavbar{
    constructor(mobileMenu, nav){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.nav = document.querySelector(nav);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
}