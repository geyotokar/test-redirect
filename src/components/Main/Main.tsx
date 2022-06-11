import React from 'react'
import {Content, HugeTextContainer, Img} from '../../styles/components'

const Main: React.FC = () => {
    return <Content align='left'>
        <Img bg='#9CE451'/>
        <HugeTextContainer>
            <h1>
                Это -<br/>главная страница
            </h1>
        </HugeTextContainer>
    </Content>
}

export default Main