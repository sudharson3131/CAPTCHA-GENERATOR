
//Create a radom number 

function Str_Random(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    // Loop to generate characters for the specified length
    for (let i = 0; i < length; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomInd);
    }
    return result;
}
// Function to display CAPTCHA in HTML

function generateCaptcha(){
    let captcha = document.getElementById("captcha-text")
    captcha.innerText = Str_Random(6)
}

// Validate the User's Input
function validateCaptcha() {
    const userInput = document.getElementById("captcha-input").value.trim().toUpperCase();;
    const captchaText = document.getElementById("captcha-text").innerText;
    const message = document.getElementById("captcha-message");

    if (userInput === captchaText) {
        // message.style.color = "green";
        // message.innerText = "Captcha Verified!"
        alert("✅ Captcha Verified!");
        setTimeout(function(){
            location.reload()
        }
    ,1000)

    } else {
        // message.style.color = "red";
        // message.innerText = "Captcha Incorrect. Try Again!";
        alert("❌ Captcha Incorrect. Try Again!");
        setTimeout(function(){
            location.reload()
        }
    ,1000)
    }
}

// Add event listeners after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    generateCaptcha(); // Generate CAPTCHA on page load
    
    document.getElementById("submit-btn").addEventListener("click", validateCaptcha);
    document.getElementById("refresh-btn").addEventListener("click", generateCaptcha);
});

