describe('monitor that NetsEasy is up and running', () => {
    var http = require("https");
    var options = {
      "method": "POST",
      "hostname": "test.api.dibspayment.eu",
      "port": null,
      "path": "/v1/payments",
      "Authorization": "test-checkout-key-48faf3b3d3c643559d6a20514ab2c86e",
      "headers": {
        "content-type": "application/*+json",
        //"CommercePlatformTag": "SOME_STRING_VALUE",
        //"Authorization": "test-checkout-key-48faf3b3d3c643559d6a20514ab2c86e"
      }
    };
    
    var req = http.request(options, function (res) {
      var chunks = [];
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
    
      res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });
    
   /*  req.write(JSON.stringify({REPLACE_REQUEST_BODY: 'REPLACE_REQUEST_BODY'}));
    req.end(); */


    it('Test POST Request to NetsEasy test env', () => {
        cy.request({
            method: options.method,
            url: options.hostname + options.path,
            Authorization: options.Authorization,
        })
             .then((res) => {
                    expect(res.body).to.have.property('code', 201);
        })
    })
})
