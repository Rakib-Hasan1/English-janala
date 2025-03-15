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
        .then(data => showLessonsButton(data.data));
};

const showLessonsButton = (buttons) => {
    const buttonContainer = document.getElementById('category-buttons');
    buttonContainer.innerHTML = '';
    for (let button of buttons) {
        const createButton = document.createElement('button');
        createButton.innerHTML = `
        <button onclick="loadButtonData(${button.level_no})"
        class="btn text-[#422AD5] border-[#422AD5] hover:bg-[#422AD5] hover:text-white"
      >
        <i class="fa-solid fa-book-open"></i>
        Lesson - ${button.level_no}
      </button>
        `
        buttonContainer.appendChild(createButton);

    }
};

const loadButtonData = (details) => {
    fetch(`https://openapi.programming-hero.com/api/level/${details}`)
    .then(info=>info.json())
    // .then(data=>console.log(data.data))
    .then(data=>loadData(data.data));
};

const loadData = (sections) => {
    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML=``;
    detailsContainer.classList.add('grid', 'grid-cols-3', 'gap-4');
    for(let section of sections) {
        const div =document.createElement('div');
        div.classList.add('rounded-md', 'p-10', 'shadow-md', 'bg-white', 'p-10');

        div.innerHTML=`
                  <div class="text-center space-y-10">
                    <p class="font-bold text-3xl">${section.word}</p>
                    <p class="font-medium text-3xl">Meaning /Pronounciation</p>
                    <p class="font-medium text-3xl">${section.meaning} / ${section.pronunciation}</p>
                  </div>
                  <div class="flex justify-around mt-20">
                   <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
                  </div>
        `
        detailsContainer.appendChild(div);
    }
};









lessonButtons()

