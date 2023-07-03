var pdf = require("html-pdf")

class PDFWrite {
    static WritePDF(filename, html) {
        pdf.create(html, {
            childProcessOptions: {
                env: {
                    OPENSSL_CONF: '/dev/null',
                },
            }
        }).toFile(filename, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res)
            }
        })
    }
}

module.exports = PDFWrite

