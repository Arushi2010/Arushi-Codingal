function sum(a, b, c){
    console.log(a + b)
    c()
}   

function example(){
    console.log("HI Its me Arushi!!")
}


sum(10, 30, example)