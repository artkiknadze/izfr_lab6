export const add = (num1: number, num2: number): number | null => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return null;
  }
};
