var Reader = require("./Reader")
var Processador = require("./Processador")
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")
var Writer = require("./Writer")
var PDFWrite = require("./PdfWriter")


var leitor = new Reader
var escritor = new Writer

async function main(){
    var dados = await leitor.Read("users.csv")
    var dadosProcessadors = Processador.Process(dados)
    var usuarios = new Table(dadosProcessadors)
    var html = await HtmlParser.Parse(usuarios)
    escritor.Write(Date.now() +".html",html)
    PDFWrite.WritePDF(Date.now()+".PDF",html)
}

main()