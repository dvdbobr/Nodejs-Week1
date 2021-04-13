const axios = require('axios')
const request = require('request')
const superagent = require('superagent')
const url = 'https://api.fbi.gov/wanted/v1/list'
const getWanted = async () => {
    try {
        const response = await axios.get(`${url}`)
        console.log(response.data.items[0].title)
    }
    catch (e) {
        console.log(e)
    }
}
request({ url: url, json: true }, (err, response) => {
    if (err)
        return console.log(err)
    console.log(response.body.items[0].title)
})
superagent.get(url)
.then(response =>{
console.log(response.body.items[0].title)
}).catch(err=>{
    console.log(err)
})
getWanted()