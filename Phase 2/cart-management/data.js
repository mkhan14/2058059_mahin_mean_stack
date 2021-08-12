var e = JSON.parse(sessionStorage.getItem("e") || "[]");
function storeData(itemName, price) {
    var entry = {
        i: itemName,
        p: price
    };
    e.push(entry);
    sessionStorage.setItem("e", JSON.stringify(e));
    document.getElementById("cart_size").innerHTML = e.length;
}
function showCartSize() {
    console.log(e.length);
    if (e.length == null) {
        document.getElementById("cart_size").innerHTML = "0";
    }
    else {
        document.getElementById("cart_size").innerHTML = e.length;
    }
}
function displayData() {
    var ent = JSON.parse(sessionStorage.getItem("e") || "[]");
    var total = 0;
    var tableContent = "";
    var startTable = "<table border=1><tr><th>Item Name</th><th>Price</th></tr>";
    ent.forEach(function (s) {
        tableContent +=
            "<tr><td>" +
                s.i +
                "</td><td>" +
                "$" +
                s.p +
                "</td></tr>";
        total += parseInt(s.p);
    });
    var endTable = "</table>";
    tableContent = startTable + tableContent + endTable;
    document.getElementById("sheet").innerHTML = tableContent;
    document.getElementById("total").innerHTML = "$" + total;
}
