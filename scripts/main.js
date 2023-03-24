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

function scrollToNextJobSection() {
  const csuiteSection = document.querySelector('.job-listing');
  csuiteSection.scrollIntoView({ behavior: 'smooth' });
}

function updateWorkExperienceFields() {
  const numCompanies = document.getElementById('num-companies').value;
  const workExperienceFields = document.getElementById('work-experience-fields');

  workExperienceFields.innerHTML = '';

  for (let i = 0; i < numCompanies; i++) {
    const companyField = `
      <h3>Company ${i + 1}</h3>
      <label for="company${i + 1}">Company:</label>
      <input type="text" id="company${i + 1}" name="company${i + 1}"><br>

      <label for="position${i + 1}">Position:</label>
      <input type="text" id="position${i + 1}" name="position${i + 1}"><br>

      <label for="duration${i + 1}">Duration:</label>
      <input type="text" id="duration${i + 1}" name="duration${i + 1}"><br>
    `;

    workExperienceFields.innerHTML += companyField;
  }
}

document.getElementById('num-companies').addEventListener('change', updateWorkExperienceFields);

document.getElementById('EngineerForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://clzwebserver.jklninjacowz.repl.co', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert('Email sent successfully!');
      } else {
        alert('An error occurred while sending the email');
      }
    }
  };
  document.getElementById("EngineerForm").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
  xhr.send(formData);
  startCountdown();
});

function startCountdown() {
  let countdown = document.getElementById("countdown");
  let timeLeft = parseInt(countdown.textContent);

  let timer = setInterval(function () {
    timeLeft--;
    countdown.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      window.location.href = "index.html";
    }
  }, 1000);
}

window.addEventListener('load', function () {
  document.body.style.opacity = 1;
});

feather.replace();