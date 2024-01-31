setTimeout(function () {
  console.log("Dòng này sẽ in ra sau");
}, 0);
// setTimeout là tác vụ bất động bộ (async)

console.log("Dòng này sẽ in ra trước"); // Đây là tác vụ đồng bộ (sync)
