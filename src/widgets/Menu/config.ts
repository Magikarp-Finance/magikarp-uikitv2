import { LinkStatus } from './types'

export const status = {
	LIVE: <LinkStatus>{
		text: 'LIVE',
		color: 'failure'
	},
	SOON: <LinkStatus>{
		text: 'SOON',
		color: 'warning'
	},
	NEW: <LinkStatus>{
		text: 'NEW',
		color: 'success'
	}
}

export const links = [
	{
		label: 'Home',
		icon: 'HomeIcon',
		href: '/'
	},
	{
		label: 'Trade',
		icon: 'TradeIcon',
		items: [
			{
				label: 'Exchange Magikarp',
				href:
					'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xc603b1fba6A5b502Be4f1Ab27591bF4e75A3460c'
			},
			{
				label: 'Exchange Gyarados',
				href:
					'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9458784486fb00c2d1a8740d5579207c42dbd602  '
			},
			{
				label: 'Liquidity',
				href: 'https://exchange.pancakeswap.finance/#/pool'
			}
		]
	},
	{
		label: 'Aqua Farms',
		icon: 'FarmIcon',
		href: '/farms'
	},
	{
		label: 'Swimming Pools',
		icon: 'PoolIcon',
		href: '/pools'
	},
	{
		label: 'Gya Shrine',
		icon: 'ShrineIcon',
		href: '/shrine'
	},
	{
		label: 'Lottery',
		icon: 'TicketIcon',
		href: '/lottery'
	},
	{
		label: 'NFT (soon)',
		icon: 'NftIcon',
		href: ''
	},
	{
		label: 'Partnership (soon)',
		icon: 'PartnershipIcon',
		href: '/'
	},
	{
		label: 'Magi',
		icon: 'MagiIcon',
		items: [
			{
				label: 'Buy Magi',
				href:
					'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xc603b1fba6A5b502Be4f1Ab27591bF4e75A3460c'
			},
			{
				label: 'Chart Magi',
				href: 'https://goswapp-bsc.web.app/0xc603b1fba6A5b502Be4f1Ab27591bF4e75A3460c'
			},
			{
				label: 'Magi bscscan',
				href: 'https://bscscan.com/token/0xc603b1fba6A5b502Be4f1Ab27591bF4e75A3460c'
			}
		]
	},
	{
		label: 'Gya',
		icon: 'GyaIcon',
		items: [
			{
				label: 'Buy Gya',
				href:
					'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9458784486fb00C2D1a8740d5579207c42DBd602'
			},
			{
				label: 'Chart Gya',

				href: 'https://goswapp-bsc.web.app/0x9458784486fb00C2D1a8740d5579207c42DBd602'
			},
			{
				label: 'Gya bscscan',
				href: 'https://bscscan.com/token/0x9458784486fb00C2D1a8740d5579207c42DBd602'
			}
		]
	},
	{
		label: 'More',
		icon: 'MoreIcon',
		items: [
			// {
			//    label: 'Github',
			//    href: 'https://github.com/goosedefi/',
			//
			//  },
			//  {
			//    label: 'Docs',
			//    href: 'https://goosedefi.gitbook.io/goose-finance/',
			//  },
			{
				label: 'Blog',
				href: 'https://magikarpfinance.medium.com/'
			}
		]
	}
]

export const socials = [
	{
		label: 'Telegram',
		icon: 'TelegramIcon',
		href: 'https://t.me/MagikarpFinance'
	},
	{
		label: 'Twitter',
		icon: 'TwitterIcon',
		href: 'https://twitter.com/MagikarpFinance'
	}
]

export const MENU_HEIGHT = 64
export const MENU_ENTRY_HEIGHT = 48
export const SIDEBAR_WIDTH_FULL = 240
export const SIDEBAR_WIDTH_REDUCED = 56
