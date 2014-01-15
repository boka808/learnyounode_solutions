//debug
//console.log(process.argv)
//console.log(input.length)
var input=process.argv
var start=2
var stop=input.length
var sum=0
for (var i=start;i<stop;i++)
{
	sum+=Number(input[i])
}

console.log(sum);
