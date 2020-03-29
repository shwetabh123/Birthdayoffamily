const express=require('express')
const app =express();
const path=require('path');

app.use(express.static(__dirname+'/dist/Birthdayforfamily'));

app.listen(process.env.PORT||8080);

//PATHLOCATIONSTARTEGY

app.get('/*',function(req,res)
{

res.sendFile(path.join(_dirname+ '/dist/Birthdayforfamily/index.html'));

})


console.log('console listening');