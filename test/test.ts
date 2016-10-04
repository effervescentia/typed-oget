import test = require('blue-tape');

import oget = require('oget');

test('oget exists', (t) => {
  t.plan(1);
  t.notEqual(oget, undefined);
});
