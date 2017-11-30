const express = require('express');
const router = express.Router();
const util = require('util')
const exec = require('child_process').exec
const request = require('request')

var demoJSON = {
    "zones": [
        {
            "id": 1,
            "name": "lmb-datalake-hdp-store-raw-nonprod"

        },
        {
            "id": 2,
            "name": "lmb-datalake-hdp-store-raw-prod"

        }
    ]
}

/* GET api listing. */
router.get('/zones', (req, res) => {
    console.log(demoJSON.zones)// to print JSON on server console
    res.json(demoJSON.zones)//To send JSON Back
});



router.post('/sources', (req, res) => {
    try{
        var op;
        console.log(req.body.zoneName)
        let getSourcesCommand = `http://10.224.69.47:8080/v1/s3/listdatabase?bucket_name=${req.body.zoneName}`
        exec('curl '+getSourcesCommand, (error, stdout, stderr)=>{
            op = JSON.parse(stdout)
            console.log(typeof(op))
            console.log(op)
            res.json(op)//To send JSON Back
            console.log('stderr: '+stderr)
            if(error){
                console.log(error)
            }
    
        })
    }catch(err){
        console.log('an error has occured')
        console.log(err)
        res.json({"Error":err})
    }
    
    

});

router.post('/tagcorrectionsubmit', (req,res)=>{

    console.log('IN CURATE ENDPOINT')
    console.log(req.body)
    
    var headers = {
        'Content-Type': 'application/json'
    };
    
    var dataString = '{"zoneName": "lmb-datalake-hdp-store-raw-nonprod","sourceName": "avaya","tableName": "customer_log","columnName": "date_occurred_s","tagInfo": [{"tagType": "MIO","tagCategory": "MIO-PUBLIC"},{"tagType": "SEC","tagCategory": "SEC-SSN"},{"tagType": "DOM","tagCategory": "DOM-CUSTOMER"}]}';
    
    var options = {
        url: 'http://10.224.69.47:9090/v1/autotagging/tagcorrectionsubmit',
        method: 'POST',
        headers: headers,
        body: dataString
    };
    console.log(dataString)

    request(options, callback)

    function callback(error, response, body) {
        console.log('in callback')
        if (!error) {
            console.log(body);
            res.json(body)
        }
        else {
            res.json(body)
        }
    }
    
})

module.exports = router;
