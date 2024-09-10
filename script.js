// script.js
function copyToClipboard(elementId) {
    const codeElement = document.getElementById(elementId);
    const code = codeElement.innerText || codeElement.textContent;

    navigator.clipboard.writeText(code)
        .then(() => alert('Code copied to clipboard!'))
        .catch(err => alert('Failed to copy code. Please try again.'));
}


//searchbar
// function searchPosts() {
//     const input = document.getElementById('searchInput');
//     const filter = input.value.toLowerCase();
//     const cards = document.getElementsByClassName('card');
//     let cardFound = false;
    
//     // Remove previous highlights
//     document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
    
//     // Iterate through each card
//     for (let card of cards) {
//         const header = card.getElementsByClassName('card-header')[0];
//         const body = card.getElementsByClassName('card-body')[0];
//         const headerText = header.textContent.toLowerCase();
//         const bodyText = body.textContent.toLowerCase();

//         // Check if either the header or body contains the search term
//         if (headerText.includes(filter) || bodyText.includes(filter)) {
//             card.classList.remove('hidden');
//             header.classList.add('highlight');
//             body.classList.add('highlight');
            
//             // Scroll to the first matched card
//             if (!cardFound) {
//                 card.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                 cardFound = true;
//             }
//         } else {
//             card.classList.add('hidden');
//         }
//     }
    
//     // If no cards are found, handle it as needed
//     if (!cardFound) {
//         alert('No matching cards found.');
//     }
// }


// function searchPosts() {
//     let input = document.getElementById('searchInput').value.toLowerCase();
//     let cards = document.querySelectorAll('.card');
//     let found = false;

//     cards.forEach(card => {
//         let title = card.querySelector('.card-header span').textContent.toLowerCase();
//         let bodyText = card.querySelector('.card-body p').textContent.toLowerCase();
        
//         if (title.includes(input) || bodyText.includes(input)) {
//             card.style.display = '';
//             if (!found) {
//                 card.scrollIntoView({ behavior: 'smooth', block: 'center' });
//                 found = true;
//             }
//         } else {
//             card.style.display = 'none';
//         }
//     });

//     if (!found) {
//         alert('No matching results found.');
//     }
// }


function searchPosts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    let found = false;

    // Remove previous highlights
    document.querySelectorAll('.highlight').forEach(el => {
        el.innerHTML = el.innerHTML.replace(/<\/?span class="highlight">/g, '');
        el.classList.remove('highlight');
    });

    cards.forEach(card => {
        let titleElement = card.querySelector('.card-header span');
        let bodyElement = card.querySelector('.card-body p');

        let title = titleElement.textContent.toLowerCase();
        let bodyText = bodyElement.textContent.toLowerCase();

        // Reset content
        titleElement.innerHTML = titleElement.textContent;
        bodyElement.innerHTML = bodyElement.textContent;

        // Highlight and show/hide cards
        if (title.includes(input) || bodyText.includes(input)) {
            card.style.display = '';
            found = true;

            // Highlight text in title
            if (title.includes(input)) {
                highlightText(titleElement, input);
            }

            // Highlight text in body
            if (bodyText.includes(input)) {
                highlightText(bodyElement, input);
            }

            // Scroll the first matching card into view
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            card.style.display = 'none';
        }
    });

    if (!found) {
        alert('No matching results found.');
    }
}

// Function to wrap matching text with a span to highlight
function highlightText(element, text) {
    let innerHTML = element.innerHTML;
    let index = innerHTML.toLowerCase().indexOf(text);

    if (index >= 0) {
        innerHTML = innerHTML.substring(0, index) +
            '<span class="highlight">' +
            innerHTML.substring(index, index + text.length) +
            '</span>' +
            innerHTML.substring(index + text.length);
        element.innerHTML = innerHTML;
    }
}
