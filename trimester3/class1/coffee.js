function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
      if (drink === "coffee") {
        resolve("Order for Coffee Placed.");
      } else {
        reject("Order can not be Placed.");
      }
    });
  }
  
  function processOrder(orderPlaced) {
    return new Promise(function (resolve) {
      resolve(`${orderPlaced} and Served.`);
    });
  }
  // Promise chaining
  //   placeOrder("tea").then(function(orderPlaced){
  //       console.log(orderPlaced)
  //       return processOrder(orderPlaced)
  //   }).then(function(finalOrderStatus){
  //     console.log(finalOrderStatus)
  //   }).catch(function(error){
  //   console.log(error)
  //   })
  
  // async Await
  
  async function serverOrder() {
    try {
      let orderPlaced = await placeOrder("coffee");
      console.log(orderPlaced);
  
      let finalOrderStatus = await processOrder(orderPlaced);
      console.log(finalOrderStatus);
    } catch (error) {
      console.log(error);
    }
  }
  serverOrder();