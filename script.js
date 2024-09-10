// script.js
function copyToClipboard(elementId) {
    const codeElement = document.getElementById(elementId);
    const code = codeElement.innerText || codeElement.textContent;

    navigator.clipboard.writeText(code)
        .then(() => alert('Code copied to clipboard!'))
        .catch(err => alert('Failed to copy code. Please try again.'));
}


//searchbar
function searchPosts() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('card');
    let cardFound = false;
    
    // Remove previous highlights
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
    
    // Iterate through each card
    for (let card of cards) {
        const header = card.getElementsByClassName('card-header')[0];
        const body = card.getElementsByClassName('card-body')[0];
        const headerText = header.textContent.toLowerCase();
        const bodyText = body.textContent.toLowerCase();

        // Check if either the header or body contains the search term
        if (headerText.includes(filter) || bodyText.includes(filter)) {
            card.classList.remove('hidden');
            header.classList.add('highlight');
            body.classList.add('highlight');
            
            // Scroll to the first matched card
            if (!cardFound) {
                card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                cardFound = true;
            }
        } else {
            card.classList.add('hidden');
        }
    }
    
    // If no cards are found, handle it as needed
    if (!cardFound) {
        alert('No matching cards found.');
    }
}
