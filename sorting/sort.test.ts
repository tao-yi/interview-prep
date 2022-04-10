import { bubbleSort } from "./bubbleSort";
import { mergeSort } from "./mergeSort";
import { quickSort } from "./quickSort";
import { selectSort } from "./selectSort";

describe("sorting", () => {
  it("bubble sort", () => {
    let input = [5, 2, 3, 1];
    expect(bubbleSort(input)).toEqual([1, 2, 3, 5]);

    input = [5, 1, 1, 2, 0, 0];
    expect(bubbleSort(input)).toEqual([0, 0, 1, 1, 2, 5]);
  });

  it("select sort", () => {
    let input = [5, 2, 3, 1];
    expect(selectSort(input)).toEqual([1, 2, 3, 5]);

    input = [5, 1, 1, 2, 0, 0];
    expect(selectSort(input)).toEqual([0, 0, 1, 1, 2, 5]);
  });

  it("quick sort", () => {
    let input = [5, 2, 3, 1];
    quickSort(input, 0, input.length - 1);
    expect(input).toEqual([1, 2, 3, 5]);

    input = [5, 1, 1, 2, 0, 0];
    quickSort(input, 0, input.length - 1);
    expect(input).toEqual([0, 0, 1, 1, 2, 5]);
  });

  it("merge sort", () => {
    let input = [5, 2, 3, 1];
    expect(mergeSort(input, 0, input.length - 1)).toEqual([1, 2, 3, 5]);

    input = [5, 1, 1, 2, 0, 0];
    expect(mergeSort(input, 0, input.length - 1)).toEqual([0, 0, 1, 1, 2, 5]);
  });
});
