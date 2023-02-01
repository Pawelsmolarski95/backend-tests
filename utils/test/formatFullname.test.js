const formatFullname = require('./../formatFullname.js');
const expect = require("chai").expect;

describe("FormatFullName", () => {
        it('should return an error if "fullname" arg is not a string', () => {
          expect(formatFullname(undefined)).to.equal("Error");
          expect(formatFullname(12)).to.equal("Error");
          expect(formatFullname({})).to.equal("Error");
          expect(formatFullname([])).to.equal("Error");
          expect(formatFullname(function () {})).to.equal("Error");
        });
        it('should return an error if "fullname" arg is empty', () => {
            expect(formatFullname('')).to.equal("Error");
            
        });
        it('should return an error if format "fullname" is not <firstname> <lastname>', () => {
            expect(formatFullname('John Doe Test')).to.equal("Error");
            expect(formatFullname('John Doe Test Doe Test')).to.equal("Error");
            expect(formatFullname('John')).to.equal("Error");
            expect(formatFullname('Doe')).to.equal("Error");
        });
});