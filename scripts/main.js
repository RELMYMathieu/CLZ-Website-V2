function scrollToNextSection(isRecentLaunch) {
  if (isRecentLaunch) {
      document.querySelector('.recent-launch').scrollIntoView({ behavior: 'smooth' });
  } else {
      document.querySelector('.recent-launch:nth-of-type(2)').scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToNextTeamSection() {
  const currentScroll = window.scrollY;
  const sections = document.querySelectorAll('.csuite');

  for (const section of sections) {
    if (section.getBoundingClientRect().top + window.scrollY > currentScroll) {
      window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });
      break;
    }
  }
}

  function scrollToNextJobSection() {
    const csuiteSection = document.querySelector('.job-listing');
    csuiteSection.scrollIntoView({ behavior: 'smooth' });
  }

  window.addEventListener('load', function() {
    document.body.style.opacity = 1;
    feather.replace()
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
    const formId = form.getAttribute('data-form-id');
    const formData = Object.fromEntries(new FormData(form).entries());
    formData.formId = formId;
    const button = document.querySelector('.apply-button');
    button.disabled = true;

    
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
    })
    .finally(() => {
      button.disabled = false;
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