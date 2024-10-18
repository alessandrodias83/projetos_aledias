const dropbox = document.getElementsByClassName('contentBx');

for (i = 0; i < dropbox.length; i++) {
    dropbox[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}