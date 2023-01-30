// variables
let current_step = 1;

// constants
const html_source = document.getElementById('html-input');
const css_source = document.getElementById('css-input');
const output = document.getElementById('output');
const counter = document.getElementById('counter');
const tutorialSelect = document.getElementById('tutorial-select');
const style = document.createElement('style');
style.setAttribute('id', 'style-sheet');

const title = document.getElementById('step-header');
const content = document.getElementById('step-info');


const updateOutput = () => {
    var outputHTML =
        `<!DOCTYPE html><html>
        <head><style>${css_source.value}</style></head>
        <body>${html_source.value}</body>
        </html> `;
    document.getElementById('output').src = "data:text/html;charset=utf-8," + outputHTML;
};

const downloadFile = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' +
        encodeURIComponent(`<!DOCTYPE html><html>
        <head>
        <style>${css_source.value}</style>
        </head>
        <body>${html_source.value}</body>
        </html>`));
    element.setAttribute('download', "index.html");


    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}



const loadExample = () => {
    const item = tutorial[0].STEPS[current_step - 1];

    title.innerText = item.TITLE.trim();
    content.innerHTML = item.CONTENT.trim();

    if (!!item.HTML_CODE) {
        const html_trim = item.HTML_CODE.trim();
        html_source.value = html_trim;
    } else {
        html_source.value = "";
    }

    if (!!item.CSS_CODE) {
        const css_trim = item.CSS_CODE.trim();
        css_source.value = css_trim;
    } else {
        css_source.value = "";
    }

    updateOutput();
}

const reset = () => loadExample(false);

const next = () => {

    if (current_step < tutorial[0].STEPS.length) {
        current_step++;
        loadExample();
    }
    console.log(current_step);
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

const updateCounter = () => counter.innerText = `${current_step}/${tutorial[0].STEPS.length}`

const updateSelection = (list) => {
    tutorialSelect.innerHTML = "" + list.map(n => `<option value="${n}">${n}</option>`);
}

window.onload = () => {
    output.innerHTML = html_source.value;
    const params = new URLSearchParams(window.location.search);
    // current_example = parseInt(params.get('step'));


    updateSelection(tutorial.map(entry => entry.NAME));

    loadExample(true);
    updateCounter();
}
