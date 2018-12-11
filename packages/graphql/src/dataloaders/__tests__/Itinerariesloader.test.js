// @flow

import { parseParameters } from '../Itinerariesloader';

const searchParams = {
  travelFrom: 'OSL',
  travelTo: 'PRG',
  dateFrom: new Date('2018-01-01'),
};

it('parses parameters corectly', () => {
  expect(parseParameters(searchParams)).toMatchInlineSnapshot(`
Object {
  "dateFrom": "01/01/2018",
  "dateTo": "01/01/2018",
  "flyFrom": "OSL",
  "to": "PRG",
}
`);
  expect(
    parseParameters({
      ...searchParams,
      returnDateFrom: new Date('2018-01-02'),
      returnDateTo: new Date('2018-01-10'),
      passengers: {
        adults: 2,
      },
    }),
  ).toMatchInlineSnapshot(`
Object {
  "adults": 2,
  "children": 0,
  "dateFrom": "01/01/2018",
  "dateTo": "01/01/2018",
  "flyFrom": "OSL",
  "infants": 0,
  "returnFrom": "02/01/2018",
  "returnTo": "10/01/2018",
  "to": "PRG",
}
`);
});
