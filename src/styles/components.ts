import styled, {css} from 'styled-components'
import {colors, devices, sizes} from './global'

export const paper = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 1em;
  background-color: ${colors.bg};
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  overflow: hidden;
`

export const SecondaryText = styled.div`
  ${paper};
  flex-direction: column;
  align-items: inherit;
  justify-content: inherit;
  padding: 0 0 10px 0;
  width: 200px;
  border-radius: 5px;
  font-size: 0.9em;
  color: ${colors.secondaryFont};
`

// MAIN

interface ContentProps {
    align: 'center' | 'left'
}

export const Content = styled.main<ContentProps>`
  ${paper};
  align-items: ${props => props.align};
  flex-direction: column;
  top: 10px;
  height: 80vh;
  @media ${devices.mobile} {width: ${sizes.mobile}}
  @media ${devices.tablet} {width: ${sizes.tablet}}
  @media ${devices.laptop} {width: ${sizes.laptop}}
`

export const JustifyContent = styled(Content)`
  justify-content: center;
`

// CONTAINERS

export const NavBar = styled.nav`
  ${paper};
  top: 5px;
  height: 40px;
  color: ${colors.secondaryFont};
  @media ${devices.mobile} {width: ${sizes.mobile}}
  @media ${devices.tablet} {width: ${sizes.tablet}}
  @media ${devices.laptop} {width: ${sizes.laptop}}
`

export const Frame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  border-radius: 1em;
  box-shadow: inset 0 -2px 6px 0 hsla(0, 0%, 0%, 0.2);
  overflow: scroll;
  @media ${devices.mobile} {justify-content: center}
  @media ${devices.tablet} {justify-content: left}
`

export const TextContainer = styled.div`
  position: relative;
  margin: 0 0 10px 0;
  padding: 0 10px;
  height: 100px;
  font-size: 0.9em;
  background-color: #FFFFFF;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 15px;
    background: linear-gradient(180deg, transparent, #FFFFFF 50%);
  }
`

export const HugeTextContainer = styled.div`
  padding-left: 100px;
`

// ASSETS
export const Img = styled.img<{bg: string}>`
  margin: -10px;
  height: 60%;
  width: 105%;
  background-color: ${props => props.bg};
`

export const Button = styled.button`
  padding: 7px 5px;
  border: none;  
  border-radius: 5px;
  font-weight: 400;
  color: ${colors.font};
  background-color: #FFFFFF;
  &:hover {
      background-color: ${colors.success};
    }
`