const p1 = new Promise((resolve, reject)=>{
    resolve('promise resolve')
})

p1.then(function(result){
    console.log(result)
})

async function handlePromise(){
    const result = await p1
    console.log(result)
}

handlePromise()