alert("hello, i'm working");

document.addEventListener('DOMContentLoaded', () => {
    var loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        // loader.style.display = 'none';
    }, 3000);
    
})