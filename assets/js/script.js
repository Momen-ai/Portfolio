// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                const link = document.querySelector('.navbar-nav a[href*=' + id + ']');
                if (link) link.classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    // back to top button visibility
    let backToTop = document.querySelector('.footer-iconTop a');
    if (backToTop) {
        backToTop.style.display = window.scrollY > 300 ? 'inline-flex' : 'none';
    }

    // Bootstrap collapse auto close on click
    let navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    }
}

// Contact Form Submission (Mock)
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const form = this;
    const submitBtn = form.querySelector('button[type="submit"]');
    const alertContainer = document.getElementById('formAlert');
    const originalBtnText = submitBtn.innerHTML;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    // Simulate API call
    setTimeout(() => {
        alertContainer.innerHTML = `
            <div class="alert alert-info alert-dismissible fade show mb-4" role="alert">
                Message sent successfully! (This is a static demo)
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    }, 1500);
});
