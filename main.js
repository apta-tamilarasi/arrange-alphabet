// let a=parseInt(prompt("Enter"))

// if(a>0){
// 	document.write("Given number "+a+" is + ve")
// 	console.log("given number is +ve");
// }

// else if(a<0){
// 	document.write("Given number "+a+" is - ve")
// }

// else if(a==0){
// 	document.write("Given number "+a+" is not a +ve or -ve number")
// }

// else{
// 	document.write("Pls enter valid number")
// }

let a="siva"
let tem=[]

for(i=0;i<a.length;i++){
	tem.push(a[i].charCodeAt())
}
console.log(tem);

var result=[]
var actem=0

for(i=0;i<tem.length;i++){
	for(j=i+1;j<tem.length;j++){
		if(tem[i]>tem[j]){
			actem=tem[i]
			tem[i]=tem[j]
			tem[j]=actem
		}
	
}
result.push(tem[i])
}

for(i=0;i<result.length;i++){
	console.log(result[i]);
	console.log(typeof(result[i]));
	document.write(String.fromCharCode(result[i]));
}
