const balancedBrackets = require("./challenge"); // Adjust the path as needed

describe("balancedBrackets", () => {
  it("should return true for balanced brackets", () => {
    expect(balancedBrackets("()")).toBe(true);
    expect(balancedBrackets("[]")).toBe(true);
    expect(balancedBrackets("{}")).toBe(true);
    expect(balancedBrackets("{[()]}")).toBe(true);
    expect(balancedBrackets("({[{}]})")).toBe(true);
    expect(balancedBrackets("[({})]")).toBe(true);
    expect(balancedBrackets("[({})]{}")).toBe(true);
  });

  it("should return false for unbalanced brackets", () => {
    expect(balancedBrackets("(")).toBe(false);
    expect(balancedBrackets(")")).toBe(false);
    expect(balancedBrackets("[")).toBe(false);
    expect(balancedBrackets("]")).toBe(false);
    expect(balancedBrackets("{")).toBe(false);
    expect(balancedBrackets("}")).toBe(false);
    expect(balancedBrackets("[}")).toBe(false);
    expect(balancedBrackets("({[}})")).toBe(false);
    expect(balancedBrackets("[({}]")).toBe(false);
    expect(balancedBrackets("[({})}")).toBe(false);
  });

  it("should handle mixed brackets", () => {
    expect(balancedBrackets("[{()}]")).toBe(true);
    expect(balancedBrackets("{[()]}")).toBe(true);
    expect(balancedBrackets("({[]})")).toBe(true);
    expect(balancedBrackets("[{[()]}")).toBe(false);
    expect(balancedBrackets("}({[()]}")).toBe(false);
  });
});
