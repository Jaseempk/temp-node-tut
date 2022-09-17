const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(first);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(second);

    writeFile(
      "./content/result-async.txt",
      `here is the result:${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const third = result;
        console.log(third);
        console.log("done with the current task");
      }
    );
  });
});

console.log("starting the next task");
