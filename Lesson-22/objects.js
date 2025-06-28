Phone = {
    Brand:"Apple",
    Color:"Black",
    Model:"Iphone16 pro max",

details:function(){
console.log(`Brand is ${this.Brand}, color is ${this.Color} and Model is ${this.Model}.`)
}
}
console.log("Brand name of my Phone is", Phone.Brand)
console.log("Color name of my Phone is", Phone.Color)
console.log("The Model ", Phone.Model)
Phone.details()