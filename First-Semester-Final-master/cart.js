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
for (a=0; a<i;a++){
var total= var total+ this.itemList[i].price*this.itemQuantity[q];
}
}
