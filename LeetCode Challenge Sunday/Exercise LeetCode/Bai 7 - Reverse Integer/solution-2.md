# Giải thích thuật toán

❌❌ 👇👇👇 Bữa sau bắt đầu học từ solution-2 của bài 7 nhé 👇👇👇 ❌❌

## Intuition:

- The problem asks to reverse the digits of a given integer. The approach is to extract the digits one by one using modulo operator and then add them in reverse order.

## Approach:

1. Initialize a variable 'reverse' to 0. This variable will hold the reversed integer.

2. Initialize another variable 'num' to the given integer. We will use 'num' to avoid modifying the original input integer.

3. While the 'num' is not equal to 0, extract the rightmost digit of 'num' using the modulo operator (%). Store this digit in a variable called 'digit'.

4. Multiply 'reverse' by 10 and add the extracted digit 'digit' to it.

5. Divide 'num' by 10 and update 'num' with the quotient. This will remove the rightmost digit of 'num' in each iteration.

6. Repeat steps 3-5 until 'num' becomes 0.

7. Check if the reversed integer 'reverse' is within the range of a 32-bit signed integer. If it is not, return 0.

8. Return the reversed integer 'reverse'.

## Complexity:

- Time Complexity: The time complexity of the solution is O(log(x)). We need to extract the digits of the integer one by one until there are no more digits left. This process continues until the integer becomes 0. The number of iterations required depends on the number of digits in the integer, which is proportional to log(x) with base 10.

- Space Complexity: The space complexity of the solution is O(1). We are only using a constant amount of extra space to store the reversed integer and a few other variables.
