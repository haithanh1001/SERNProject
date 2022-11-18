let getHomePage =  (req,res) =>{
    return res.render('index');
}

let getAboutPage = (req,res) =>{
    return res.render('test/about');
}

module.exports ={
    getHomePage,
    getAboutPage
}