import React, { useEffect, useState } from 'react'
import noop from 'lodash/noop'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import Flex from '../../components/Box/Flex'
import Heading from '../../components/Heading/Heading'
import styled from 'styled-components'
import { MenuEntry } from './components/MenuEntry'
import Menu from './Menu'
import { LangType } from './types'
import { links } from './config'
import { CardsLayout } from '../../components/Layouts'
import { Card, CardBody, CardHeader, CardFooter, CardRibbon } from '../../components/Card'

export default {
	title: 'Widgets/Menu',
	component: Menu,
	argTypes: {}
}

const langs: LangType[] = [ ...Array(20) ].map((_, i) => ({ code: `en${i}`, language: `English${i}` }))

// This hook is used to simulate a props change, and force a re rendering
const useProps = () => {
	const [ props, setProps ] = useState({
		account: '0xbdda50183d817c3289f895a4472eb475967dc980',
		login: noop,
		logout: noop,
		isDark: false,
		toggleTheme: noop,
		langs,
		setLang: noop,
		currentLang: 'EN',
		cakePriceUsd: 0.023158668932877668,
		links,
		profile: null
	})

	useEffect(() => {
		const interval = setInterval(() => {
			setProps({
				account: '0xbdda50183d817c3289f895a4472eb475967dc980',
				login: noop,
				logout: noop,
				isDark: false,
				toggleTheme: noop,
				langs,
				setLang: noop,
				currentLang: 'EN',
				tokenPriceUsd: 0.023158668932877668,
				tokenAltPriceUsd: 0.4668,
				links,
				profile: null
			})
		}, 2000)
		return () => {
			clearInterval(interval)
		}
	}, [])

	return props
}
const StyledFarmStakingCard = styled(Card)`
  background:  linear-gradient(
    to right top,
    #cf4af3,
    #e73bd7,
    #f631bc,
    #fd31a2,
    #ff3a8b,
    #ff4b78,
    #ff5e68,
    #ff705c,
    #ff8c51,
    #ffaa49,
    #ffc848,
    #ffe652
   );
  
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const EarnAssetCard = () => {
	return (
		<StyledFarmStakingCard>
			<CardBody>
				<Heading color='contrast' size='lg'>
					Earn
				</Heading>
				<CardMidContent color='invertedContrast'>aaaaa</CardMidContent>
				<Flex justifyContent='space-between'>
					<Heading color='contrast' size='lg'>
						in Pools
					</Heading>
				</Flex>
			</CardBody>
		</StyledFarmStakingCard>
	)
}
export const Connected: React.FC = () => {
	const props = useProps()
	return (
		<BrowserRouter>
			<Menu {...props}>
				<div>
					<Heading as='h1' mb='8px'>
						Page body
					</Heading>
					<CardsLayout>
						<Card>
							<CardBody>
								<Heading size='xl' mb='24px'>
									body
								</Heading>
							</CardBody>
							<CardFooter>footer</CardFooter>
						</Card>
						<EarnAssetCard />
						<Card>aaa</Card>
						<Card>aaa</Card>
						<Card>aaa</Card>
						<Card>aaa</Card>
					</CardsLayout>
				</div>
			</Menu>
		</BrowserRouter>
	)
}

export const NotConnected: React.FC = () => {
	return (
		<BrowserRouter>
			<Menu
				account={null}
				login={noop}
				logout={noop}
				isDark
				toggleTheme={noop}
				langs={langs}
				setLang={noop}
				currentLang='EN'
				links={links}
			>
				<div>
					<h1>Page body</h1>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</div>
			</Menu>
		</BrowserRouter>
	)
}

export const WithNoProfile: React.FC = () => {
	return (
		<BrowserRouter>
			<Menu
				account='0xbdda50183d817c3289f895a4472eb475967dc980'
				login={noop}
				logout={noop}
				isDark={false}
				toggleTheme={noop}
				langs={langs}
				setLang={noop}
				currentLang='EN'
				tokenPriceUsd={0.23158668932877668}
				links={links}
				profile={{
					profileLink: '/profile',
					noProfileLink: '/no-profile'
				}}
			>
				<div>
					<Heading as='h1' mb='8px'>
						Page body
					</Heading>
				</div>
			</Menu>
		</BrowserRouter>
	)
}

export const WithProfile: React.FC = () => {
	return (
		<BrowserRouter>
			<Menu
				account='0xbdda50183d817c3289f895a4472eb475967dc980'
				login={noop}
				logout={noop}
				isDark={false}
				toggleTheme={noop}
				langs={langs}
				setLang={noop}
				currentLang='EN'
				tokenPriceUsd={0.23158668932877668}
				links={links}
				profile={{
					username: 'pancakeswap',
					image: 'https://pancakeswap.finance/images/nfts/blueberries-preview.png',
					profileLink: '/profile',
					noProfileLink: '/no-profile'
				}}
			>
				<div>
					<Heading as='h1' mb='8px'>
						Page body
					</Heading>
					<CardsLayout>
						<Card>aaa</Card>
					</CardsLayout>
				</div>
			</Menu>
		</BrowserRouter>
	)
}

export const MenuEntryComponent: React.FC = () => {
	return (
		<Flex justifyContent='space-between' p='16px' style={{ backgroundColor: 'wheat' }}>
			<MenuEntry>Default</MenuEntry>
			<MenuEntry secondary>Secondary</MenuEntry>
			<MenuEntry isActive>isActive</MenuEntry>
		</Flex>
	)
}

export const WithSubmenuSelected: React.FC = () => {
	return (
		<MemoryRouter initialEntries={[ '/teams' ]}>
			<Menu
				account='0xbdda50183d817c3289f895a4472eb475967dc980'
				login={noop}
				logout={noop}
				isDark={false}
				toggleTheme={noop}
				langs={langs}
				setLang={noop}
				currentLang='EN'
				tokenPriceUsd={0.23158668932877668}
				links={links}
				profile={{
					username: 'pancakeswap',
					image: 'https://pancakeswap.finance/images/nfts/blueberries-preview.png',
					profileLink: '/profile',
					noProfileLink: '/no-profile'
				}}
			>
				<div>
					<Heading as='h1' mb='8px'>
						Submenu leaderboard selected
					</Heading>
				</div>
			</Menu>
		</MemoryRouter>
	)
}
