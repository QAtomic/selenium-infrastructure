import { should } from "chai";
import { sum } from "../../src/functions/sum.js";


describe("Sum Function", function() {
    let maths = [
        {
            testName : "Two Plus Three",
            a : 2,
            b : 3,
            result : 5
        } ,
        {
            testName : "Four Plus Five",
            a : 4,
            b : 5,
            result : 9
        } ,
        {
            testName : "Six Plus Seven (Forced Error)",
            a : 6,
            b : 7,
            result : 12
        }
    ]

    maths.forEach(math => {
        it(math.testName, function() {
            should();

            sum(math.a, math.b).should.equal(math.result);
        })
    });
});