import {createGlobalStyle} from 'styled-components'

// MEDIA SIZES
export const sizes = {
    mobile: '375px',
    tablet: '770px',
    laptop: '1160px'
}
export const devices = {
    mobile: `(min-width: ${sizes.mobile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`
}

// COLORS
export const colors = {
    font: '#3A3A3A',
    secondaryFont: '#777777',
    bg: '#F0F0F3',
    shadow: '#AEAEC0',
    success: '#90EE90',
    danger: '#F44336'
}

export default createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1 {
    position: absolute;
    top: 110px;
    font-weight: 900;
    @media ${devices.mobile} {top: 160px; font-size: 58px}
    @media ${devices.tablet} {top: 140px; font-size: 100px}
  }
  h2, h3, h4 {
    margin: 10px 0;
  }
  h2 {
    font-size: 50px;
    font-weight: 900;
    @media ${devices.mobile} {font-size: 30px; margin: 20px 0 0 10px}
    @media ${devices.tablet} {font-size: 50px; margin: 20px 0 0 100px}
  }
  h3 {
    color: ${colors.font};
    @media ${devices.mobile} {font-size: 17px; margin: 10px 0 0 10px}
    @media ${devices.tablet} {font-size: 26px; margin: 10px 0 0 100px}
  }
  h4 {
    font-size: 26px;
    color: ${colors.font};
  }
  h5 {
    margin: 10px 0 5px 0;
    font-size: 16px;
  }
`