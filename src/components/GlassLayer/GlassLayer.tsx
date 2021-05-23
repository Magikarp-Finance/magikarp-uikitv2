import styled from 'styled-components'
import { GlassLayerProps } from './types'

const GlassLayer =
	styled.div.attrs({ role: 'presentation' }) <
	GlassLayerProps >
	`
  position: absolute;
  overflow:hidden;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(${({ blur }) => blur}px);
  -webkit-backdrop-filter: blur(${({ blur }) => blur}px);
  ${({ radius }) =>
		radius &&
		` 
    border-radius: ${radius}px ;
    `}
  
`

GlassLayer.defaultProps = {
	blur: 0
}

export default GlassLayer
