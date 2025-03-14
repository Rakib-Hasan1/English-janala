function scrollToFAQ() {
    const section = document.getElementById('faq-section');
    window.scrollTo({
        top: section.offsetTop - 120,
        behavior: 'smooth'
    });
};

function scrollToLearn() {
    const section = document.getElementById('learn-section');
    window.scrollTo({
        top: section.offsetTop - 120,
        behavior: 'smooth'
    });
};


const lessonButtons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(info => info.json())
        .then(data => showLessonsButton(data.data))
}

const showLessonsButton = (buttons) => {
    const buttonContainer = document.getElementById('category-buttons');
    for (let button of buttons) {
        const createButton = document.createElement('button');
        createButton.innerHTML = `
        <button
        class="btn text-[#422AD5] border-[#422AD5] hover:bg-[#422AD5] hover:text-white"
      >
        <i class="fa-solid fa-book-open"></i>
        Lesson - ${button.level_no}
      </button>
        `
        buttonContainer.appendChild(createButton);

    }
}








lessonButtons()

