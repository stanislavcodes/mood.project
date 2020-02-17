
var sections = [];
function loopFunction() {
    for (i = 0; i < 49; i++) {
        sections[i] = document.querySelector('.section-' + i).className;
         
    }
    console.log(sections);  
    return sections;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//loopFunction();
//shuffle(sections);


function addNewClasses(array) {
    for(i = 0; i < array.length; i++) {
        document.querySelector('.section-' + i).classList.remove('.section-' + i);
        //document.querySelector('.section-' + i).classList.add(sections[i]);
        document.querySelector('.section-' + i).setAttribute('class', sections[i]);
    }
}

document.querySelector('.header').addEventListener('click', function() {
    loopFunction();
    shuffle(sections);
    addNewClasses(sections);
})

