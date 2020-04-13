module.exports=exports=

function (nom, callback)
{
    
    var key= '93515786f4cf6ec70c357889f9b7e38e';
    var lien ='https://api.openweathermap.org/data/2.5/weather?q='+nom+"&units=metric&lang=fr&appid="+key;
    
    var req=require('request') ;

    req(lien,function(err,result,body){ 
        var tap = JSON.parse(body)
        callback(tap);   

    });
}

console.log(lien+Montpellier+key);
