const spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
//loop each array and run setTimeout(), adding 200mc + array[i] * 200

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write("\r" + spinner[i]);
  }, 100 + i * 200);
}

//need to add a newline at the end
let totalCount = 100 + spinner.length * 200
setTimeout(() => {
  process.stdout.write("\n")
}, totalCount);