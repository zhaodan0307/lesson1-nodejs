// use http module to run in browser
let http = require('http')
let url = require('url')
let accounting = require('accounting')

// start web server
http.createServer((req, res) => {
    // header w/HTML content-type
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })

    // write some content
    res.write('<h1>Tax Calculator</h1>')

    // read the url parameter string (the part after the ?)
    //let query = url.parse(req.url, true).query
    let query = url.parse(req.url,true).query
    console.log(query)

    // grab subtotal param from url.  use parseFloat so js doesn't treat this as a string
    //pass this as a float
    let subTotal = parseFloat(query.subtotal)
    //let subTotal = query.subtotal

    // calc tax & total
    let tax = subTotal * 0.13
    let total = subTotal + tax

    // display all 3 values
    res.write('<h2>Sub Total:</h2>' + accounting.formatMoney(subTotal) +
        '<br /><h2>Tax:</h2>' + accounting.formatMoney(tax) +
        '<br /><h2>Total:</h2>' + accounting.formatMoney(total))

    res.end()
}).listen(3000)

console.log('Server running on port 3000')