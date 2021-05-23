import React from 'react'
import styled, { keyframes, DefaultTheme } from 'styled-components'
import { Text } from '../../../components/Text'
import { Colors } from '../../../theme/types'
import { MENU_ENTRY_HEIGHT } from '../config'

export interface Props {
	secondary?: boolean
	isActive?: boolean
	isPushed?: boolean
	theme: DefaultTheme
}

const LinkLabel =
	styled.div <
	{ isPushed: boolean } >
	`
  color: ${({ isPushed, theme }) => (isPushed ? theme.colors.textSubtle : 'transparent')};
  transition: color 0.4s;
  flex-grow: 1;
`

const MenuEntry =
	styled.div <
	Props >
	`
position:relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  ${({ isPushed }) =>
		isPushed &&
		`
    margin:0 14px 0 14px;
    border-radius:6px;
    padding-left:5px;
  
  `}
  ${({ isPushed }) =>
		!isPushed &&
		`
    padding-left:12px;
  `}
  ${({ secondary }) =>
		secondary &&
		`
    padding: 0 32px ;
  `}
  ${({ isActive, theme }) =>
		isActive &&
		`
    &::before{
      content:"";
      position:absolute;
      width:5px;
      height:100%;
      left:-14px;
      display:block;
      background-color:${theme.colors.primary};
      border-radius:  5px 0 0 5px;
      

    }
  `}

  font-size: ${({ secondary }) => (secondary ? '14px' : '16px')};
  color: ${({ theme }) => theme.colors.textSubtle};
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }
  border:1px solid transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverMenuGlass};
    border:1px solid ${({ theme }) => theme.colors.borderMenuGlass};
    box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
  }

  // Safari fix
  flex-shrink: 0;

`
MenuEntry.defaultProps = {
	secondary: false,
	isActive: false,
	role: 'button'
}
/* box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : "none")}; */
const LinkStatus = styled(Text)`
  border-radius: ${({ theme }) => theme.radii.default};
  background-color:${({ theme }) => theme.colors.hoverMenuGlass};
  font-size:10px;
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.borderMenuGlass};
  box-shadow: none;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
`

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed)

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel }
