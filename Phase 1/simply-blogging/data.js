var IDCtr = 0;

function addData() {
  var title = document.getElementById("title").value;
  var article = document.getElementById("article").value;
  var pic = document.getElementById("pic").value;

  console.log(title);
  console.log(article);
  console.log(pic);

  var blogColumn = document.createElement("div");
  blogColumn.setAttribute("class", "col-sm-3 col-md-4 col-lg-4");
  blogColumn.setAttribute("id", IDCtr.toString());
  //   blogColumn.setAttribute("style", "border: black solid 1px;");
  var blogCard = document.createElement("div");
  blogCard.setAttribute("class", "card");
  blogCard.setAttribute("style", "margin-bottom:20px;border-radius:10px;");
  var blogCardBody = document.createElement("div");
  blogCardBody.setAttribute("class", "card-body");
  var titleTag = document.createElement("h4");
  titleTag.setAttribute("class", "card-title");
  titleTag.setAttribute("style", "text-align:center;");
  var articleTag = document.createElement("p");
  articleTag.setAttribute("class", "card-text");
  articleTag.setAttribute("style", "text-align:center;");
  var imgTag = document.createElement("img");
  imgTag.setAttribute("class", "card-img-bottom");
  imgTag.setAttribute("style", "border-radius:10px;");
  imgTag.src = pic;
  var titleContent = document.createTextNode(title);
  var articleContent = document.createTextNode(article);
  titleTag.appendChild(titleContent);
  articleTag.appendChild(articleContent);
  document.getElementById("blogPosts").appendChild(blogColumn);
  blogColumn.appendChild(blogCard);
  blogCard.appendChild(blogCardBody);
  blogCardBody.appendChild(titleTag);
  blogCardBody.appendChild(articleTag);
  blogCard.appendChild(imgTag);

  // alternate way i tried without cards
  //   var titlePTag = document.createElement("p");
  //   var articlePTag = document.createElement("p");
  //   var picTag = document.createElement("img");

  //   var titlePTagContent = document.createTextNode(title);
  //   var articlePTagContent = document.createTextNode(article);
  //   picTag.src = pic;
  //   picTag.setAttribute("width", "200px");
  //   picTag.setAttribute("height", "200px");

  //   titlePTag.appendChild(titlePTagContent);
  //   articlePTag.appendChild(articlePTagContent);
  //   titlePTag.setAttribute("class", "font-weight-bolder");
  //   titlePTag.setAttribute("style", "text-align:center;");
  //   articlePTag.setAttribute("class", "font-weight-normal");
  //   articlePTag.setAttribute("style", "text-align:center;");
  //   picTag.setAttribute("style", "text-align:center;");

  //   document.getElementById("blogPosts").appendChild(blogColumn);
  //   document.getElementById(IDCtr.toString()).appendChild(titlePTag);
  //   document.getElementById(IDCtr.toString()).appendChild(articlePTag);
  //   document.getElementById(IDCtr.toString()).appendChild(picTag);
  //   IDCtr++;
}
