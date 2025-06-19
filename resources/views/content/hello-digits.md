# Hello, digits!

The other day I came across a note from many years ago with some math problems, and one of the problems was to
represent the number 6 using the same digit 4 times doing basic arithmetic operations.
For example, `2 * 2 * 2 - 2 = 6` or `3 + 3 + 3 - 3 = 6`. 6 is quite easy, and my note had the solutions using all
digits, and then also 10 for some reason.

I looked at the note for a couple of seconds, and then a brilliant idea crossed my mind - why work if I can spend my
time on an elementary school maths problem? So, I decided to solve this problem representing all numbers from 0 to 9. And I decided to try it with 3 digits as well.

---

_The rule is that you use the same digit for 3 or 4 times and only basic arithmetic operations (+, -, \*, /), square roots, factorials and parenthesis are allowed._

---

## 0 ✅ ✅

Representing 0 using the same digit is simple for any number of digits grater than 1. \
For any integer n, `n - n = 0` and `n * 0 = 0` => `n * (n - n) = 0`.

```matlab
# 3 digits:
✅ (n - n) * n = 0
```

```matlab
# 4 digits:
✅ (n - n) * n * n = 0
```

## 1 ✅ ✅

1 is also simple. \
For any integer n where `n > 0`, `n / n = 1` and `sqrt(n * n) = n`.
And for 0s we can use factorials, `0! = 1`.

```matlab
# 3 digits:
✅ 0! + 0 + 0 = 1
✅ sqrt(n * n) / n = 1
```

```matlab
# 4 digits:
✅ 0! + 0 + 0 + 0 = 1
✅ (n * n) / (n * n) = 1
```

## 2 ✅ ✅

2 is still simple. \
For any integer n where `n > 0`, `(n + n) / n = 2`. And for 0s we can again use factorials.

```matlab
# 3 digits:
✅ 0! + 0! + 0 = 2
✅ (n + n) / n = 2
```

```matlab
# 4 digits:
✅ 0! + 0! + 0 + 0 = 2
✅ (n + n) / sqrt(n * n) = 2
```

### Patterns

After 2 there aren't really any simple formulas to get all the results, except for 3 with 4 digits.
However there are some patterns we can use.

1. **Same number**, for any integer n, `n + n - n = n`. If we're solving for 5 we can use `5 + 5 - 5 = 5`.

2. **Previous and next numbers**, for any integer n, where `n > 2`

```matlab
(n - 1) + (n - 1) / (n - 1) = n
(n + 1) - (n + 1) / (n + 1) = n
```

If we're solving for 5, we can use `4 + 4 / 4 = 5` and `6 - 6 / 6 = 5`.

3. **Squares** - `3 * 3 = 9` and `sqrt(9) = 3`, if there's a solution for one, it can be replicated for another one, and the same can be done for **2 and 4**.

## 3 ❌ ✅

For any integer n where `n > 0`, `3 * n / n = 3` and we can use this for solving with 4 digits, but there's no
formula for solving with 3 digits.

```matlab
# 3 digits:
✅ 0! + 0! + 0! = 3
✅ 1 + 1 + 1 = 3
✅ 2 + 2 / 2 = 3
✅ 3 + 3 - 3 = 3
✅ 4 - 4 / 4 = 3
❌ 5 couldn't find a solution
❌ 6 couldn't find a solution
❌ 7 couldn't find a solution
❌ 8 couldn't find a solution
✅ sqrt(9) + sqrt(9) - sqrt(9) = 3
```

```matlab
# 4 digits:
✅ 0! + 0! + 0! + 0 = 3
✅ (n + n + n) / n = 3
```

## 4 ❌ ❌

```matlab
# 3 digits:
❌ 0 impossible
❌ 1 impossible
✅ sqrt(2 * 2) * 2 = 4
✅ 3 + 3 / 3 = 4
✅ 4 + 4 - 4 = 4
✅ 5 - 5 / 5 = 4
❌ 6 couldn't find a solution
❌ 7 couldn't find a solution
✅ sqrt(8 + sqrt(8 + 8)) = 4
✅ sqrt(9) + 9 / 9 = 4
```

```matlab
# 4 digits:
✅ 0! + 0! + 0! + 0! = 4
✅ 1 + 1 + 1 + 1 = 4
✅ 2 + 2 + 2 - 2 = 4
✅ sqrt(3 * 3) + 3 / 3 = 4
✅ 4 + 4 * (4 - 4) = 4
✅ sqrt(5 * 5) - 5 / 5 = 4
✅ 6 - (6 + 6) / 6 = 4
❌ 7 couldn't find a solution
✅ sqrt(8 + 8) * 8 / 8 = 4
✅ 9 / sqrt(9) + 9 / 9 = 4
```

## 5 ❌ ✅

```matlab
# 3 digits:
❌ 0 impossible
❌ 1 impossible
❌ 2 couldn't find a solution
✅ 3! - 3 / 3 = 5
✅ 4 + 4 / 4 = 5
✅ 5 + 5 - 5 = 5
✅ 6 - 6 / 6 = 5
❌ 7 couldn't find a solution
❌ 8 couldn't find a solution
✅ sqrt(9)! - 3 / 3 = 5
```

```matlab
# 4 digits:
✅ (0! + 0! + 0!)! - 0! = 5
✅ (1 + 1 + 1)! - 1 = 5
✅ 2 + 2 + 2 / 2 = 5
✅ (3 + 3) / 3 + 3 = 5
✅ sqrt(4 + 4) + 4 / 4 = 5
✅ 5 * 5 / sqrt(5 * 5) = 5
✅ sqrt(6 * 6) - 6 / 6 = 5
✅ 7 - (7 + 7) / 7 = 5
✅ sqrt(8 + 8) + 8 / 8 = 5
✅ (9 + 9) / 9 + sqrt(9) = 5
```

## 6 ✅ ✅

```matlab
# 3 digits:
✅ (0! + 0! + 0!)! = 6
✅ (1 + 1 + 1)! = 6
✅ 2 + 2 + 2 = 6
✅ 3 * 3 - 3 = 6
✅ 4 + 4 - sqrt(4) = 6
✅ 5 + 5 / 5 = 6
✅ 6 + 6 - 6 = 6
✅ 7 - 7 / 7 = 6
✅ 8 - sqrt(sqrt(8 + 8)) = 6
✅ 9 - 9 / sqrt(9) = 6
```

```matlab
# 4 digits:
✅ (0! + 0! + 0! + 0)! = 6
✅ (1 + 1 + 1 * 1)! = 6
✅ 2 + 2 + 2 - 2 = 6
✅ 3 + 3 + 3 - 3 = 6
✅ (4 - 4 / 4) * sqrt(4) = 6
✅ sqrt(5 * 5) + 5 / 5 = 6
✅ 6 + 6 * (6 - 6) = 6
✅ sqrt(7 * 7) - 7 / 7 = 6
✅ 8 - (8 + 8) / 8 = 6
✅ 9 - sqrt(9) + 9 - 9 = 6
```

## 7 ❌ ❌

```matlab
# 3 digits:
❌ 0 impossible
❌ 1 impossible
❌ 2 couldn't find a solution
✅ 3! + 3 / 3 = 7
❌ 4 couldn't find a solution
❌ 5 couldn't find a solution
✅ 6 + 6 / 6 = 7
✅ 7 + 7 - 7 = 7
✅ 8 - 8 / 8 = 7
✅ sqrt(9)! + 9 / 9 = 7
```

```matlab
# 4 digits:
✅ (0! + 0! + 0!)! + 0! = 7
✅ (1 + 1 + 1)! + 1 = 7
❌ 2 couldn't find a solution
✅ 3 + 3 + 3 / 3 = 7
✅ 4 + 4 - 4 / 4 = 7
✅ 5 + (5 + 5) / 5 = 7
✅ sqrt(6 * 6) + 6 / 6 = 7
✅ 7 + 7 * (7 - 7) = 7
✅ sqrt(8 * 8) - 8 / 8 = 7
✅ 9 - (9 + 9) / 9 = 7
```

## 8 ❌ ❌

```matlab
# 3 digits:
❌ 0 impossible
❌ 1 impossible
✅ 2 * 2 * 2 = 8
❌ 3 couldn't find a solution
✅ 4 + sqrt(4 * 4) = 8
❌ 5 couldn't find a solution
❌ 6 couldn't find a solution
✅ 7 + 7 / 7 = 8
✅ 8 + 8 - 8 = 8
✅ 9 - 9 / 9 = 8
```

```matlab
# 4 digits:
❌ 0 impossible
❌ 1 impossible
✅ 2 + 2 + 2 + 2 = 8
✅ 3 * 3 - 3 / 3 = 8
✅ 4 + 4 + 4 - 4 = 8
❌ 5 couldn't find a solution
✅ 6 + (6 + 6) / 6 = 8
✅ sqrt(7 + 7) + 7 / 7 = 8
✅ 8 + 8 * (8 - 8) = 8
✅ sqrt(9) - 9 / 9 = 8
```

## 9 ❌ ❌

```matlab
# 3 digits:
❌ 0 impossible
❌ 1 impossible
❌ 2 couldn't find a solution
✅ 3 + 3 + 3 = 9
❌ 4 couldn't find a solution
❌ 5 couldn't find a solution
❌ 6 couldn't find a solution
❌ 7 couldn't find a solution
✅ 8 + 8 / 8 = 9
✅ 9 + 9 - 9 = 9
```

```matlab
# 4 digits:
❌ 0 impossible
❌ 1 impossible
❌ 2 couldn't find a solution
✅ 3 * 3 * (3 / 3) = 9
✅ 4 + 4 + 4 / 4 = 9
✅ 5 + 5 - 5 / 5 = 9
❌ 6 couldn't find a solution
✅ 7 + (7 + 7) / 7 = 9
✅ sqrt(8 + 8) + 8 / 8 = 9
✅ 9 + 9 * (9 - 9) = 9
```

That is it, but there are cases when it's impossible or I couldn't find a solution. In most cases they're
impossible, I'll just need to prove them. I'll publish an update if I do that. I guess it will be in a couple of
years, when I will accidentally stumble upon this article.
