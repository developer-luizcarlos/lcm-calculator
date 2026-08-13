import assert from "node:assert";

import lcm from "../src/lcm";

assert.equal(lcm(2, 6, 18), 18);
assert.equal(lcm(9, 14, 27), 378);
assert.equal(lcm(13, 72, 97), 90_792);
assert.equal(lcm(10, 15, 20), 60);
assert.equal(lcm(7, 11, 13), 1_001);
assert.equal(lcm(50, 75, 120), 600);
assert.equal(lcm(2, 4, 8, 16), 16);
assert.equal(lcm(11, 22, 33, 44), 132);
assert.equal(lcm(360, 840), 2520);
assert.equal(lcm(1, 2, 3, 4, 5), 60);
assert.equal(lcm(17), 17);

assert.throws(() => lcm(-12, 5));
assert.throws(() => lcm(12, 18, 96, 0));
assert.throws(() => lcm(1.5, 10));
