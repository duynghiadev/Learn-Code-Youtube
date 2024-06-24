import React from "react";
import styled from 'styled-components'

type Props = {
    image: any,
    title1: string,
    title2: string
}

const ServiceBtn = ({ image, title1, title2 }: Props) => {
    return (
        <Container>
            <Image src={image} />
            <Content>
                <Title>{title1}</Title>
                <Title>{title2}</Title>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: transparent;
`
const Image = styled.img`
    margin-right: 5px;
`
const Content = styled.div`
    
`
const Title = styled.div`
    color: white;
    font-size: 12px;
`

export default ServiceBtn