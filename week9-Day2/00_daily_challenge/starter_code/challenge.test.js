const toCamelCase = require("./challenge.js");
describe("toCamelCase", () => {
  it('converts "wdi-rocks" to "wdiRocks"', () => {
    expect(toCamelCase("wdi-rocks")).toBe("wdiRocks");
  });

  it('converts "banana_Turkey_potato" to "bananaTurkeyPotato"', () => {
    expect(toCamelCase("banana_Turkey_potato")).toBe("bananaTurkeyPotato");
  });

  it('converts "Mama-mia" to "MamaMia"', () => {
    expect(toCamelCase("Mama-mia")).toBe("MamaMia");
  });

  it('converts "A_b_c" to "ABC"', () => {
    expect(toCamelCase("A_b_c")).toBe("ABC");
  });

  it("handles empty string", () => {
    expect(toCamelCase("")).toBe("");
  });
});
