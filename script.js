// script.js
function copyToClipboard(elementId) {
    const codeElement = document.getElementById(elementId);
    const code = codeElement.innerText || codeElement.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy code: ', err);
    });
}
