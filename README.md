# Unexpected NaN Comparison in JavaScript

This repository demonstrates a common, yet subtle, error in JavaScript involving the comparison of NaN (Not a Number) values.

## The Problem

JavaScript's `NaN` value is unique in that it's never equal to itself, even when using the strict equality operator (`===`). This behavior often leads to unexpected results when comparing values that might potentially be `NaN`.

The example `bug.js` shows a function that attempts to compare two numbers for equality.  However, it fails when the numbers are both `NaN`.

## The Solution

The solution involves using the `Number.isNaN()` function to explicitly check if a value is `NaN`. This function reliably distinguishes `NaN` from other values.

The corrected code is provided in `bugSolution.js`. 

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a text editor or IDE.
3. Open your browser's developer console or use Node.js to run the JavaScript code. Observe the outputs.