class BookObj {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const Book = (() => {
  'user strict';

  const setData = () => {
    const data = localStorage.getItem('data');
    if (data == null) {
      localStorage.setItem('data', JSON.stringify([]));
    }
  };

  const clearForm = () => {
    const form = document.querySelector('#form');
    form.querySelector('#title').value = '';
    form.querySelector('#author').value = '';
    form.querySelector('#pages').value = '';
  };

  const msg = (message) => {
    document.getElementById('msg').style.display = 'block';
    document.getElementById('sayMsg').innerHTML = message;
    setTimeout(() => {
      document.getElementById('msg').style.display = 'none';
    }, 2500);
  };

  const getFormData = () => {
    setData();
    const form = document.querySelector('#form');
    const title = form.querySelector('#title').value;
    const author = form.querySelector('#author').value;
    const pages = form.querySelector('#pages').value;
    const readStatus = form.querySelector('#read').value;
    const book = new BookObj(title, author, pages, readStatus);
    clearForm();
    msg('book created succesfully.');
    return book;
  };

  const saveBook = () => {
    const formData = getFormData();
    const getdata = JSON.parse(localStorage.getItem('data'));
    getdata.push(formData);
    localStorage.setItem('data', JSON.stringify(getdata));
  };

  const allBooks = () => {
    const listData = JSON.parse(localStorage.getItem('data'));[{},{}]
    const len = listData.length;
    for (let i = 0; i < len; i += 1) {
      const tr = document.createElement('tr');
      const addBook = document.getElementById('table_body');
      const td = `
              <td>${[i]}</td>
              <td>${listData[i].title}</td>
              <td>${listData[i].author}</td>
              <td>${listData[i].pages}</td>
              <td>${listData[i].read}</td>
              <td><button onclick="Book.status(${[i]})" class="btn btn-sm btn-success">status</button></td>
              <td><button onclick="Book.destroyBook(${[i]})" class="btn btn-sm btn-danger">delete</button></td>`;
      tr.innerHTML = td;
      addBook.appendChild(tr);
    }
  };

  const destroyBook = (index) => {
    const list = JSON.parse(localStorage.getItem('data'));
    list.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(list));
    document.location.reload();
  };

  const status = (index) => {
    const list = JSON.parse(localStorage.getItem('data'));
    if (list[index].read === 'Not read yet') {
      list[index].read = 'read it';
    } else {
      list[index].read = 'Not read yet';
    }
    localStorage.setItem('data', JSON.stringify(list));
    document.location.reload();
  };

  return {
    saveBook,
    allBooks,
    destroyBook,
    status,
  };
})();

const form = document.getElementById('form');
if (form != null) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    Book.saveBook();
  });
}

const table = document.getElementById('table');
if (table != null) {
  Book.allBooks();
}
