let n=parseInt(prompt("Enter the number"));
for(let i=1;i<=n;i++){
    if(i==1){
        for(let m=1;m<=n;m++){
            document.write("*&nbsp&nbsp");
        }
    }
    else{
        for(let j=2;j<=i;j++){
            document.write("&nbsp&nbsp");
        }
        for(let k=n;k>=i;k--){
        if(k==n || k==i){
            document.write("*&nbsp&nbsp")
            }
            else{
                document.write("&nbsp&nbsp&nbsp&nbsp")
            }
        }
    }
    document.write("<br>");
}
for(let i=1;i<=n;i++){
    if(i!=n){
        for(let j=(n-1);j>=i;j--){
        
            document.write("&nbsp&nbsp");
        }
        for(let k=1;k<=i;k++){
            if(k==1 || k==i){
            document.write("*&nbsp&nbsp");
            }
            else{
                document.write("&nbsp&nbsp&nbsp&nbsp");
            }
        }
        
    }
    else{
        for(let m=1;m<=n;m++){
            document.write("*&nbsp&nbsp");
        }
    }
    document.write("<br>");
}