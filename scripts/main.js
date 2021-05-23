class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function setData() {
  const data = localStorage.getItem("data");
  if (data == null) {
    localStorage.setItem("data", "[]");
  }
}

function clearForm() {
  const form = document.querySelector("#form");
  form.querySelector("#title").value = "";
  form.querySelector("#author").value = "";
  form.querySelector("#pages").value = "";
}

function msg(message) {
  document.getElementById("msg").style.display = "block";
  document.getElementById("sayMsg").innerHTML = message;
  setTimeout(function () {
    document.getElementById("msg").style.display = "none";
  }, 2500);
}

function getFormData() {
  setData();
  const form = document.querySelector("#form");
  const title = form.querySelector("#title").value;
  const author = form.querySelector("#author").value;
  const pages = form.querySelector("#pages").value;
  const readStatus = form.querySelector("#read").value;
  const book = new Book(title, author, pages, readStatus);
  clearForm();
  msg("book created succesfully.");
  return book;
}

function saveBook() {
  const formData = getFormData();
  const getdata = JSON.parse(localStorage.getItem("data"));
  getdata.push(formData);
  localStorage.setItem("data", JSON.stringify(getdata));
}

function allBooks() {
  const listData = JSON.parse(localStorage.getItem("data"));
  const len = listData.length;
  for (let i = 0; i < len; i++) {
    const tr = document.createElement("tr");
    const addBook = document.getElementById("table_body");
    const td = `
              <td>${[i]}</td>
              <td>${listData[i].title}</td>
              <td>${listData[i].author}</td>
              <td>${listData[i].pages}</td>
              <td>${listData[i].read}</td>
              <td><button onclick="status(${[i]})" class="btn btn-sm btn-success">status</button></td>
              <td><button onclick="destroyBook(${[i]})" class="btn btn-sm btn-danger">delete</button></td>`;
    tr.innerHTML = td;
    addBook.appendChild(tr);
  }
}

function destroyBook(index) {
  const list = JSON.parse(localStorage.getItem("data"));
  list.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(list));
  document.location.reload();
}

function status(index) {
  const list = JSON.parse(localStorage.getItem("data"));
  if (list[index].read === "Not read yet") {
    list[index].read = "read it";
  } else {
    list[index].read = "Not read yet";
  }
  localStorage.setItem("data", JSON.stringify(list));
  document.location.reload();
}

const form = document.getElementById("form");
if (form != null) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    saveBook();
  });
}

const table = document.getElementById("table");
if (table != null) {
  allBooks();
}
