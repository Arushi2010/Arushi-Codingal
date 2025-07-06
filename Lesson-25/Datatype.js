// 1) Let and const are block-scoped.
// 2)var allows us to redeclare and reassing a variable.
// 3)let allows us to reassing a variable but redeclaire is not allowed.
// 4) const will not allow us to redeclare  and reassing a variable.

if (true) {
    var a = 10
    var a = 11
    a = 12
    console.log("Inside if condition", a)
}
console.log("Outside if condition", a)