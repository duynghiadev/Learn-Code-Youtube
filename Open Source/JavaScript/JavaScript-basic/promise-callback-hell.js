/** promise ( Nối đau ):
 * Callback hell
 * Pyramid of Doom
 */

// Đây chính là nổi đau được gọi là callback hell :((
setTimeout(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
    setTimeout(function () {
      console.log(3);
      setTimeout(function () {
        console.log(4);
        setTimeout(function () {
          console.log(5);
          setTimeout(function () {
            console.log(6);
            setTimeout(function () {
              console.log(7);
              setTimeout(function () {
                console.log(8);
                setTimeout(function () {
                  console.log(9);
                  setTimeout(function () {
                    console.log(10);
                  }, 1000);
                }, 1000);
              }, 1000); 
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000); 
  }); 
});
