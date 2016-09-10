"use strict";
const Rx_1 = require('@reactivex/rxjs/src/Rx');
class Startup {
    static main() {
        console.log('Hello World');
        let f = 0;
        var t = Rx_1.Observable.of(1, 2, 3).map(x => x + '!!!');
        return 0;
    }
}
Startup.main();
//# sourceMappingURL=app.js.map