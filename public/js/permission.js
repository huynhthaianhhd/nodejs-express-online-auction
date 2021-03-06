

function checkSeller()
{
  var permission ;
  var request ;
  var idUser = document.getElementById("userID");
  if (!idUser.value)
  {
    window.location.replace("/account/signin");
    return;
  }

  $.ajax({
    url: "/bidding/check?userid="+idUser.value,
    type: "GET"
  }).done(function(result) {
      console.log(result);
      request = result.request;
      permission = result.permission;
      if (request=="1")
      {
        Swal.fire(
          'Info',
          'You sent request successfully. Please wait to confirm.',
          'info'
        )
          return;
      }
      if (permission==0)
      {
        Swal.fire({
          title: "No Permisson",
          text: `You must upgrade to seller to add product`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Upgrade now"
        }).then(result => {
          if (result.value) {
            var idUser = document.getElementById("userID");
            var urlSend = "/bidding/permission?userid=" + idUser.value;
            $.ajax({
              url: urlSend,
              type: "GET"
            }).done(function(result) {
              if (result === "Send Success") {
                  Swal.fire("Thành công!", "Bạn đã đăng kí chờ xác nhận", "success").then(result => {
                  window.location.replace(window.location.href);
                });
      
                //   Swal.fire("Thành công!", "Bạn đã đặt giá sản phẩm", "success");
              } else Swal.fire("Fail!", "Có người đặt giá cao hơn", "success");
            });
          }
        });
      }
      else {
        window.location.replace("/products/add");
      }
  });


 
}