const myFunc = () => {
    let filter = document.getElementById('myInput').value.toUpperCase()
    let table = document.getElementById('table')
    let row = table.getElementsByTagName('tr')
    for (let i = 0; i < row.length; i++) {
        let td = row[i].getElementsByTagName('td')[0]
        let td2 = row[i].getElementsByTagName('td')[1]
        if (td) {
            let textContent = td.textContent || td.innerHTML;
            let textContent1 = td2.textContent || td2.innerHTML;
            if (textContent.toUpperCase().indexOf(filter) > -1 || textContent1.toUpperCase().indexOf(filter) > -1) {
                row[i].style.display = ""
            } else {
                row[i].style.display = "none"
            }
        }
    }
}


function highlightGraduates() {
    let table = document.getElementById('table');
    let rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        let status = rows[i].getElementsByTagName('td')[2].textContent;
        if (status === 'Graduated') {
            rows[i].style.backgroundColor = 'yellow';
        } else {
            rows[i].style.backgroundColor = '';
        }
    }
}

function highlightNonGraduates() {
    let table = document.getElementById('table');
    let rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        let status = rows[i].getElementsByTagName('td')[2].textContent;
        if (status === 'In Progress') {
            rows[i].style.backgroundColor = 'green';
        } else {
            rows[i].style.backgroundColor = '';
        }
    }
}