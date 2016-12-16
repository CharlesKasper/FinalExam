class Password{
  //The first part of the class.
constructor(p,k){
this.publicKey=p
this.privatekey=k
}

  //Instance functions below this comment.
validPublicKey(){
if(this.publicKey.length >= 8 && this.publicKey.length<=25){
  return true;
  }
  else{
    return false;
  }
}
validPrivateKey(){
  if(this.privateKey.chat([4]&&[9]=="x")){
    return true;
  }
  else{
    return false;
  }
  if (this)
}
  //Static function below this comment.
makePrivateKey(){
  let key = [];
  let limit = 14;
  let group1 = "";
  let group2 = "";
  let group3 = "";
  for(c = 0; c < 4;c++){
    group1 += String(math.Ceil(math.random()*10));
    group2 += String(math.Ceil(math.random()*10));
    group3 += String(math.Ceil(math.random()*10));
    }
    return group1 + "- "group2 + "- "group3
  }
}
