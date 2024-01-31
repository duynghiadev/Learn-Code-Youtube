import React from 'react';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { AutoComplete as AutuCompleteAnt, Input } from 'antd';
import styled from 'styled-components';

const options = [
    { value: "Iphone" },
    { value: "Oppo" },
    { value: "Samsung" },
    { value: "Xiaomi" },
];

const AutoComplete: React.FC = () => (
    <AutuCompleteAnt
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        options={options}
        style={{width: 500}}
    >
        <WrapperInput size="large" placeholder="large size" prefix={<SearchOutlined />} />
    </AutuCompleteAnt>
);

const WrapperInput = styled(Input)`
    border: none;
    border-radius: 10px;
    width: 500px;
`

export default AutoComplete;