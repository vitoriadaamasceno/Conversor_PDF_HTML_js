class Processador{

    static Process(data){
        var array = data.split("\r\n")
        var rows = []

        array.forEach(row => {
            var a = row.split(",")
            rows.push(a)
        });
        return rows

    }
}


module.exports = Processador