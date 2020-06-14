const { GoogleSpreadsheet }= require ('google-spreadsheet');
const credenciales = require('./json/credenciales.json');

let googleId = "1qETJ49SZls5EzOmHxhHmwGGfoXa_AntDSpLSXkLPJSM";

async function accederGoogleSheet(){
    const documento =new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();

    const sheet =documento.sheetsByIndex[0]
    const registros = await sheet.getRows();

    return registros
}


async function guardarDato(Obj){
    const documento =new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    const sheet= documento.sheetsById[0];
    await sheet.addRow(Obj);

}





module.exports ={
    accederGoogleSheet : accederGoogleSheet,
    guardarDato : guardarDato,
}