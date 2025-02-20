//getting elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//Contacting
document.querySelector('#contact-form').addEventListener("submit", async function (e){
    e.preventDefault(); // prevent default form submission

    const formData = {
        name: this.name.value,
        email: this.email.value,
        subject: this.subject.value,
        message: this.message.value,
        phone: this.phone ? this.phone.value : "N/A",
    };

    try{
        const response = await fetch("https://portfolio-backend-vjoa.onrender.com/send", { // Ensure the correct port
            method: "POST",
            headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
        })
        
        const result = await response.json();
        alert(result.message);
    }catch (error){
        console.error("Error:" , error);
        alert("Failed to send message. Please try again.")
    }
});
