const p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('promise 2 resolve')
    }, 7000);
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('promise 3 resolve')
    }, 5000);
})

async function handlePromise(){
    console.log('start')
    const result2 = await p2
    console.log(result2)
    const result3 = await p3
    console.log(result3)
    console.log('end')
}

handlePromise()
