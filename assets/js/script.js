document.addEventListener('DOMContentLoaded', () => {
    let newsletterInput = document.querySelector('.fuhadShiblu_newsletterInput');
    let newsletterBtn = document.querySelector('.fuhadShiblu_newsletterBtn');
    let newsletterErrMsg = document.querySelector('.fuhadShiblu_newsletterErrMsg');

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    newsletterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let email = newsletterInput.value.trim();

        if (email === '' || !isValidEmail(email)) {
            newsletterErrMsg.textContent = 'Please Enter Valid E-Mail Address';
            newsletterErrMsg.style = 'color:red;font-weight:500'
            newsletterErrMsg.classList.add('error');
            newsletterErrMsg.classList.remove('success');
        } else {
            newsletterErrMsg.textContent = `Congratulations! You're ready to rock`;
            newsletterErrMsg.style = 'color:green;font-weight:500'
            newsletterErrMsg.classList.add('success');
            newsletterErrMsg.classList.remove('error');
        }
    });
});