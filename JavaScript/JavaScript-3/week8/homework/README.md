# Step 1: Closure

We have an array with the numbers from 1 to 1000. Now we are interested in all numbers in that array which are divisible by 3. And then divisible by 10. And then by 21. We have implemented that using for loops; Your task is now, to implement a closure (a function factory), that generates functions which allow us to determine all numbers that are divisible by "WHAT EVER NUMBER".

> Hint: Use `map`, `filter` and `reduce`. Think about the sizes of your arrays and then choose whether you need `map`, `filter` or `reduce`

```javascript
  let arr = [];
  for( let i=1; i<=1000;i++){
      arr.push(i);
  }
  console.log(arr);

  // here please start your solution
  // using closures, functions and (map,filter,reduce)
  const divisibleFactory = function(z){

  }
```

Once you have the factory function above working well for 3, 10 and 21, create an array which uses this factory above to calculate the number of item in arr above which are divisible by numbers between 1-30 i.e. your array will contain 30 items and looks something like this:

```javascript
[1000, 500, 333, 250, 200, 166, 142, 125, 111, 100, 90, 83, 76, 71, 66, 62, 58, 55, 52, 50, 47, 45, 43, 41, 40, 38, 37, 35, 34, 33, 32]

// 1000 items are divisible by 1, 500 by 2 and son on...
```

# Step 2: Continuing with data loading, processing and rendering

Using the movies json file from the [previous exercise](https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json) as the source, extend your appliation to do the following:

  1. Give each movie a tag: Good (>= 7), Average (>= 4 and < 7), Bad (< 4) based on the ratings.
  2. Render all the movies as a list (similar to how you were presenting Github repositories in the homework before).
  3. Add a input field, and a button to perform search. Use .filter method on arrays to filter on the titles.
  4. Add 4 radio buttons for each tag + All tag (All, Good, Average, Bad) and filter the movies based on the tag selected.
  5. Display only the movies in the list which match the two filter criterion above.
  6. Display the average rating of the movies being filtered and displayed.

Remember to use the following to help with your code:

  1. Promises to simplify data loading, covered in this lecture.
  2. Filter, map, reduce functions + Arrow functions, covered in last lecture.