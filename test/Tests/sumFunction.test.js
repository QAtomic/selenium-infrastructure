import { expect } from "chai";
import { sum } from "../../src/functions/sum.js";
import { mathData } from "../data/mathData.js";


describe("Sum Function", function() {
    let maths = mathData;

    maths.forEach(math => {
        it(math.testName, function() {
            expect(sum(math.a, math.b)).to.equal(math.result);
        })
    });
});