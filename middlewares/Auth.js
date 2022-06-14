const auth = async (req, res, next) => {
  var ip = req.headers['x-forwarded-for'][0] ||
  req.socket.remoteAddress ||
  null;

  if(ip === process.env.ADMIN_IP){
    next()
  }else{
    res.send(200).json({message: "Você não tem autorização para usar esse recurso."})
  }
}

module.exports = auth
