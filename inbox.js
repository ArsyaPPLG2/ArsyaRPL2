// script.js
const inboxList = document.getElementById('inbox-list');
const composeBtn = document.getElementById('compose-btn');

// Data pesan sederhana
const messages = [
    { sender: 'John Doe', subject: 'Meeting Today', content: 'Hi, are we still on for the meeting today?' },
    { sender: 'Alice Smith', subject: 'Dinner Plans', content: 'Let\'s catch up for dinner tonight!' },
    { sender: 'Bob Johnson', subject: 'Project Update', content: 'Here is the latest project update.' },
];

// Fungsi untuk menampilkan pesan di kotak masuk
function displayMessages() {
    inboxList.innerHTML = '';
    messages.forEach(message => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>From:</strong> ${message.sender}<br>
            <strong>Subject:</strong> ${message.subject}<br>
            <p>${message.content}</p>
        `;
        inboxList.appendChild(li);
    });
}

// Menampilkan pesan saat halaman dimuat
displayMessages();

// Event listener untuk tombol "Tulis Pesan"
composeBtn.addEventListener('click', () => {
    // Di sini Anda dapat mengimplementasikan logika untuk membuat pesan baru.
    alert('Fungsi "Tulis Pesan" belum diimplementasikan.');
});
