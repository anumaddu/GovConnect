// Telugu and English language switching
function setLanguage(language) {
    document.querySelectorAll("[data-en][data-te]").forEach(element => {
        element.textContent = element.getAttribute(
            language === "te" ? "data-te" : "data-en"
        );
    });

    // Change input placeholders
    document.querySelectorAll(
        "[data-en-placeholder][data-te-placeholder]"
    ).forEach(element => {
        element.placeholder = element.getAttribute(
            language === "te"
                ? "data-te-placeholder"
                : "data-en-placeholder"
        );
    });

    // Save selected language
    localStorage.setItem("govconnectLanguage", language);

    // Update page language
    document.documentElement.lang = language;
}

// Login form
function openLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

// Register form
function openRegister() {
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

// Close forms
function closeForms() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
}

// Load previously selected language
window.onload = function () {
    const savedLanguage = localStorage.getItem("govconnectLanguage") || "en";
    setLanguage(savedLanguage);
};
// Track Request Status
function trackRequest() {
    const requestId = document.getElementById("requestId").value.trim();
    const result = document.getElementById("trackResult");

    if (requestId === "") {
        result.textContent = "Please enter your Request ID.";
        return;
    }

    const requests = {
        "GC1001": "Pending",
        "GC1002": "Under Review",
        "GC1003": "Approved",
        "GC1004": "Rejected"
    };

    if (requests[requestId]) {
        result.textContent = "Your request status: " + requests[requestId];
    } else {
        result.textContent = "Request ID not found. Please check again.";
    }
}