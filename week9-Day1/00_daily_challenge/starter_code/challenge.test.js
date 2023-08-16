const getNumForIP = require("./challenge"); // Adjust the path as needed

describe("getNumForIP", () => {
  it('returns 1 for IP address "0.0.0.1"', () => {
    expect(getNumForIP("0.0.0.1")).toBe(1);
  });

  it('returns 512 for IP address "0.0.2.0"', () => {
    expect(getNumForIP("0.0.2.0")).toBe(512);
  });

  it('returns 3231474447 for IP address "192.156.99.15"', () => {
    expect(getNumForIP("192.156.99.15")).toBe(3231474447);
  });

  it('returns 167772161 for IP address "10.0.0.1"', () => {
    expect(getNumForIP("10.0.0.1")).toBe(167772161);
  });

  it('returns 0 for IP address "0.0.0.0"', () => {
    expect(getNumForIP("0.0.0.0")).toBe(0);
  });

  it('returns 255 for IP address "0.0.0.255"', () => {
    expect(getNumForIP("0.0.0.255")).toBe(255);
  });

  it('returns 256 for IP address "0.0.1.0"', () => {
    expect(getNumForIP("0.0.1.0")).toBe(256);
  });
});
