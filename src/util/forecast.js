const request=require('request')
const forecast=(latitude,longitude,callback)=>{
  

    const url = 'https://api.darksky.net/forecast/76733e9c3ca293ed6de639d3d5bf874f/' + latitude + ',' + longitude + '?units=si'
request({url:url,json:true},(error,response)=>{
    if(error){
     callback('unable to connect',undefined)

    }else if(response.body.error){

      callback("unable to find",undefined)
    }
    else{
        callback(undefined,response.body.daily.data[2].summary+'it is current' )
    }
})
}
module.exports =forecast