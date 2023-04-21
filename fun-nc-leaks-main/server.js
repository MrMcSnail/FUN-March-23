const https = require('https');
const fs = require('fs');
exports.getConfidentialInfo = () => {
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

      fs.writeFile('instructions.md', instructions, (err) => {});
    });
  });
  request.end();
};

exports.getPeople = () => {
  const options = {
    hostname: 'nc-leaks.herokuapp.com',
    path: '/api/people',
    method: 'GET'
  };

  const request = https.request(options, (response) => {
    let body = '';
    console.log('request');
    response.on('data', (packet) => {
      body += packet.toString();
    });
    return response.on('end', () => {
      const { people } = JSON.parse(body);

      return fs.writeFile('northcoders.json', JSON.stringify(people), (err) => {
        if (err) throw err;
        status = 'done';
      });
    });
  });
  request.end();
};

exports.getInterests = () => {
  fs.readFile('./northcoders.json', 'utf-8', (err, data) => {
    const interests = [];
    const northcoders = JSON.parse(data);

    for (let i = 0; i < northcoders.length; i++) {
      const username = northcoders[i].username;
      const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: `/api/people/${username}/interests`,
        method: 'GET'
      };
      const request = https.request(options, (response) => {
        let body = '';
        response.on('data', (packet) => {
          body += packet.toString();
        });
        response.on('end', () => {
          const parsedBody = JSON.parse(body);
          const person = parsedBody.person;
          interests.push(person);
          fs.writeFile(
            'interests.json',
            JSON.stringify({ interests }),
            (err) => {
              if (err) throw err;
            }
          );
        });
      });
      request.end();
    }
  });
};

exports.getPets = () => {
  fs.readFile('./northcoders.json', 'utf-8', (err, data) => {
    const pets = [];
    const northcoders = JSON.parse(data);
    for (let i = 0; i < northcoders.length; i++) {
      const username = northcoders[i].username;
      const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: `/api/people/${username}/pets`,
        method: 'GET'
      };
      const request = https.request(options, (response) => {
        let body = '';
        response.on('data', (packet) => {
          body += packet.toString();
        });
        response.on('end', () => {
          if (response.statusCode === 200) {
            const parsedBody = JSON.parse(body);
            const person = parsedBody.person;
            const hasPets = person.pets.length;
            if (hasPets) {
              pets.push(person);
            }
            fs.writeFile('pets.json', JSON.stringify({ pets }), (err) => {
              if (err) throw err;
            });
          }
        });
      });
      request.end();
    }
  });
};

exports.scavengeForNCData = () => {
  const options = {
    hostname: 'nc-leaks.herokuapp.com',
    path: '/api/people',
    method: 'GET'
  };

  const request = https.request(options, (response) => {
    let body = '';
    console.log('request');
    response.on('data', (packet) => {
      body += packet.toString();
    });
    response.on('end', () => {
      const { people } = JSON.parse(body);
      fs.writeFile('northcoders.json', JSON.stringify(people), (err) => {
        if (err) throw err;
        this.getPets();
        this.getInterests();
      });
    });
  });
  request.end();
};
