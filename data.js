const fields = ['firstName', 'lastName', 'gender', 'age', 'email'];
const rawData = `Garry	Carroll	Male	27	g.carroll@randatmail.com\tDainton	Wells	Male	21	d.wells@randatmail.com\tMiley	Davis	Female	21	m.davis@randatmail.com\tMax	Mason	Male\t22	m.mason@randatmail.com\tMelanie	Robinson	Female	28	m.robinson@randatmail.com\tFreddie	Farrell	Male	18	f.farrell@randatmail.com\tDavid	Murray	Male	26	d.murray@randatmail.com\tMelanie	Richards	Female	30	m.richards@randatmail.com\tDale	Bailey	Male	21	d.bailey@randatmail.com\tEdith	Spencer	Female	23	e.spencer@randatmail.com\tWilson	Watson	Male	27	w.watson@randatmail.com\tWilliam	Reed	Male	28	w.reed@randatmail.com\tAlexia	Craig	Female	23	a.craig@randatmail.com\tSofia	Edwards	Female	28	s.edwards@randatmail.com\tKellan	Montgomery	Male	18	k.montgomery@randatmail.com`;

const dataObject = (str, demos) => {
  const array = str.split('\t');
  let fullList = [];
  while (array.length) {
    let temp = {};
    for (let i = 0; i < 5; i++) {
      temp[demos[i]] = array.shift();
    }
    fullList.push(temp);
  }
  return fullList;
};

//console.log(dataObject(rawData, fields));

module.exports = dataObject(rawData, fields);
