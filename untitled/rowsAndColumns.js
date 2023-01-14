document.body.style.cssText = `margin: 0; padding: 0; width: 100vw; height: 100vh; display: flex; flex-flow: column; 
    align-items: center; justify-content: center; line-height: 1;`;

const rows = createDOMElement('div', 6, 'class', 'row', 'body');
rows.forEach((row, i) => {
    row.innerText = `Rad ${i + 1}`;
    row.style.cssText = `background-color: hsl(${80 + ((i + 1) * 25)}, 80%, 85%, 1); color: hsl(240, 90%, 70%); 
    font: bolder ${(i + 1) * 9}px Times New Roman; margin-top: ${(i * 0.6 + 1)}vh; text-align: center; width: 45vw`
});
rows[5].innerHTML = '';
rows[5].style.cssText = `display: flex; flex-flow: row; align-items: center; border: 1.3px solid black; height: 33vh; 
background-color: ; justify-content: space-around; margin-top: 5vh; width: 45vw`;
rows[5].setAttribute('class', 'last-row');

const columns = createDOMElement('div', 3, 'id', 'column', '.last-row');
columns.forEach(column => column.style.cssText = 'display: flex; flex-flow: column; height: fit-content; width: 4.5vh; border: 8px solid #a8a8f0;');
for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
    const numDivList = createDOMElement("div", 10, 'class', 'numbers', '#column-' + columnIndex);
    const sweStringNum = ['noll', 'ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio'];
    numDivList.forEach((div, divIndex) => {
        div.innerText = columnIndex === 0 ? divIndex : columnIndex === 1 ? (numDivList.length - 1) - divIndex : sweStringNum[divIndex];
        (divIndex % 2 === 0 && columnIndex !== 1) || (divIndex % 2 !== 0 && columnIndex === 1) ?
            `${div.style.cssText = 'background-color: black; color: white; font: 1.7vh Times New Roman;'}` : '';
        div.style.textAlign = columnIndex === 1 ? 'center' : columnIndex === 2 ? 'right' : '';
        ((columnIndex === 0 && divIndex === 4) || (columnIndex === 1 && divIndex === 1) || (columnIndex === 2 && divIndex === 6)) ?
            `${div.style.backgroundColor = '#a8a8f0'}` : '';
    })
}
function createDOMElement(type, amount, selectorType, selectorName, DOMInsertionPoint) {
    const elements = []
    for (let i = 0; i < amount; i++) {
        const element = document.createElement(type);
        element.setAttribute(selectorType, selectorName + `${selectorType === 'id' ? '-' + i : ""}`);
        document.querySelector(DOMInsertionPoint).appendChild(element);
        elements.push(element)
    }
    return elements
}