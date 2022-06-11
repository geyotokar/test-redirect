import React from 'react'
import {Content, HugeTextContainer, Img} from '../../styles/components'

const Profile: React.FC = () => {
    return <Content align='left'>
        <Img bg='#6200EE'/>
        <h2>Это - страница с произвольным текстом</h2>
        <h3>Только авторизованные пользователи могут прочесть это</h3>
    </Content>
}

export default Profile