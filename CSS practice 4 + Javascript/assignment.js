
// 
// JSON.stringify function is to used to alert the object in JS used in the alert function like this:
    // alert(JSON.stringify(object name))


Name:Ali Imran 
        Assignment # 03 
            Javascript

let family ={
    name : "Ahmed",
    fname : 'Ismail'
};

let edit = prompt("Enter true if you want to change /edit the name or father name:")
if (edit ==="true"){
   let newkey= prompt("Enter the key you want to change (name or fname)")
    if(newkey==="name"){
        let changename=prompt("Enter the new name:")
        family["name"]=changename
    }
    else if (newkey==="fname"){
        let changename2=prompt("Enter the new fname:")
        family["fname"]=changename2
    }
    else{
        prompt("Enter valid key")
    }
    }
    alert(JSON.stringify(family))

