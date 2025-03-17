import { should } from "chai";
import { sum } from "../../src/functions/sum.js";
import { mathData } from "../data/mathData.js";


describe("Sum Function", function() {
    let maths = mathData;

    maths.forEach(math => {
        it(math.testName, function() {
            should();

            sum(math.a, math.b).should.equal(math.result);
        })
    });
});