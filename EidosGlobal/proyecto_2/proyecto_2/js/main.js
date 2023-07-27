const btnSwitch = document.querySelector ('#switchOscuroBtn');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnSwitch.classList.toggle('active');
})

const headerHeight = document.getElementById("cabecera").offsetHeight;
const inicioLink = document.querySelector('a[href="#inicio"]');

inicioLink.addEventListener("click", function (event) {
    event.preventDefault();
    const targetElement = document.getElementById("inicio");
    const targetPosition = targetElement.getBoundingClientRect().top;
    const scrollTop = targetPosition + window.scrollY - headerHeight;
    window.scrollTo(0, scrollTop);
});

