//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = number => {
  if (number <= 0) {
    return "Only positive numbers are allowed";
  }
  if (number % 2 === 0) return number / 2;
  if (number % 2 === 1) return number * 3 + 1;
};
