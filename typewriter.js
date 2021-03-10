const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   setTimeout(() => {
//     //process.stdout.write(char);
//     console.log(char)
//   }, 1000)
// }

//setTimeout(() => {
//   process.stdout.write(char);
// }, 1000)

let i = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  },i)
  i += 500;
}