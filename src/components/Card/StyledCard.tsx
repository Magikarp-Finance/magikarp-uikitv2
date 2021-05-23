import styled, { DefaultTheme } from 'styled-components'
import { space } from 'styled-system'
import { CardProps } from './types'

interface StyledCardProps extends CardProps {
	theme: DefaultTheme
}

/**
 * Priority: Warning --> Success --> Active
 */

const StyledCard =
	styled.div <
	StyledCardProps >
	`
	position:relative;
  &::before
  {
	content:"";
	position:absolute;
	display:block;
	width:100%;
	height:100%;
	top:0;
	right:0;
	border-radius: 32px;
	backdrop-filter:blur(20px);
	webkit-backdrop-filter:blur(20px);
	background-color: ${({ theme }) => theme.colors.hoverMenuGlass};
  }
  ${({ theme }) =>
		theme.isDark
			? `
		border-top:1px rgba(255,255,255,.5) solid;
  		border-left:1px rgba(255,255,255,.5) solid;
		border-bottom:1px rgba(0,0,0,.3) solid;
  		border-right:1px rgba(0,0,0,.3) solid;
		  `
			: `
		border-bottom:1px rgba(0,0,0,.3) solid;
  		border-right:1px rgba(0,0,0,.3) solid;
		 border-top:1px rgba(255,255,255,.5) solid;
  		border-left:1px rgba(255,255,255,.5) solid;
	  `}
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 6px 6px 12px rgb(0 0 0 / 50%);
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? 'textDisabled' : 'text']};
  position: relative;
  

  ${space}
`

StyledCard.defaultProps = {
	isActive: false,
	isSuccess: false,
	isWarning: false,
	isDisabled: false
}

export default StyledCard
