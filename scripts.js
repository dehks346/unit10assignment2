function navigate(destination) {
    window.location.href = destination;
}

function showDetails(item) {
    alert('Showing details for ' + item);
}

function scrollUp() {
    document.getElementById('banks-list').scrollTop -= 100;
}

function scrollDown() {
    document.getElementById('banks-list').scrollTop += 100;
}

function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        document.getElementById('search-results').innerHTML = `
            <p>Results for "${query}"</p>
            <ul>
                <li>Result 1</li>
                <li>Result 2</li>
            </ul>`;
    } else {
        document.getElementById('search-results').innerHTML = '<p>Please enter a search term</p>';
    }
}

function toggleLargeText() {
    document.body.classList.toggle('large-text');
}

function loadLanguage(language) {
    fetch(language + '.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('search-title').innerText = data.title;
            document.getElementById('search-input').placeholder = data.searchPlaceholder;
            document.querySelector('button[onclick="performSearch()"]').innerText = data.searchButton;
            document.querySelector('button[onclick="navigate(\'index.html\')"]').innerText = data.backButton;
        });
}
