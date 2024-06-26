var mapsButton = document.getElementById('mapsButton');

mapsButton.addEventListener('click',redirect=()=>{
    window.location.href = 'maps.html';
})

var galleryButton = document.getElementById('galleryButton');

galleryButton.addEventListener('click',redirect=()=>{
    window.location.href = 'gallery.html';
})

var notesButton = document.getElementById('notesButton');

notesButton.addEventListener('click',redirect=()=>{
    window.location.href = 'notes.html';
})

var contactButton = document.getElementById('contactButton');

contactButton.addEventListener('click',redirect=()=>{
    window.location.href = 'contact.html';
})
