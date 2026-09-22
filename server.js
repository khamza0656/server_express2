const express = require('express')// подключили библиотеку Express
const app = express()// запустили Express 

const PORT = 3000; // Обозначили порт для дальнейшего запуска

app.get('/' , (req , res)=>{ // создаем get запрос для получения главной страницы
    res.send("Главная страница")// отправляем клиенту ответ respons
})

app.get('/about' , (req , res)=>{
    res.send("О нас")
})

app.get('/contact' , (req , res)=>{
    res.send("наш контакт:8(888)888 88-88")
})

app.get('/product/:id' , (req, res)=>{
    console.log(req.params);
    res.send(`Товар с id: ${req.params.id}`)
    
})

app.get('/phone/:numbers' , (req, res)=>{
    console.log(req.params);
    res.send(`Ваш номер телефона: ${req.params.numbers}`)
    
})

app.listen(PORT , ()=>{ // настраиваем сервер на чем он будет запущен
    console.log(`Сервер успешно запущен по адрессу: 127.0.0.1:${PORT}`);
    
})

