const slides = [
    {
        name: "Museo 1",
        ch: "Museo 1 ",
        image: "museo.jpg",
        info: "lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem loremlorem lorem "
    },
    {
        name: "Museo 2",
        ch: "Museo 2",
        image: "museo2.jpg",
        info: "lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem "
    },

    {
        name: "Museo 3",
        ch: "Museo 3",
        image: "museo3.jpg",
        info: "lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem "
    },
];

const sliderContainer = document.querySelector(".slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentSlideIndex = 0;
const totalSlides = slides.length;

const displaySlides = () => {
    if (sliderContainer) {
        sliderContainer.style.opacity = 0;

        setTimeout(() => {
            const { name, ch, image, info } = slides[currentSlideIndex];

            // Uso correcto de template strings y cierre adecuado de etiquetas
            sliderContainer.innerHTML = `
                <div class="profile">
                    <img src="${image}" alt="${name}">
                    <h3>${name}</h3>
                    <h6>${ch}</h6>
                </div>
                <p>${info}</p>
            `;

            sliderContainer.style.opacity = 1;
        }, 300);
    }
};

nextBtn.addEventListener("click", ()=>{
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    displaySlides();
});


prevBtn.addEventListener("click", ()=>{
    currentSlideIndex = (currentSlideIndex - 1+totalSlides) % totalSlides;
    displaySlides();
});

window.onload = displaySlides;