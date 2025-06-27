document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.getElementById("subscribeForm");
    const successMessage = document.getElementById("successMessage");

    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const emailInput = document.getElementById("emailInput").value;

        // Here you can perform any validation checks before showing the success message

        // Assuming successful subscription
        successMessage.style.display = "block";
        subscribeForm.reset(); // Reset form fields
        setTimeout(function () {
            successMessage.style.display = "none";
        }, 3000); // Hide message after 3 seconds
    });
});

 function submitForm() {
            // Hide the form and display the thank you message
            document.getElementById('contactForm').style.display = 'none';
            document.getElementById('thankyou').style.display = 'block';
            // Prevent default form submission
            return false;}
   