//set the initial values, limit and incrementals
for (let i = 100; i <= 200; i++) {
// check for didvisible by both 3 and 4
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  //check when divisible by 3
  else if (i % 3 === 0) {
    console.log("Loopy");
  }
  else if (i % 4 === 0) {
    console.log("Lighthouse");
  }
}