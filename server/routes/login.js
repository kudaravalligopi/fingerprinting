const express = require('express');
const router = express.Router();
const util = require('util')
const exec = require('child_process').exec
const request = require('request')

const ldap = require('ldapjs')
const client = ldap.createClient({
    url: 'ldap://ldapad.lmig.com:389'
})

module.exports = router;
