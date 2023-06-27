import DataIs from "./data-is";


describe("define.type([typeString], [evaluationFunction])", () => {
    it("lets you define data types", () => {
        const data = DataIs.build();
        expect(() => {
            data.define.type("number", (x) => typeof x == "number");
        }).not.toThrow();
    });
});
describe("element([data]).is([type])", () => {
    it("returns true on valid data type", () => {
        const data = DataIs.build();
        data.define.type("number", (x) => typeof x == "number");
        const testVal = 5;
        expect(data.element(testVal).is("number")).toBeTruthy();
    });
    it("returns false on invalid data type", () => {
        const data = DataIs.build();
        data.define.type("number", (x) => typeof x == "number");
        const testVal = "string";
        expect(data.element(testVal).is("number")).toBeFalsy();
    });
    it("throws if data type is not defined", () => {
        const data = DataIs.build();
        const testVal = "string";
        expect(() => {
            data.element(testVal).is("number");
        }).toThrow();
    });
});
describe("notation data([element]).is([typeString])", () => {
    it("returns true on valid data type", () => {
        const data = DataIs.build();
        data.define.type("number", (x) => typeof x == "number");
        const testVal = 5;
        expect(data(testVal).is("number")).toBeTruthy();
    });
    it("returns false on invalid data type", () => {
        const data = DataIs.build();
        data.define.type("number", (x) => typeof x == "number");
        const testVal = "string";
        expect(data(testVal).is("number")).toBeFalsy();
    });
    it("throws if data type is not defined", () => {
        const data = DataIs.build();
        const testVal = "string";
        expect(() => {
            data(testVal).is("number");
        }).toThrow();
    });
});