// variables
let current_course;
let current_step = 1;
let html_source;
let css_source;

// constants
const html_editor = document.getElementById('html-input');
const css_editor = document.getElementById('css-input');
const output = document.getElementById('output');
const counter = document.getElementById('counter');
const tutorialSelect = document.getElementById('tutorial-select');
const style = document.createElement('style');
style.setAttribute('id', 'style-sheet');

const title = document.getElementById('step-header');
const content = document.getElementById('step-info');
const story = document.getElementById('story-info');


const updateOutput = () => {
    const outputHTML =
        `<!DOCTYPE html><html>
        <head><style>${css_source}</style></head>
        <body>${html_source.replace("$$placeholder$$", html_editor.value)}</body>
        </html>`.replace(/#/g, "%23");
    // # needs to be replaced or the output will break!

    document.getElementById('output').src = "data:text/html;charset=utf-8," + outputHTML;
};

const downloadFile = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' +
        encodeURIComponent(`<!DOCTYPE html><html>
        <head>
        <style>${css_source}</style>
        </head>
        <body>${html_source}</body>
        </html>`));
    element.setAttribute('download', "index.html");


    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

const changeCourse = () => {
    current_course = courses.find(c => (c["course"] === tutorialSelect.value));
    console.log(current_course)
    current_step = 1;
    updateCounter();
    loadExample(true);
    updateOutput();
}

const loadExample = () => {
    const chapter = current_course.chapters[current_step - 1];

    //    title.innerText = item.TITLE.trim();
    content.innerHTML = chapter.info.trim();
    story.innerHTML = chapter.story.trim();
    html_source = chapter.html_base;
    css_source = chapter.css_base;

    if (!!chapter.html) {
        html_editor.value = chapter.html.trim();
    } else {
        html_editor.value = "";
    }

    if (!!chapter.css) {
        css_editor.value = chapter.css.trim();
    } else {
        css_editor.value = "";
    }

    updateOutput();
}

const reset = () => loadExample(false);

const next = () => {

    if (current_step < current_course.chapters.length) {
        current_step++;
        loadExample();
    }
    updateCounter();


};
const back = () => {
    if (current_step - 1 > 0) {
        current_step--;
        loadExample();
    }
    console.log(current_step);
    updateCounter();

};

const updateCounter = () => counter.innerText = `${current_step}/${current_course.chapters.length}`

const updateSelection = (list) => {
    tutorialSelect.innerHTML = "" + list.map(n => `<option value="${n}">${n}</option>`);
}

window.onload = () => {
    output.innerHTML = html_editor.value;
    const params = new URLSearchParams(window.location.search);
    // current_example = parseInt(params.get('step'));

    current_course = courses[0];

    updateSelection(courses.map(entry => entry.course));

    loadExample();
    updateCounter();
    updateOutput();

    html_editor.focus();
}
