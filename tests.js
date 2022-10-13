// Unit tests for the sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
      expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello!" when executed', function() {
      expect(sayHello()).toBe("Hello!");
    });
    it("should never return 'undefined' when called", function() {
      expect(sayHello()).not.toBe(undefined);
    });
});

describe("subtract", function(){
    it("should be a defined function", function(){
       expect(typeof subtract).toBe ("function");
    });
    it("should return a number when passed two number arguments", function(){
        expect(typeof subtract(3,1)).toBe("number");
    });
    it("should return false when passed any arguement that is not a number", function (){
        expect(subtract()).toBe(false);
        expect(subtract(2)).toBe(false);
        expect(subtract("Banana", 6)).toBe(false);
    });
    it("should return 34 when passed the arguements of 64 and 30", function (){
        expect(subtract(64, 30)).toBe(34);
    });
    it("should return 34 when passed the arguements of 100 and 25", function (){
        expect(subtract(100, 25)).toBe(75);
    });
    it("should return 34 when passed the arguements of 0 and 7", function (){
        expect(subtract(0, 7)).toBe(-7);
    });
    it("should return 34 when passed the arguements of 310 and 10", function (){
        expect(subtract(310, 10)).toBe(300);
    });
    it("should return 34 when passed the arguements of 10 and 0", function (){
        expect(subtract(10, 0)).toBe(10);
    });
});