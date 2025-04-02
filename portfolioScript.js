// Add DOMContentLoaded so the DOM is loaded before running the script
// This way, the script source can live at the top of the file and also read
//      the full file before executing the script. This gives the script
//      the proper scope to perform its functions
document.addEventListener('DOMContentLoaded', function(){

    document.querySelectorAll('.github-link-contact-page, .email-link-contact-page, .github-link').forEach(link => {
        link.addEventListener('click', () => {
            link.style.color= 'purple';
        })
    })
});
