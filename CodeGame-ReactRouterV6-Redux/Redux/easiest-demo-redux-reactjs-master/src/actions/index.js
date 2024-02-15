export const tabClicked = (activeTab) => ({
    type: 'tabClicked',
    activeTab: activeTab
});

export const textFieldChange = (textFieldValue) => ({
    type: 'textFieldChange',
    textFieldValue: textFieldValue
});

export const selectChange = (selectedValue) => ({
    type: 'selectChange',
    selectedValue: selectedValue
});

export const checkboxChange = (checkedValue) => ({
    type: 'checkboxChange',
    checkedValue: checkedValue
});

export const radioChanged = (selectedOption) => ({
    type: 'radioChanged',
    selectedOption: selectedOption
});