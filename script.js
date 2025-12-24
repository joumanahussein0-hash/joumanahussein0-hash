document.addEventListener('DOMContentLoaded', function () {
    const whatsappIcon = document.getElementById('whatsappIcon');
    const phoneDisplay = document.getElementById('phoneDisplay');
    const linkedinLink = document.getElementById('linkedinLink');
    const githubLink = document.getElementById('githubLink');
    const emailLink = document.querySelector('.email-link');
    const playMusicBtn = document.getElementById('playMusicBtn');
    const bgMusic = document.getElementById('bgMusic');

    const pinkColor = '#e83e8c';
    const blueColor = '#3b5998';

    let isPlaying = false;

    playMusicBtn.addEventListener('click', function () {
        if (isPlaying) {
            bgMusic.pause();
            playMusicBtn.textContent = '🎵 Play Background Music';
            isPlaying = false;
        } else {
            bgMusic.play();
            playMusicBtn.textContent = '⏸️ Pause Background Music';
            isPlaying = true;
        }
    });

    whatsappIcon.addEventListener('click', function () {
        phoneDisplay.classList.remove('hidden');
        whatsappIcon.style.filter = 'hue-rotate(180deg) saturate(1.5)';
    });

    linkedinLink.addEventListener('click', function (e) {
        e.preventDefault();
        linkedinLink.style.color = pinkColor;
        window.open(linkedinLink.href, '_blank');
    });

    githubLink.addEventListener('click', function (e) {
        e.preventDefault();
        githubLink.style.color = pinkColor;
        window.open(githubLink.href, '_blank');
    });

    emailLink.addEventListener('click', function (e) {
        e.preventDefault();
        emailLink.style.color = pinkColor;
        window.location.href = 'mailto:' + emailLink.innerText;
    });

    const accordionButtons = document.querySelectorAll('.accordion-btn');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;
            content.classList.toggle('show');
        });
    });
});