function PriorityQueue(){
    var collection =[];
    this.isEmpty=function(){
        return(collection.length===0); 
    }
    this.enqueue=function(element){
        if(collection.length ===0){
            collection.push(element);
        }
        else{
            var added =false;
            for(let i=0;i<collection.length;i++){
                if(element[1]>collection[i][1]){
                    collection.splice(i,0,element)
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
        }
    }
    this.dequeue= function(){
        collection.shift();
    }
    this.isPrint = function(){
        console.log(collection);
    }
}
var p = new PriorityQueue();
console.log(p.isEmpty());
p.enqueue(["yash",21])
p.enqueue(["preeti",21])
p.enqueue(["shradha",25])
p.enqueue(["akash",25])
p.enqueue(['yasha',17])
p.enqueue(["vaibhav",18])
console.log(p.isPrint());
p.dequeue()
p.dequeue()
console.log(p.isPrint());
