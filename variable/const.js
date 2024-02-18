  const name="Narayan Acharya";
  function namechnagerInvalid(nameToChnage){
     name=nameToChnage;
      console.log(" name after changed is : }" ,name);
  }
  snamechnagerInvalid("Sparrow")
   //TypeError: Assignment to constant variable 


   const nameInValidExample = "Narayan Acharya";

   function nameChangerValid(nameToChange) {
       const newName = nameToChange;
       console.log("Name after changed is:", newName);
   }
   
   nameChangerValid("Sparrow");
   //Name after changed is: Sparrow
   // for this reult cmt the line 6
// let have same block level scope but it cant be reassigned 