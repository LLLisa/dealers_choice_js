const data = require('../data.js');

const allData = [
  data
    .map((x) => {
      return `<a href="/data/${x.email}"><div class="links">${[
        x.firstName,
        x.lastName,
      ].join(' ')}</div></a>`;
    })
    .join(''),
  `<span>Disclaimer: I love programming and making things work, but visual design is one of my biggest weaknesses. I'm sure if I were given specs on how something should look, I could do it, but if the design is left up to me, this is what you get /shrug/ I'm very happy woth the code itself though</span>`,
].join('');

const datum = (email) => {
  let details = data.find((x) => x.email === email);
  return `<div id="detail">
      ${[
        `<div id="name">${details.firstName} ${details.lastName}</div>`,
        `<div id="stats">${details.gender} ${details.age} ${details.email}</div>`,
      ].join('')}
    </div>`;
};

const mainBody = (content) => `<!DOCTYPE html>
<html>
  <head>
    <title>Lack of imagination zone</title>
    <link rel="stylesheet" href="/app.css" />
  </head>
  <body>
    <h1><a href="/">Random Data</a></h1>
    <p><a href="http://randat.com/">generated by www.randat.com<a></p>
    <div>
      ${content}
    </div>
  </body>
</html>`;

function detail(email) {
  return mainBody(datum(email));
}

module.exports = {
  main: mainBody(allData),
  detail,
};
