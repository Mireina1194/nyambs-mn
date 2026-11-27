let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
      strings: ['Graphic Designer','Digital Marketing'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop:true,
    });

    const readMoreBtn = document.getElementById("read-more-btn");
const moreContent = document.getElementById("more-content");

readMoreBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        readMoreBtn.textContent = "Read Less";
    } else {
        moreContent.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }
});