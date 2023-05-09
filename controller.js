const Book = require('./model');
exports.postBook = (req, res, next) => {

    const title = req?.body?.title
    const desc = req?.body?.desc
    Book.create({
        title, desc
    }).then(res => console.log(res)).catch((err) => console.log(err))

    return res.json("hi")
}
exports.fetchBook = (req, res, next) => {
    Book.findAll().then(books => res.json(books)).catch(err => console.log(err))
}
exports.deleteBook = (req, res, next) => {
    const bookId = req.params.id
    Book.destroy({
        where: {
            id: bookId
        }
    }).then(books => res.json("Book deleted")).catch(err => console.log(err))
}
exports.updateBook = (req, res, next) => {
    const bookId = req.params.id
    Book.update({ title: req.body.title,desc:req.body.desc }, {
        where: {
          id: bookId
        }
      }).then(books => res.json("Book deleted")).catch(err => console.log(err))
}
exports.getLogin=(req,res,next)=>{
    req.isLogin=true;
    res.setHeader('set-Cookie','loggedIn=true')
    console.log(req.get("Cookie"))
    res.json("Login")
}