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

function scrollToNextTeamSection() {
    const csuiteSection = document.querySelector('.csuite');
    csuiteSection.scrollIntoView({ behavior: 'smooth' });
  }

  window.addEventListener('load', function() {
    document.body.style.opacity = 1;
  });

window.addEventListener('load', function() {
    document.body.style.opacity = 1;
  });

feather.replace()