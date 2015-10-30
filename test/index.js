var tape = require("tape"),
    extend = require("..");


tape("extend(out, ...objects)", function(assert) {
    assert.deepEqual(extend({}, {
        name: "Bob"
    }, {
        age: 42
    }), {
        name: "Bob",
        age: 42
    }, "should extend out with objects members");
    assert.end();
});
