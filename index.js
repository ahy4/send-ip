const axios = require('axios');
const ip = require('ip');

axios.post('https://rest-json-server-dpqvurprre.now.sh/ips', {
  text: ip.address(),
  createdAt: new Date()+""
});
