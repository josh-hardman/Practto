import React from 'react'
import styled from 'styled-components'
import theme from '../theme/theme'
import { toRem } from '../utils/utils'

const SectionParagraph = styled.p`
	color: ${theme.white};
	font-weight: lighter;
	font-size: ${toRem(14)};
	margin: 0;
`
export default SectionParagraph
