import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackConfig from '../webpack/webpack.config.dev.js'

const app = express()
const compiler = webpack(webpackConfig)

if (process.env.NODE_ENV === 'development'){
  app.use(require('webpack-dev-middleware')(compiler,{
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats:{colors:true}
  }))

  app.use(require('webpack-hot-middleware')(compiler))
}

app.use('*',(req, res)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(3000,(err)=>{
  if(err){
    console.log(err)
  }
  console.log('server is listenning at 3000....')
})