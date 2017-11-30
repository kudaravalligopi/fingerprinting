const express = require('express');
const router = express.Router();
const util = require('util')
const exec = require('child_process').exec
const request = require('request')

router.post('/tagcorrectionsubmit', function (req, res) {

    console.log('IN CURATE ENDPOINT')


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
            res.json(error)
        }
    }

})

module.exports = router;
