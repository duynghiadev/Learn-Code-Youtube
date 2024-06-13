var defaultConfig = {
  api: "http://domain-trang-khoa-hoc",
  apiVersion: "2.0",
  other: "other",
};

var exerciseConfig = {
  ...defaultConfig,
  api: "http://domain-trang-bai-tap",
};

console.log(exerciseConfig);
