if (localStorage.getItem('data') == null) {
    localStorage.setItem('data', '[]');
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
let button = document.getElementById('submitform').onclick = function () {
    const bk = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').value
    )
    var add = JSON.parse(localStorage.getItem('data'));
    add.push(bk);
    localStorage.setItem('data', JSON.stringify(add));
    window.open('./show.html', '_blank')
}
