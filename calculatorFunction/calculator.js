calculator(100).add(5).multiply(10).subtract(20).add(200).value()
function calculator(initialValue){
    return {
        ans : initialValue,
        add: function (a){
            this.ans += a
            return this
        },
        subtract: function(a){
            this.ans -= a
            return this
        },
        multiply: function(a){
            this.ans *= a
            return this
        },
        divide: function(a){
            this.ans /= a
            return this
        },
        value: function(){
            console.log(this.ans)
        }
    }
}