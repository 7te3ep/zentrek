const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});
let items = {};

function ask() {
   rl.question("name ", function (name) {
      rl.question("category ", function (cat) {
         rl.question("tag ", function (tag) {
            items[name] = { category: cat, tags: tag.split(" ") };
            console.log(items);
            ask();
         });
      });
   });
}
ask();
