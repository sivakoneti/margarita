/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Passengers$ref = any;
type TripDetails$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookingDetailWrapper$ref: FragmentReference;
export type BookingDetailWrapper = {|
  +$fragmentRefs: TripDetails$ref & Passengers$ref,
  +$refType: BookingDetailWrapper$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BookingDetailWrapper",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "TripDetails",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Passengers",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a97aba3a50c4705e2c304e29342ba6d6';
module.exports = node;