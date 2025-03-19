// overloading func

class func{
    constructor()
    {
        this.result = 0;
    }

    sum(...args){
        if(args.length === 0)
        {
            console.log("no parameter");
        }else if(args.length === 1)
        {
            console.log("two parameter needed");
        }else
        {
            console.log("condition satisfied");
            this.result = 0

            for (let i = 0; i < args.length; i++){
                this.result += args[i]
        }
    }
}

   getResult()
   {
    console.log(this.result);
   }
}

const obj1 = new func()
obj1.sum()
obj1.getResult()

obj1.sum(1)
obj1.getResult()

obj1.sum(1,3,5)
obj1.getResult()

obj1.sum(1,2,4,5,6,7,8)
obj1.getResult()