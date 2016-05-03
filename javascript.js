password = document.getElementById('password');
feedback = document.getElementById('feedback');

password.addEventListener('input', function() {
  feedback.textContent = '';
  var hasNumber = /\d/;
  if (this.value && !hasNumber.test(this.value)) {
    this.setAttribute('aria-invalid', 'true');
    feedback.textContent = 'Error: password must contain at least one number';
  } else {
    if (this.value) {
      this.setAttribute('aria-invalid', 'false');
    } else {
      this.removeAttribute('aria-invalid');
    }
  }
});
