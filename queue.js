function Queue(){
  var collection =[];
  this.isEmpty=function(){
      return(collection.length===0);
  }
  this.enqueue=function(element){
      collection.push(element);

  }
  this.dequeue  = function(){
      collection.shift();
  }
  this.print = function(){
      console.log(collection);
  }
}
var q =new Queue();
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print();
q.dequeue()
q.print()
console.log(q.isEmpty())