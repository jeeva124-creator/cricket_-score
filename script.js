document.getElementById("addButton").addEventListener("click", function() {
            
    var name = document.getElementById("batsmanName").value;
    var runs = parseInt(document.getElementById("runsScored").value);
    var balls = parseInt(document.getElementById("ballsFaced").value);
   
    if (name && runs && balls && balls > 0) {
  
        var strikeRate = (runs * 100) / balls;
       
        var table = document.getElementById("batsmanTable").getElementsByTagName("tbody")[0];
    
        var row = table.insertRow();
        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = balls;
        row.insertCell(2).innerText = runs;
        row.insertCell(3).innerText = strikeRate.toFixed(2); 
       
        document.getElementById("batsmanName").value = "";
        document.getElementById("runsScored").value = "";
        document.getElementById("ballsFaced").value = "";
    } else {
        alert("Please give the value");
    }
});

document.getElementById("removeButton").addEventListener("click", function() {
    var table = document.getElementById("batsmanTable").getElementsByTagName("tbody")[0];
    var rowCount = table.rows.length;
   
    if (rowCount > 0) {
        table.deleteRow(rowCount - 1); 
    } else {
        alert("No rows to remove!");
    }
});

