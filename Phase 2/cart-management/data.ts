let e:any = JSON.parse(sessionStorage.getItem("e") || "[]");

function storeData(itemName:string, price:number):void{
    let entry:any = {
      i: itemName,
      p: price,
    };
    e.push(entry);
    sessionStorage.setItem("e", JSON.stringify(e));
    document.getElementById("cart_size").innerHTML = e.length;
  }

  function showCartSize() {
      console.log(e.length);
      if(e.length == null) {
        document.getElementById("cart_size").innerHTML = "0";
      } else {
        document.getElementById("cart_size").innerHTML = e.length;
      }
  }
  
  function displayData() {
    let ent:any = JSON.parse(sessionStorage.getItem("e") || "[]");
    var total:number = 0;
    var tableContent:string = "";
    var startTable:string =
      "<table border=1><tr><th>Item Name</th><th>Price</th></tr>";
  
    ent.forEach((s:any) => {
      tableContent +=
        "<tr><td>" +
        s.i +
        "</td><td>" +
        "$" +
        s.p +
        "</td></tr>";
      total += parseInt(s.p);
    });
  
    var endTable:string = "</table>";
    tableContent = startTable + tableContent + endTable;
    document.getElementById("sheet").innerHTML = tableContent;
    document.getElementById("total").innerHTML = "$" + total;
  }
  