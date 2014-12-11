function createTable(tableData) {
  var table = document.createElement('table')
    , tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

function Redirect()
            {
                window.location="/ValueInput.html";
            }


var matrixCase = 130

if (matrixCase == 130) {
    createTable([[1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1], [1,0,0,1,0,0,1,0,0,1,0,0,1], [1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1], [1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1], [1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1], [1,0,0,1,0,0,1,0,0,1,0,0,1]]);
} else if (matrixCase == 131) {
    createTable([[1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1], [1,0,0,1,0,0,1,0,0,1,0,0,1], [1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1], [1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1], [1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1], [1,0,0,1,0,0,1,0,0,1,0,0,1]]);
}

setTimeout('Redirect()', 5000);