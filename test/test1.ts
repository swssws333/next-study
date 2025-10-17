/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1: number[], l2: number[]) {
  const l1Reversed = l1.reverse();
  const l2Reversed = l2.reverse();
  console.log(l1Reversed, l2Reversed);

  const count = l1.length > l2.length ? l1.length : l2.length

  const res: number[] = []

  if (l1Reversed.length >= l2Reversed.length) {
    for (let i = 0; i < l1Reversed.length; i++) {
      const l1iValue = l1Reversed[i];
      let l2iValue = l2Reversed[i];
      if (l2iValue == 0 || l2iValue == undefined) {
        l2iValue = 0
      }
      const number = l1iValue + l2iValue;
      if (number >= 10) {
        const geWei = number.toString()[1];

        res[i] = Number(geWei);
        const fuWei = res[i - 1];



      } else {

        res[i] = number;
      }

    }
  } else {
    for (let i = 0; i < l2Reversed.length; i++) {
      let l1iValue = l1Reversed[i];
      let l2iValue = l2Reversed[i];
      if (l1iValue == 0 || l1iValue == undefined) {
        l1iValue = 0
      }
      res[i] = l1iValue + l2iValue;
    }
  }

  return res.reverse()

};

const l1 = [2, 4, 3]
const l2 = [5, 6, 4]

const res = addTwoNumbers(l1, l2);
console.log(res)

