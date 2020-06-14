let googleSheet=require('../spreadsheet');

const getInfo= async(req, res) =>{
    registros =await googleSheet.accederGoogleSheet();
    res.render("index", {registros});
    console.log(registros);
}

const pintarForm = (req, res) =>{
    res.render("form", {});
}

const guardarDato = (req, res) =>{
    googleSheet.guardarDato(req.body);
    res.redirect("/");
}


module.exports={
    getInfo : getInfo,
    pintarForm : pintarForm,
    guardarDato : guardarDato
}