const express =require('express')


const app=express()


app.get('/clientes',(req,res)=>{
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})
app.get('/productos',(req,res)=>{
    res.sendFile('./static/productos.html',{
        root: __dirname
    })
})


app.get('/clientes1',(req,res)=>{
    res.json([
        {
            nombre:"Aracely",
            apellido:"Huamani",
            email:"aracely.huamani@tecsup.edu.pe",
            contacto:99878978
        },
        {
            nombre:"Juana",
            apellido:"Lopez",
            email:"juana.lopez@gmail.com",
            contacto:99456443
        },
        {
            nombre:"Micaela",
            apellido:"Rodriguez",
            email:"micaela.rodriguez@gmail.com",
            contacto:934556478
        }
    ])
})


app.get('/productos1',(req,res)=>{
    res.json([
        {
            codigo:"1001",
            descripcion:"lapiz",
            precio:1.50,
            cantidad:180
        },
        {
            codigo:"1002",
            descripcion:"teclado",
            precio:150.40,
            cantidad:200
        },
        {
            codigo:"1003",
            descripcion:"jabon liquido",
            precio:7.60,
            cantidad:27
        }
    ])
})
   
app.listen(5000)
console.log(`Server on port ${5000}`)