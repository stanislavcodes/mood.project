var sections = [];
function loopFn() {
    for (i = 0; i < 49; i++) {
        sections[i] = document.querySelector('.section-' + i).className;
         
    } 
    return sections;
}

function shuffleFn(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function addNewClasses(array) {
    for(i = 0; i < array.length; i++) {
        document.querySelector('.section-' + i).classList.remove('.section-' + i);
        //document.querySelector('.section-' + i).classList.add(sections[i]);
        document.querySelector('.section-' + i).setAttribute('class', sections[i]);
    }
}

document.querySelector('.header').addEventListener('click', function() {
    loopFn();
    shuffleFn(sections);
    addNewClasses(sections);
})