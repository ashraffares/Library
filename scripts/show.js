const list = JSON.parse(localStorage.getItem('data'));
function destroy_book(index) {
  list.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(list));
  document.location.reload();
}

function status(index) {
  if (list[index].read == 'Not read yet') {
    list[index].read = 'read it';
  } else {
    list[index].read = 'Not read yet';
  }
  localStorage.setItem("data", JSON.stringify(list));
  document.location.reload();
}

let len = list.length;
for (let i = 0; i < len; i++) {
  const tr = document.createElement('tr');
  const add_book = document.getElementById("table_body");
  const td = `
    <td>${[i]}</td>
    <td>${list[i].title}</td>
    <td>${list[i].author}</td>
    <td>${list[i].pages}</td>
    <td>${list[i].read}</td>
    <td><button onclick="status(${[i]})" class="btn btn-sm btn-success">status</button></td>
    <td><button onclick="destroy_book(${[i]})" class="btn btn-sm btn-danger">delete</button></td>`;

  tr.innerHTML = td;
  add_book.appendChild(tr);
}
