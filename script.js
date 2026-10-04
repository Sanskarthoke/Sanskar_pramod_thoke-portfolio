const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {

        const response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(formData)
        });

        const data = await response.json();

        responseMessage.textContent = data.message;

        form.reset();

    } catch (error) {

        responseMessage.textContent =
            "Unable to send message. Please try again.";

    }

});