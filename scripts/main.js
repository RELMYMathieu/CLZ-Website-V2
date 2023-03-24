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

  window.addEventListener('load', function() {
    document.body.style.opacity = 1;
  });

window.addEventListener('load', function() {
    document.body.style.opacity = 1;
  });

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

  function sendForm(event) {
    event.preventDefault();
  
    const form = document.getElementById('EngineerForm');
    const formData = Object.fromEntries(new FormData(form).entries()); 
  
    fetch('https://clzwebserver.jklninjacowz.repl.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Email sent successfully!');
          form.style.display = 'none';
          document.getElementById('thankYouMessage').style.display = 'block';
          startCountdown();
        } else {
          alert('An error occurred while sending the email');
        }
      })
      .catch((error) => {
        console.error('Error sending form:', error);
        alert('An error occurred while sending the email');
      });
  }   

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

feather.replace()