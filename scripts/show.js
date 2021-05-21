list = JSON.parse(localStorage.getItem('data'));
function destroy_book(index){
    list.splice(index,1);
    localStorage.setItem('data',JSON.stringify(list))
    document.location.reload()
}

function status(index){
    
    if(list[index].read == 'Not read yet'){
        list[index].read = 'read it'
    }else{
        list[index].read = 'Not read yet';
    }
    localStorage.setItem('data',JSON.stringify(list))
    document.location.reload()
}


let len = list.length;
for (let i = 0; i < len; i++) {
    let tr = document.createElement('tr')
    let add_book = document.getElementById('table_body');
    const td = `
    <th scope="col">${[i]}</th>
    <th scope="col">${list[i].title}</th>
    <th scope="col">${list[i].author}</th>
    <th scope="col">${list[i].pages}</th>
    <th scope="col" onclick="status(${[i]})">${list[i].read}</th>
    <th scope="col"><button onclick="destroy_book(${[i]})" class="btn btn-danger id="delete">delete</button></th>
    `;

    tr.innerHTML = td;
    add_book.appendChild(tr)
}
