class Car{
    constructor(engine, price){
    this.engine = engine
    this.price = price
}

start(){
    console.log("The engine has started")
}
stop(){
    console.log("The car stopped")
}
details(){
    console.log(`the car has ${this.engine} engine, and the price of the car is ${this.price}`)
}
}

const ford=new Car("Petrol","40k$")
ford.details()
ford.start()
ford.stop()

const volvo=new Car("Diesel","45k$")
volvo.details()
volvo.start()
volvo.stop()