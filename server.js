const express=require('express')
const app =express();
const path=require('path');

app.use(express.static(__dirname+'/dist/Birthday-angular'));

app.listen(process.env.PORT||8080);

//PATHLOCATIONSTARTEGY

app.get('/*',function(req,res)
{

res.sendFile(path.join(_dirname+ '/dist/Birthday-angular/index.html'));

})


console.log('console listening');