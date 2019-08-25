$.ajax({
    method: 'get',
    url: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
    headers: {
        Authorization: 'Bearer k28GPnL6dwvbIis0JGy57qkaPNTChqVER7IlsXqXSzg6A68MJD0uElcAF0bV',
        accept: 'application/json'
    },

    success: (res) => {
        console.log(res.items[0].name);
        console.log(res.items[0].normalDayPrice);
        console.log(res.items[1].imageUrl);
        console.log("--");
        // console.log(res);
        // res.items.forEach(function (x) {
        //     console.log(x.name);
        //     console.log(x.holidayPrice);
        //     console.log(x.imageUrl);
        //     console.log(x.normalDayPrice);
        //     console.log(x.holidayPrice);
        //   });


        res.items.forEach(function (x) {
            document.getElementById('info').innerHTML +=
                ' <li>' + x.name +' , '+ x.normalDayPrice +' , ' + x.holidayPrice + '</li> ';
        });

    },

})


// holidayPrice: 1500
// id: "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu"
// imageUrl: "https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
// name: "Single Room"
// normalDayPrice: 1380

// console.log(res);
// res.forEach(function (x) {
//     if (arr[x.name] === undefined) {
//       arr.push(x.name)
//     }
//   });

// roomname = [...new Set(arr)];
// roomname.forEach(function (x) {
//   document.getElementById('roomname').innerHTML +=
//     ' <li >'+ x +'</li> ';
// });