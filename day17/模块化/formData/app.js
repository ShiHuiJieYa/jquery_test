const express = require('express')
const app = express()
const multer = require('multer')
//解决跨域
const cors = require('cors')
const {
    urlencoded
} = require('express')

//设置保存路径'
const upload = multer({
    dest: './static/upload'
})

//中间件
app.use(cors());
app.use(express.static('./public'))

app.use(upload.any())

app.use(express.urlencoded({
    extended: true
}))

app.post('/upload', (req, res) => {

    console.log(req.files)
})
app.listen(5000, () => {
    console.log('ok')
})