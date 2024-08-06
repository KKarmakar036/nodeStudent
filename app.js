const express=require('express')
const path=require('path')
const bodyparser=require('body-parser')
const counnectDB=require('./app/config/Db')
const dotenv=require('dotenv')
const session=require('express-session')
const flash=require('connect-flash')


dotenv.config()
counnectDB()
const app=express()

app.set("view engine","ejs")
app.set("views","views")

app.use(flash())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge : 60000 }
}))


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/uploads',express.static('uploads'))

app.use(express.static(path.join(__dirname,'public')))



const ApiRouter=require('./router/api.routes')
app.use('/api',ApiRouter)

const HomeRouter=require('./router/home.routes')
app.use(HomeRouter)



const port=process.env.PORT || 3500
app.listen(port,()=>{
    console.log(`server start:http://localhost:${port}`);
})