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
    ],

    "sources": [
        {
            "zoneName": "lmb-datalake-hdp-store-raw-nonprod",
            "zoneId": "1",
            "names": [
                "avaya",
                "bilctr",
                "data",
                "icd",
                "operations",
                "otis",
                "serview",
                "serview2",
                "systemone",
                "user"
            ]
        },
        {
            "zoneName": "lmb-datalake-hdp-store-raw-prod",
            "zoneId": "2",
            "names": [
                "x",
                "y",
                "z",
                "p",
                "q"
            ]
        }


    ],

    "tables": [
        {
            "zoneName": "lmb-datalake-hdp-store-raw-nonprod",
            "zoneId": "1",
            "sourceName": "avaya",
            "names": [
                "agroups",
                "c_ech_unmodified",
                "customer_log",
                "dagent",
                "dsplit",
                "dvdn",
                "dvector",
                "hagent",
                "haglog",
                "hsplit",
                "htkgrp",
                "htrunk",
                "hvdn",
                "hvector",
                "linkex",
                "magent",
                "msplit",
                "mtkgrp",
                "mtrunk",
                "mvdn",
                "mvector",
                "synonyms",
                "wagent",
                "wsplit",
                "wtkgrp",
                "wtrunk",
                "wvdn",
                "wvector"
            ]
        }
    ],
    "columns": [
        {
            "zoneName": "lmb-datalake-hdp-store-raw-nonprod",
            "zoneId": "1",
            "sourceName": "avaya",
            "tableName":"mtrunk",
            "names": [
                "row_date",
                "acd",
                "tkgrp",
                "eqloc",
                "loc_id",
                "incalls",
                "intime",
                "i_inocc",
                "abncalls",
                "o_abncalls",
                "outcalls",
                "outtime",
                "i_outocc",
                "failures",
                "audio",
                "mbusytime",
                "acdcalls",
                "othercalls",
                "shortcalls",
                "o_acdcalls",
                "o_othercalls",
                "incomplete",
                "acdcalls_r1",
                "acdcalls_r2",
                "icrpullcalls"
            ]
        }
    ]
}




/* GET api listing. */
router.get('/zones', (req, res) => {
    console.log(demoJSON.zones)// to print JSON on server console
    res.json(demoJSON.zones)//To send JSON Back
});



router.post('/sources', (req, res) => {
    
    
    
    // var options = {
    //     url: `http://10.224.69.47:8080/v1/s3/listdatabase?bucket_name=${req.body.zoneName}`
    // };
    
    // function callback(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         console.log(body);
    //         res.json(body)
            
    //     }
    // }
    
    // request(options, callback);
    
    
    
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
        
    // let options = {
    //     url: `http://10.224.69.47:8080/v1/s3/listtables?bucket_name=${req.body.zoneName}&database_name=${req.body.sourceName}`
    // };
    
    // function callback(error, response, body) {
    //     if (!error) {
    //         console.log(body);
    //         res.json(body)
    //     }
    //     else {
    //         console.error(body)
    //     }
    // }
    
    // request(options, callback);
    
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

    // let options = {
    //     url: `http://10.224.69.47:8080/v1/s3/rawzone/listcolumns?bucket_name=${req.body.zoneName}&database_name=${req.body.sourceName}&table_name=${req.body.tableName}`
    // };
    
    // function callback(error, response, body) {
    //     if (!error) {
    //         console.log(body)
    //         res.json(body)
    //     }
    //     else {
    //         console.error(error)
    //     }
    // }
    
    // request(options, callback);
        

//     //to get columns based on table selected
    let getColumnsCommand = `curl "http://10.224.69.47:8080/v1/s3/rawzone/listcolumns?bucket_name=${req.body.zoneName}&database_name=${req.body.sourceName}&table_name=${req.body.tableName}"`
console.log(getColumnsCommand)
//curl "http://10.224.69.47:8080/v1/s3/rawzone/listcolumns?bucket_name=lmb-datalake-hdp-store-raw-nonprod&database_name=otis&table_name=custinfo_cd_chgreas_t
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

   
    // let fingerprintCommand = `curl -i -X POST -H "Content-Type: application/json" -d '{"data": {"table_name": "${table}", "database_name": "${source}", "bucket_name": "${zone}", "type": "raw", "colums": ["${column}"]}}' http://10.224.69.47:8080/v1/autotagging/submit`
    // exec(fingerprintCommand,{maxBuffer: 1024*1024}, (error, stdout, stderr)=>{
    //     op = JSON.parse(stdout)
    //     console.log(op)
    //     res.json(op)
    //     if(error !== null){
    //         console.log(error)
    //     }
    // })

})

router.get('/final', (req, res)=>{
    console.log('GET COMMAND TO fingerprintData hit!')
    res.send('GET HIT')
})

module.exports = router;
