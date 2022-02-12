import { containsDuplicate } from "./217.ContainsDuplicate";

describe("ContainsDuplicate", () => {
  test("nums=[1,2,3,1]", () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toBe(true);
  });

  test("nums=[1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    expect(containsDuplicate(nums)).toBe(false);
  });

  test("nums=[1,1,1,3,3,4,3,2,4,2]", () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicate(nums)).toBe(true);
  });
});
