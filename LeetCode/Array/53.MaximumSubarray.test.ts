import { DP, SlidingWindow } from "./53.MaximumSubarray";

describe("MaxSubArray", () => {
  test("[-2,1,-3,4,-1,2,1,-5,4]", () => {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    // [4,-1,2,1] has the largest sum = 6.
    const output = 6;
    expect(SlidingWindow.maxSubArray(input)).toBe(output);
    expect(DP.maxSubArray(input)).toBe(output);
  });

  test("[1]", () => {
    const input = [1];
    const output = 1;
    expect(SlidingWindow.maxSubArray(input)).toBe(output);
    expect(DP.maxSubArray(input)).toBe(output);
  });

  test("[-2]", () => {
    const input = [-2];
    const output = -2;
    expect(SlidingWindow.maxSubArray(input)).toBe(output);
    expect(DP.maxSubArray(input)).toBe(output);
  });

  test("[5,4,-1,7,8]", () => {
    const input = [5, 4, -1, 7, 8];
    const output = 23;
    expect(SlidingWindow.maxSubArray(input)).toBe(output);
    expect(DP.maxSubArray(input)).toBe(output);
  });
});
