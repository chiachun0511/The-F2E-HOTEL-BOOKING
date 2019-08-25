$.ajax({
    method: 'get',
    url: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
    headers: {
      Authorization: 'Bearer k28GPnL6dwvbIis0JGy57qkaPNTChqVER7IlsXqXSzg6A68MJD0uElcAF0bV',
      accept: 'application/json'
    },
    success: (res) => {
      console.log(res);

      res.items.forEach(function (x) {
        document.getElementById('content').innerHTML +=
            '<div class="room">' +
            '<div class="info">' +
            '<img src="'+ x.imageUrl +'" class="roomphoto"/>'+
            '<div class="type"> ' + x.name + '</div>' + 
            '<div class="price"> ' + x.normalDayPrice + '</div>'+
            '</div>'+
            '</div>';

    });
    }
})


// res.items.forEach(function (x) {
//   document.getElementById('room').innerHTML +=
//       '<div>' + x.name + '</div>' +
//       '<div>' + x.normalDayPrice +  '</div>'+
//       '<div>' + x.holidayPrice + '</div>' ;

{/* <a href ="index2.html" div class="room"> 
<img src="bg.jpg" class="roomphoto">
<div class="info">
    <div class="type" id="type">Single</div>
    <div class="price" id="price">$1,380</div>
</div></a>    
</div> */}

