// this is code example promise reject

function slowSalary(n1, n2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Kế hoạch tan vỡ, nhanh chóng tăng lương"));
    }, 3000);
  });
}

async function increaseSalary(base, increase) {
  let newSalary;
  try {
    newSalary = await slowSalary(base, increase);
  } catch (error) {
    console.log("Error get newSalary:", error.message);
    newSalary = base * 2;
  }
  console.log("newSalary:", newSalary);
  return newSalary;
}

increaseSalary(1000, 100);
