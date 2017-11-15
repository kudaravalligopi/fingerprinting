const express = require('express');
const router = express.Router();
const util = require('util')
const exec = require('child_process').exec
const request = require('request')



var ip = `http://10.224.69.47:8080/v1/s3/`

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

});

router.post('/tables', (req, res) => {
        
    
    
    //to get tables based on source selected
    let getTablesCommand = `http://10.224.69.47:8080/v1/s3/listtables?bucket_name=${req.body.zoneName}&database_name=${req.body.sourceName}`
console.log(getTablesCommand)
    exec('curl "' + getTablesCommand+'"',{maxBuffer:1024*1024}, (error, stdout, stderr)=>{
        op = JSON.parse(stdout)
        console.log(op)
        res.json(op)
        if(error !== null){
            console.log(error)
        }
    })
    

});

router.post('/columns', (req, res) => {
    

//     //to get columns based on table selected
    let getColumnsCommand = `curl "http://10.224.69.47:8080/v1/s3/rawzone/listcolumns?bucket_name=${req.body.zoneName}&database_name=${req.body.sourceName}&table_name=${req.body.tableName}"`
console.log(getColumnsCommand)

    exec(getColumnsCommand,{maxBuffer:1024*1024}, (error, stdout, stderr)=>{
        
        op = JSON.parse(stdout)
        console.log(op)
        res.json(op)        
        if(error !== null){
            console.log(error)
        }
    })

});

router.post('/final', (req, res) => {
    console.log('IN FINGRERPRINT DATA ENDPOINT')

    let zone = req.body.zoneName
    let source = req.body.sourceName
    let table = req.body.tableName
    let column = req.body.columnName

    let dataString =  `{"data": {"table_name": "${table}", "database_name": "${source}", "bucket_name": "${zone}", "type": "raw", "colums": ["${column}"]}}`

    const headers = {
        'Content-Type':'application/json'
    }
    
    console.log(dataString)    

    const options = {
        url: 'http://10.224.69.47:8080/v1/autotagging/submit',
        method: 'POST',
        headers: headers,
        body: dataString
    };

    function callback(error, response, body) {
        if(!error && response.statusCode == 200){
            console.log(body)
            console.log('type of response is : ')
            console.log(typeof(body))
            let jBody = 
            res.json(body)
        }
        if(error) {
            console.log('An Error has occured')
            console.log(error)
            console.log('With Status Code')
            console.log(response.statusCode)
        }
    }

    request(options, callback)


})


module.exports = router;
