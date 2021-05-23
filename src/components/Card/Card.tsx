import React from 'react'
import styled from 'styled-components'
import StyledCard from './StyledCard'
import { CardProps } from './types'

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100%;
	height: 100%;
	border-radius: 32px;
`

const Card: React.FC<CardProps> = ({ ribbon, children, ...props }) => {
	return (
		<StyledCard {...props}>
			<Wrapper>
				{ribbon}
				{children}
			</Wrapper>
		</StyledCard>
	)
}
export default Card
