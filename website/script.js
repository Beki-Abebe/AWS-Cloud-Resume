
  // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });

      // Existing smooth scroll code...

      // Visitor counter functionality
      const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://xjjdobrbtui2vdcspj23jxa3du0qpjyd.lambda-url.af-south-1.on.aws/");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error('Error updating counter:', error);
        counter.innerHTML = 'Views: --';
    }
}

document.addEventListener('DOMContentLoaded', updateCounter);