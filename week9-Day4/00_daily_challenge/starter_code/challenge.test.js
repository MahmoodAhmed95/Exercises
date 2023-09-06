const { gridTrip, unComify } = require("./challenge");

describe("unComify", () => {
  it("removes the first and last items and separates by spaces", () => {
    expect(unComify("1,2,3")).toBe("2");
    expect(unComify("1,2,3,4")).toBe("2 3");
    expect(unComify("1,2,3,4,5")).toBe("2 3 4");
    expect(unComify("a,b,c,d,e")).toBe("b c d");
  });

  it("handles empty strings", () => {
    expect(unComify("")).toBeNull();
  });

  it("handles single item", () => {
    expect(unComify("1")).toBeNull();
    expect(unComify("abc")).toBeNull();
  });

  it("handles two items", () => {
    expect(unComify("1,2")).toBeNull();
    expect(unComify("apple,banana")).toBeNull();
  });
});

describe("gridTrip", () => {
  it("calculates final position correctly", () => {
    expect(gridTrip([0, 0], "U2R1")).toEqual([2, 1]);
    expect(gridTrip([5, 10], "D5L15U2")).toEqual([2, -5]);
    expect(gridTrip([-22, 100], "L2L15D50U1D9")).toEqual([-80, 83]);
  });

  it("handles no movement", () => {
    expect(gridTrip([0, 0], "")).toEqual([0, 0]);
    expect(gridTrip([10, -5], "")).toEqual([10, -5]);
  });

  it("handles only one direction", () => {
    expect(gridTrip([0, 0], "U10")).toEqual([10, 0]);
    expect(gridTrip([10, -5], "L5")).toEqual([10, -10]);
  });

  it("handles multiple directions", () => {
    expect(gridTrip([0, 0], "U2R1D3L1")).toEqual([-1, 0]);
    expect(gridTrip([5, 10], "D5L15U2R5")).toEqual([2, 0]);
  });
});
