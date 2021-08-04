const path=require('path')
const express =require('express')
const hbs=require('hbs')

const app=express()

const publicdirectory=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templetes/views')

app.set('view engine', 'hbs')
app.set('views',viewpath)
hbs.registerPartials(partialspath)
app.use(express.static(publicdirectory))

app.get('', (req, res) => {
    s
    res.send( {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/weather', (req, res) => {

    if(!req.query.search){
    
        return res.send({
            error:'u  must provide seracc'
        })
    }
    res.send( {
        forecast: 'it is snowing',
        location: 'philadophia',
        address:req.query.address
        
    })

})





app.get('/products', (req, res) => {
    if(!req.query.search){
    
        return res.send({
            error:'u  must provide seracc'
        })
    }
    console.log(req.query.search)
    res.send( {
        product:[]
    })
})

app.get('/help/*',(req,res)=>{

    res.render('404',{
        title:"404",
        error: "help found"
    })
})

app.get('*',(req,res)=>{

    res.render('404',{
        title:"404",
        error:"not found"

    })
})

app.listen(3000,()=>{
    console.log('server on port')
}) 








