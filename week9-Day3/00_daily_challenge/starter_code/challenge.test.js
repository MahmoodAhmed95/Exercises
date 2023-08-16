const countTheBits = require("./challenge");

describe("countTheBits", () => {
  it("counts bits in binary representation of a number", () => {
    expect(countTheBits(0)).toBe(0); // 0b0 has 0 bits set to 1
    expect(countTheBits(1)).toBe(1); // 0b1 has 1 bit set to 1
    expect(countTheBits(2)).toBe(1); // 0b10 has 1 bit set to 1
    expect(countTheBits(3)).toBe(2); // 0b11 has 2 bits set to 1
    expect(countTheBits(4)).toBe(1); // 0b100 has 1 bit set to 1
    expect(countTheBits(5)).toBe(2); // 0b101 has 2 bits set to 1
    expect(countTheBits(10)).toBe(2); // 0b1010 has 2 bits set to 1
    expect(countTheBits(13)).toBe(3); // 0b1101 has 3 bits set to 1
    expect(countTheBits(255)).toBe(8); // 0b11111111 has 8 bits set to 1
    expect(countTheBits(1024)).toBe(1); // 0b10000000000 has 1 bit set to 1
  });
});
