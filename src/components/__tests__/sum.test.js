import { sum } from "../sum";

test("Sum function should calculate sum of two numbers", () => {
  const total = sum(2, 3);

  //Assertion
  expect(total).toBe(5);
});
