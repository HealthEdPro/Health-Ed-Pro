function toggleMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    mobileNav.classList.toggle('show');
    if (mobileNav.classList.contains('show')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times'); // Change to close icon
    } else {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars'); // Change back to hamburger icon
    }
}

// Close the mobile menu when clicking outside of it
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburgerButton = document.querySelector('.menu-toggle');

    // Check if the click was outside the mobile nav and hamburger button
    if (!mobileNav.contains(event.target) && !hamburgerButton.contains(event.target)) {
        if (mobileNav.classList.contains('show')) {
            mobileNav.classList.remove('show');
            hamburgerButton.querySelector('i').classList.remove('fa-times');
            hamburgerButton.querySelector('i').classList.add('fa-bars'); // Change back to hamburger icon
        }
    }
});