function scrollToFAQ() {
    const section = document.getElementById('faq-section');
    window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
    });
};

function scrollToLearn() {
    const section = document.getElementById('learn-section');
    window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
    });
};

const loadButtons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(info => info.json())
        .then(data => showbuttons(data.data))
};

const showbuttons = (categories) => {
    const buttonContainer = document.getElementById('category-buttons');
    categories.forEach((category) => {

        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="loadCategories(${category.level_no})" class="btn text-[#422AD5] border-[#422AD5] hover:bg-[#422AD5] hover:text-white"><i class="fa-solid fa-book-open"></i>
         Lesson-${category.level_no}</button>
        `
        buttonContainer.appendChild(div);
    });
};

const lessonsDetails = (lessonId) => {
    fetch(`https://openapi.programming-hero.com/api/word/${lessonId}`)
        .then(info => info.json())
        .then(data => showLessonsDetails(data.data));
};

const showLessonsDetails = (lesson) => {
    console.log(lesson);
    document.getElementById('lesson_details').showModal();
    const detailsContainer = document.getElementById('details-container');

    document.getElementById('lesson-heading').innerText= `${lesson.word} ( ${lesson.pronunciation} )`;
    document.getElementById('lesson-p1').innerText= 'Meaning';
    document.getElementById('lesson-p2').innerText= lesson.meaning;
    document.getElementById('lesson-p3').innerText= 'Example';
    document.getElementById('lesson-p4').innerText= lesson.sentence;
    document.getElementById('lesson-p5').innerText= 'সমার্থক শব্দ গুলো';

    const buttons = lesson.synonyms;
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.innerHTML= ``;

    buttons.forEach((button)=>{
    const eachButton = document.createElement('button');
    eachButton.classList.add('btn', 'm-2');
    eachButton.innerText = `${button}`
    buttonContainer.append(eachButton);
    });
    


}

const setActiveButton = (clickedButton) => {
    const allButtons = document.querySelectorAll('#category-buttons button');

    // Remove active styles from all buttons
    allButtons.forEach(button => {
        button.classList.remove('bg-[#422AD5]', 'text-white');
        button.classList.add('text-[#422AD5]', 'border-[#422AD5]');
    });

    // Add active class to the clicked button
    clickedButton.classList.add('bg-[#422AD5]', 'text-white');
    clickedButton.classList.remove('text-[#422AD5]', 'border-[#422AD5]');
};




const loadCategories = (categoryName) => {
    fetch(`https://openapi.programming-hero.com/api/level/${categoryName}`)
        .then(info => info.json())
        .then(data => showCategories(data.data))
};


const showCategories = (lessons) => {

    const lessonContainer = document.getElementById('details-container');
    lessonContainer.innerHTML = ``;

    if (!lessons || lessons.length === 0) {
        lessonContainer.classList.remove('grid', 'grid-cols-3');
        lessonContainer.innerHTML = `
        <div class="flex justify-center items-center h-[300px]">
        <p class="text-center font-bold text-3xl">No Word Found!!!</p>
    </div>
        `;
        return;
    }

    lessons.forEach((lesson) => {
        lessonContainer.classList.add('grid', 'grid-cols-3', 'gap-4');
        const div = document.createElement('div');
        div.classList.add('rounded-md', 'p-10', 'shadow-md', 'bg-white', 'p-10', 'border','border-gray-300');
        div.innerHTML = `
        <div class="text-center space-y-10">
                    <p class="font-bold text-3xl">${lesson.word}</p>
                    <p class="font-medium text-3xl">Meaning /Pronounciation</p>
                    <p class="font-medium text-3xl">${lesson.meaning} / ${lesson.pronunciation}</p>
                  </div>
                  <div class="flex justify-around mt-20">
                   <button onclick="lessonsDetails(${lesson.id})" class="btn"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
                  </div>
        `
        lessonContainer.appendChild(div);

    })
};

const lessonDetails =





    loadButtons()