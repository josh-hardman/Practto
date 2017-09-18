import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../theme/theme'
import { toRem } from '../utils/utils'

const StyledTestimonial = styled.div`
	height: 360px;
	background: grey;
	opacity: 0.4;
`

class Testimonials extends Component {
	state = {
		index: 0
	}

	static propTypes = {
		items: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				content: PropTypes.string.isRequired
			})
		).isRequired
	}

	handleChange = () => {
		this.setState({
			index: this.state.index + 1
		})
	}

	render() {
		return <StyledTestimonial onClick={this.handleChange} />
	}
}

export default Testimonials
