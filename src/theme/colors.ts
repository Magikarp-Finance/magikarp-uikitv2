import { Colors } from './types'

export const baseColors = {
	failure: '#ED4B9E',
	primary: '#ff6600',
	primaryBright: '#53DEE9',
	primaryDark: '#0098A1',
	secondary: '#ff9853',
	success: '#31D0AA',
	warning: '#FFB237'
}

export const brandColors = {
	binance: '#F0B90B'
}
export const lightColors: Colors = {
	...baseColors,
	...brandColors,
	primary: '#d35400',
	secondary: '#402615',
	backgroundGlass: 'rgb(255, 255, 255,.2)',
	backgroundGlassPushed: 'rgb(255, 255, 255,.8)',
	hoverMenuGlass: 'rgba(255, 255, 255 ,.25)',
	borderMenuGlass: 'rgba(255, 255, 255 ,.2)',
	menuGlass: '#000000',
	background: '#FAF9FA',
	backgroundDisabled: '#E9EAEB',
	backgroundAlt: '#FFFFFF',
	contrast: '#191326',
	dropdown: '#F6F6F6',
	invertedContrast: '#FFFFFF',
	input: '#eeeaf4',
	inputSecondary: '#d7caec',
	tertiary: '#EFF4F5',
	text: '#000000',
	textDisabled: '#BDC2C4',
	textSubtle: '#3c3a3a',
	borderColor: '#E9EAEB',
	gradients: {
		bubblegum: 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)',
		cardHeader: 'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
		blue: 'linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)',
		violet: 'linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)',
		violetAlt: 'linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)'
	}
}

export const darkColors: Colors = {
	...baseColors,
	...brandColors,
	backgroundGlass: 'rgb(16, 18, 27,.2)',
	backgroundGlassPushed: 'rgb(16, 18, 27,.8)',
	hoverMenuGlass: 'rgba(12, 15, 25 ,.5)',
	borderMenuGlass: 'rgba(0, 0, 0 ,.5)',
	menuGlass: '#f9fafb',
	secondary: '#ff9853',
	background: '#100C18',
	backgroundDisabled: '#3c3742',
	backgroundAlt: '#27262c',
	contrast: '#FFFFFF',
	dropdown: '#1E1D20',
	invertedContrast: '#191326',
	input: '#483f5a',
	inputSecondary: '#66578D',
	primaryDark: '#0098A1',
	tertiary: '#353547',
	text: '#EAE2FC',
	textDisabled: '#666171',
	textSubtle: '#f9fafb',
	borderColor: '#524B63',
	gradients: {
		bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
		cardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
		blue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
		violet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
		violetAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)'
	}
}
