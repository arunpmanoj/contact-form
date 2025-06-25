const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('input[placeholder="Name"]').value.trim();
    const phone = form.querySelector('input[placeholder="Phone Number"]').value.trim();
    const email = form.querySelector('input[placeholder="Email"]').value.trim();
    const subject = form.querySelector('input[placeholder="Subject"]').value.trim();
    const message = form.querySelector('textarea').value.trim();
    const namePattern = /^[A-Za-z\s]+$/;
    const phonePattern = /^[0-9+\-\s]{7,15}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const subjectPattern = /^.{3,}$/;
    const messagePattern = /^.{5,}$/;

    if (!namePattern.test(name)) {
        alert("Please enter a valid name (letters and spaces only).");
        return;
    }
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (digits, +, -, space allowed).");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!subjectPattern.test(subject)) {
        alert("Subject must be at least 3 characters.");
        return;
    }
    if (!messagePattern.test(message)) {
        alert("Message must be at least 5 characters.");
        return;
    }
     alert("Form successfully submitted");
        form.reset();
});
