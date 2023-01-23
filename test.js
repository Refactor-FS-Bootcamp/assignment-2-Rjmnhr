let user=new Object();

user['name']="jhon";
user['surname']="Smith";
console.log(user);

user['name']="pete";
console.log(user);

delete user.name;
console.log(user);

console.log();

/*function isEmpty(Obj){
    if(Object.keys(Obj).length==0){
        return true;
    }
    else{
        return false;
    }
}*/
function isEmpty(Obj){

    for(let key in Obj){
        return false;
    }
        return true;
    }

 let schedule={};
console.log(isEmpty(schedule));

schedule['8:30']='wake up';
console.log(isEmpty(schedule));

console.log();


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
   }
   
   console.log(salaries);

  let sum=0;
  for(let key in salaries){
    sum+=salaries[key]
    console.log(salaries[key]);

  }
 
  
   
   
   console.log("Total sum of salaries= "+sum);

   console.log();


   let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multipyNumeric(Obj){
for(let key in Obj){
    if(typeof Obj[key]=='number'){
        Obj[key]*=2;
    }
}
  }
console.log(menu);
multipyNumeric(menu);
console.log(menu);
