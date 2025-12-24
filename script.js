document.addEventListener('DOMContentLoaded', function () {
    const whatsappIcon = document.getElementById('whatsappIcon');
    const phoneDisplay = document.getElementById('phoneDisplay');
    const linkedinLink = document.getElementById('linkedinLink') || document.querySelector('.social-link[href*="linkedin"]');
    const githubLink = document.getElementById('githubLink') || document.querySelector('.social-link[href*="github"]');
    const emailLink = document.querySelector('.email-link');

    const pinkColor = '#e83e8c';

    if (whatsappIcon && phoneDisplay) {
        whatsappIcon.style.cursor = 'pointer';
        whatsappIcon.addEventListener('click', function () {
            phoneDisplay.classList.toggle('hidden');
            whatsappIcon.style.filter = phoneDisplay.classList.contains('hidden') ? '' : 'hue-rotate(180deg) saturate(1.5)';
        });
    }

    if (linkedinLink) {
        linkedinLink.addEventListener('click', function (e) {
            e.preventDefault();
            linkedinLink.style.color = pinkColor;
            window.open(linkedinLink.href, '_blank');
        });
    }

    if (githubLink) {
        githubLink.addEventListener('click', function (e) {
            e.preventDefault();
            githubLink.style.color = pinkColor;
            window.open(githubLink.href, '_blank');
        });
    }

    if (emailLink) {
        emailLink.addEventListener('click', function (e) {
            e.preventDefault();
            emailLink.style.color = pinkColor;
            window.location.href = 'mailto:' + emailLink.innerText.trim();
        });
    }

    // Attach toggle behavior to each project header ('.project h3').
    const projectHeaders = document.querySelectorAll('.project h3');
    projectHeaders.forEach(header => {
        const project = header.parentElement;
        if (!project) return;
        header.style.cursor = 'pointer';
        // Ensure non-header children have a deterministic display value (don't override explicit "none").
        Array.from(project.children).forEach(child => {
            if (child === header) return;
            if (!child.style.display) child.style.display = '';
        });
        header.addEventListener('click', function () {
            Array.from(project.children).forEach(child => {
                if (child === header) return;
                child.style.display = (child.style.display === 'none') ? '' : 'none';
            });
        });
    });
});

window.addEventListener('load', function() {
    var music = document.getElementById("bgMusic");
    if (!music) return;
    music.volume = 0.2;
    var playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.catch(function() {
        });
    }
});