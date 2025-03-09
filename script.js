document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.nav__mobile-menu');
    const mobileMenu = document.querySelector('.nav__mobile');
    
    mobileMenuButton.addEventListener('click', function() {
        this.classList.toggle('nav__mobile-menu--active');
        mobileMenu.classList.toggle('active');
        const isExpanded = this.classList.contains('nav__mobile-menu--active');
        this.setAttribute('aria-expanded', isExpanded);
    });

    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuButton.classList.remove('nav__mobile-menu--active');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
    });
}); 