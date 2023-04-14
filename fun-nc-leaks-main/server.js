const https = require('https');
const fs = require('fs');
exports.getConfidentialInfo = function getConfidentialInfo() {
  const options = {
    hostname: 'nc-leaks.herokuapp.com',
    path: '/api/confidential',
    method: 'GET'
  };

  const request = https.request(options, (response) => {
    let body = '';
    response.on('data', (packet) => {
      body += packet.toString();
    });
    response.on('end', () => {
      const { instructions } = JSON.parse(body);

      fs.writeFile('instructions.md', instructions, (err) => { });
    });
  });
  request.end();
};

exports.getPeople = function getPeople() {
  const options = {
    hostname: 'nc-leaks.herokuapp.com',
    path: '/api/people',
    method: 'GET'
  };

  const request = https.request(options, (response) => {
    let body = '';
    response.on('data', (packet) => {
      body += packet.toString();
    });
    response.on('end', () => {
      const { people } = JSON.parse(body);

      fs.writeFile('northcoders.json', JSON.stringify(people), (err) => { });
    });
  });
  request.end();
};

exports.getInterests = function getInterests() { 

}