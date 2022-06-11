import React from 'react'
import {Content, Frame, paper, TextContainer, Img} from '../../styles/components'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {AppStateType} from '../REDUX'
import {devices} from '../../styles/global'

const News: React.FC = () => {
    const news = useSelector((state:AppStateType) => state.news)
    return <Content align='left'>
        <Frame>
            {news.map(n => <NewsItem key={n.id} img={n.img} header={n.header} text={n.text} bg={n.bg}/>)}
        </Frame>
    </Content>
}

const NewsItem: React.FC<PropsType> = (props) => {
    return <NewsArticle>
        <Img src={props.img} alt='' bg={props.bg}/>
        <TextContainer>
            <h5>{props.header}</h5>
            <div>{props.text}</div>
        </TextContainer>
    </NewsArticle>
}

export default News

const NewsArticle = styled.article`
  ${paper};
  padding: 0;
  flex-wrap: wrap;
  margin: 10px;
  height: 200px;
  overflow: hidden;
  @media ${devices.mobile} {width: 350px}
  @media ${devices.tablet} {width: 363px}
`

type PropsType = {
    key: number
    header: string
    text: string
    img: string
    bg: string
}