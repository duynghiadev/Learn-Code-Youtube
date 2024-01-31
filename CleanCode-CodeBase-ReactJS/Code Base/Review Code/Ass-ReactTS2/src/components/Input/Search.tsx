import React from "react";
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import styled from 'styled-components'


const options = [
  { value: "Iphone" },
  { value: "Oppo" },
  { value: "Samsung" },
  { value: "Xiaomi" },
  { value: "Phone" },
];

const InputSearch = () => {
    return (
        <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            options={options}
            filterOption={(inputValue, option) => {
                 return option!.value.toUpperCase().includes(inputValue.toUpperCase())
            }}
        >
            <Input size="large" placeholder="large size" style={{width : "500px",borderRadius : "10px", margin : "auto"}} prefix={<SearchOutlined />} />
        </AutoComplete>
    )
}

const AutoCompleteCustom = styled(AutoComplete)`
    width: 500px;
`

export default InputSearch;