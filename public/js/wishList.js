

function addWistList(id) {
  // var heart = $(`#${id}-heart`);
  const hearts = document.getElementsByName(`${id}-heart`);
  var idUser = document.getElementById("userID");
  console.log(idUser.value);
  if (!idUser.value)
  {
    window.location.replace("/account/signin");
    return;
  }
  for (const heart of hearts)
  {
    console.log( heart);
    if (heart.style.color === "rgb(221, 221, 221)") heart.style.color="#D10024";
  else heart.style.color="#ddd";
  }
  // console.log(heart.css("color"));
  // if (heart.css("color") === "rgb(221, 221, 221)") heart.css("color", "#D10024");
  // else heart.css("color", "#ddd");
  
  var urlSend =
    "/account/addWishList?userid=" + idUser.value + "&idproduct=" + id;
  $.ajax({
    url: urlSend,
    type: "GET"
  }).done(function(result) {
    if (!result)
      window.location.replace("/account/signin");
  });
}
function addWistListAndLoadUrl(id) {
  const hearts = document.getElementsByName(`${id}-heart`);
  var idUser = document.getElementById("userID");
  console.log(idUser.value);
  if (!idUser.value)
  {
    window.location.replace("/account/signin");
    return;
  }
  for (const heart of hearts)
  {
    console.log( heart);
    if (heart.style.color === "rgb(221, 221, 221)") heart.style.color="#D10024";
  else heart.style.color="#ddd";
  }
  // console.log(heart.css("color"));
  // if (heart.css("color") === "rgb(221, 221, 221)") heart.css("color", "#D10024");
  // else heart.css("color", "#ddd");
  
  var urlSend =
    "/account/addWishList?userid=" + idUser.value + "&idproduct=" + id;
  $.ajax({
    url: urlSend,
    type: "GET"
  }).done(function(result) {
      window.location.replace(window.location.href);
  });
}

function addWistListClosing(id) {
  var heart = $(`#${id}-closingheart`);
  console.log(heart.css("color"));
  if (heart.css("color") === "rgb(221, 221, 221)")
    heart.css("color", "#D10024");
  else heart.css("color", "#ddd");
  var idUser = document.getElementById("userID");
  var urlSend =
    "/account/addWishList?userid=" + idUser.value + "&idproduct=" + id;
  $.ajax({
    url: urlSend,
    type: "GET"
  }).done(function(result) {
    console.log(result);
  });
}
function addWistListTurn(id) {
  var heart = $(`#${id}-turnheart`);
  console.log(heart.css("color"));
  if (heart.css("color") === "rgb(221, 221, 221)")
    heart.css("color", "#D10024");
  else heart.css("color", "#ddd");
  var idUser = document.getElementById("userID");
  var urlSend =
    "/account/addWishList?userid=" + idUser.value + "&idproduct=" + id;
  $.ajax({
    url: urlSend,
    type: "GET"
  }).done(function(result) {
    console.log(result);
  });
}
