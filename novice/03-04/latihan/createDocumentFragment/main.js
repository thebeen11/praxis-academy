var table = document.querySelector("table");
var df = document.createDocumentFragment();
 
for(var i=0; i<5; i++) {
  var td = document.createElement("td");
  var tr = document.createElement("tr");
  td.textContent = i;
  tr.appendChild(td)
  df.appendChild(tr);
}
 
table.appendChild(df);