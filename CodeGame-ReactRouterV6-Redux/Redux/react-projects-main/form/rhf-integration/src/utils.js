export const countries = [
  { label: "India", value: "IND" },
  { label: "Italy", value: "ITA" },
  { label: "United Kingdom", value: "GBR" },
  { label: "United States of America", value: "USA" },
];

export const sliderMarks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

export const radioOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

export const checkboxOptions = [
  { label: "Museum", value: "Museum" },
  { label: "Waterfall", value: "Waterfall" },
  { label: "Historical Fort", value: "Historical Fort" },
];

export const generateRequiredRule = (fieldName) => {
  return {
    required: `${fieldName} is a required field`,
  };
};
