function copyToClipboard () {
    email = "bluerune9@gmail.com";
    copiedAlert = document.getElementById("alertCopied");
    navigator.clipboard.writeText(email);
    
    copiedAlert.classList.remove('fade-in-fade-out');

    window.requestAnimationFrame(function(time) {
        copiedAlert.classList.add('fade-in-fade-out');
      });
    

}