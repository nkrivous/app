import { Observable } from '@reactivex/rxjs/src/Rx';

class Startup {
    public static main(): number {

        console.log('Hello World');
        let f=0;
        var t = Observable.of(1,2,3).map(x => x + '!!!');
        return 0;
    }
}

Startup.main();