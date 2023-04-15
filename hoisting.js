// // console.log(a);
// // let a=10;

// function abc(){
//     console.log(a,b,c);
//     const b=10;
//     let c=10;
//     var a=10;

// }
// abc();
let p= new Promise((resolve,err)=>{
    let x=5;
    if(x)
resolve("Hey its resolved");
else
err(":(");
})

p.then((message)=>{
    console.log("it is inside then", message);
}).catch((message)=>{
    console.log("inside catch,cant help", message);
})
    


