/**
题目: 
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。


利用一个辅助栈帮助记忆每次push之后的最小值，
如果push的元素小于辅助栈中上一个最小值，则在辅助栈中push这个元素，
否则在辅助栈中push上一个最小元素

例如:
stack    [-2,  0, -3]
minStack [-2, -2, -3]
 */
class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];
  push(x: number): void {
    this.stack.push(x);
    if (this.minStack.length === 0) {
      this.minStack.push(0);
      return;
    }
    const prevMin = this.minStack[this.minStack.length - 1];
    this.minStack.push(Math.min(x, prevMin));
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  min(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
