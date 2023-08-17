const addChecker = require("./challenge"); // Adjust the import path accordingly

describe("addChecker", () => {
  it("returns true when two integers add up to the target", () => {
    expect(addChecker([1, 2, 3, 4, 5], 7)).toBe(true); // 2 + 5 = 7
    expect(addChecker([-3, 0, 2, 5, 8], 5)).toBe(true); // -3 + 8 = 5
  });

  it("returns false when no two integers add up to the target", () => {
    expect(addChecker([1, 2, 3, 4, 5], 10)).toBe(false);
    expect(addChecker([-3, 0, 2, 5, 8], 4)).toBe(false);
  });

  it("handles arrays with negative numbers", () => {
    expect(addChecker([-10, -5, 0, 3, 6], -15)).toBe(true); // -10 + -5 = -15
    expect(addChecker([-10, -5, 0, 3, 6], -1)).toBe(false);
  });

  it("handles duplicate integers", () => {
    expect(addChecker([2, 2, 3, 3, 5], 7)).toBe(true); // 2 + 5 = 7
    expect(addChecker([2, 2, 3, 3, 5], 8)).toBe(true);
  });

  it("returns false for arrays with less than two integers", () => {
    expect(addChecker([1], 1)).toBe(false);
    expect(addChecker([], 10)).toBe(false);
  });
});
