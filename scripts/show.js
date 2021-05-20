list =JSON.parse(localStorage.getItem('data'));
let len = list.length;
for(let i = 0; i < len; i++){
    let tr = document.createElement('tr')
    let add_book = document.getElementById('table_body');
    const td = `
    <th scope="col">${list[i].title}</th>
    <th scope="col">${list[i].author}</th>
    <th scope="col">${list[i].pages}</th>
    <th scope="col">${list[i].read}</th>`;

    tr.innerHTML = td;
    add_book.appendChild(tr)
}
