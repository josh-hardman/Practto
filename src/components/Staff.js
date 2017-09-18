import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../theme/theme'
import { toRem } from '../utils/utils'

const StyledStaff = styled.div`
	height: 360px;
	background: grey;
	opacity: 0.4;
`

class Staff extends Component {
	state = {
		index: 0
	}

	static propTypes = {
		items: PropTypes.arrayOf(
			PropTypes.shape({
				href: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired
			})
		).isRequired
	}

	handleChange = () => {
		this.setState({
			index: this.state.index + 1
		})
	}

	render() {
		return <StyledStaff onClick={this.handleChange} />
	}
}

export default Staff
