function scrollToNextSection(isRecentLaunch) {
    if (isRecentLaunch) {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    } else {
        document.querySelector('.recent-launch').scrollIntoView({ behavior: 'smooth' });
    }
}

window.addEventListener('load', function() {
    document.body.style.opacity = 1;
  });
  

feather.replace()