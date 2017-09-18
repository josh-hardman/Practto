import React from 'react'
import styled from 'styled-components'
import theme from '../theme/theme'
import { toRem } from '../utils/utils'

const Line = styled.div`
	height: 10px;
	border-bottom: 1px solid ${theme.divider};
	width: 50%;
`

const StyledDivider = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: ${toRem(32)};
	padding-bottom: ${toRem(32)};
`

const Divider = () => (
	<StyledDivider>
		<Line />
	</StyledDivider>
)

export default Divider
