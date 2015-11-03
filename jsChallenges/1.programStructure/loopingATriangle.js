// HINTS...
// You can start with a program that simply prints out the numbers 1 to 7, which you can derive by making a few modifications to the even-number-printing example given earlier in the chapter, where the for loop was introduced.

// Now consider the equivalence between numbers and strings of hash characters. You can go from 1 to 2 by adding 1 (+= 1). You can go from "#" to "##" by adding a character (+= "#"). Thus, your solution can closely follow the number-printing program.

// code below here:
for (var line = "#"; line.length < 8; line += "#" ) {
  console.log(line);
}
