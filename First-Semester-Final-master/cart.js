class Cart{
  //What is the first part of every class? Type it below
  constructor(l,q){
this.itemList=[];
this.itemQuantity=[];

}
  //Type the instance functions below this comment.
addItem(i,q)
this.itemList.unshift(i);
this.itemQuantity.unshift(q);
totalCart()
var total=0
