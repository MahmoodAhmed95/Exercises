const isWinningTicket = require("./challenge"); // Adjust the path as needed

describe("isWinningTicket", () => {
  it("should return true for a winning ticket with a single nested array", () => {
    const ticket = [["ABC", 65]];
    expect(isWinningTicket(ticket)).toBe(true);
  });

  it("should return false for a losing ticket with a single nested array", () => {
    const ticket = [["ABC", 999]];
    expect(isWinningTicket(ticket)).toBe(false);
  });

  it("should return false for a losing ticket with multiple nested arrays", () => {
    const ticket = [
      ["ABC", 66],
      ["dddd", 15],
      ["Hello", 108],
    ];
    expect(isWinningTicket(ticket)).toBe(false);
  });

  it("should return true for a winning ticket with multiple nested arrays", () => {
    const ticket = [
      ["ABC", 66],
      ["dddd", 100],
      ["Hello", 108],
    ];
    expect(isWinningTicket(ticket)).toBe(true);
  });

  it("should return true for a complex winning ticket", () => {
    const ticket = [
      ["XOR", 88],
      ["MrsLovettsMeatPies", 80],
      ["Orchid", 105],
      ["VMRT", 84],
    ];
    expect(isWinningTicket(ticket)).toBe(true);
  });

  it("should return false for a complex losing ticket", () => {
    const ticket = [
      ["XOR", 88],
      ["MrsLovettsMeatPies", 80],
      ["Orchid", 105],
      ["VMRQ", 84],
    ];
    expect(isWinningTicket(ticket)).toBe(false);
  });

  it("should return false for a ticket with no matching characters", () => {
    const ticket = [["Q", 87]];
    expect(isWinningTicket(ticket)).toBe(false);
  });

  it("should return false for a ticket with mixed character codes", () => {
    const ticket = [
      ["ABC", 862],
      ["ABC", 65],
    ];
    expect(isWinningTicket(ticket)).toBe(false);
  });
});
