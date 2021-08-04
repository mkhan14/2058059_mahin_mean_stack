function storeData() {
  var clientName = document.getElementById("cli").value;
  var projectName = document.getElementById("proj").value;
  var budget = document.getElementById("bud").value;

  let e = JSON.parse(localStorage.getItem("e") || "[]");

  let entry = {
    c: clientName,
    p: projectName,
    b: budget,
  };
  e.push(entry);
  localStorage.setItem("e", JSON.stringify(e));
}

function displayData() {
  let ent = JSON.parse(localStorage.getItem("e") || "[]");
  var total = 0;
  var tableContent = "";
  var startTable =
    "<table border=1><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>";

  ent.forEach((i) => {
    tableContent +=
      "<tr><td>" +
      i.c +
      "</td><td>" +
      i.p +
      "</td><td>" +
      "$" +
      i.b +
      "</td></tr>";
    total += parseInt(i.b);
  });

  var endTable = "</table>";
  tableContent = startTable + tableContent + endTable;
  document.getElementById("sheet").innerHTML = tableContent;
  document.getElementById("total").innerHTML = "$" + total;
}
