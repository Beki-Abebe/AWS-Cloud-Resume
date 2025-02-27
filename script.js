
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
      async function updateVisitorCount() {
        try {
          // Replace with your API Gateway URL
          const response = await fetch("YOUR_API_GATEWAY_URL", {
            method: "POST",
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          document.getElementById("visitor-count").textContent = data.count;
        } catch (error) {
          console.error("Error updating visitor count:", error);
        }
      }

      // Call the function when page loads
      document.addEventListener("DOMContentLoaded", updateVisitorCount);
      // Add this to your JavaScript
      async function updateVisitorCount() {
        const counterElement = document.getElementById("visitor-count");
        counterElement.textContent = "Loading...";

        try {
          const response = await fetch("YOUR_API_GATEWAY_URL", {
            method: "POST",
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          counterElement.textContent = data.count;
        } catch (error) {
          console.error("Error updating visitor count:", error);
          counterElement.textContent = "Error loading count";
        }
      }
    