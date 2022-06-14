const auth = (req, res, next) => {
  var ip = req.headers['x-forwarded-for'] ||
  req.socket.remoteAddress ||
  null;

  if(ip === process.env.ADMIN_IP){
    next()
  }else{
    res.send(401).json({message: "Você não tem autorização para usar esse recurso."})
  }
}

module.exports = auth
