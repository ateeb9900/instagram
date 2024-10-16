document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

   fetch('https://instagram-4ggo.onrender.com', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})

        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => alert('Form submitted successfully!'))
    .catch(error => alert('Error submitting form.'));
});
