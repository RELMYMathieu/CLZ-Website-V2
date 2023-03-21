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

feather.replace()