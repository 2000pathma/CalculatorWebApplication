function insert(num) 
{
    document.form1.textview.value = document.form1.textview.value +event.target.value;
}

function equal(){
    let exp=document.form1.textview.value;
    if(exp.includes("+")){
        let res=document.form1.textview.value.split("+");
        let num1=res[0];
        let num2=res[1]; 
        let sum=Number(num1)+Number(num2);  
        //console.log(sum)
        document.form1.textview.value=sum;
    }
    else if(exp.includes("-")){
        let res=document.form1.textview.value.split("-");
        let num1=res[0];
        let num2=res[1]; 
        let sub=Number(num1)-Number(num2);  
        //console.log(sub)
        document.form1.textview.value=sub;
    }
    else if(exp.includes("*")){
        let res=document.form1.textview.value.split("*");
        let num1=res[0];
        let num2=res[1]; 
        let mul=Number(num1)*Number(num2);  
        //console.log(mul);
        document.form1.textview.value=mul;
    }
    else if(exp.includes("/")) {
        let res=document.form1.textview.value.split("/");
        let num1=res[0];
        let num2=res[1]; 
        let div=Number(num1)/Number(num2);  
        //console.log(div);
        document.form1.textview.value=div;
    }
}