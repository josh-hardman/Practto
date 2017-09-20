import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../theme/theme'
import { toRem } from '../utils/utils'

class Staff extends Component {
	state = {
		index: 0,
		items: this.props.items
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
		this.setState(prevState, () => {
			index: prevState.index + 1
		})
	}

	render() {
		const { items } = this.props
		const { index } = this.state
		return <div onClick={this.handleChange}>{items[index].name}</div>
	}
}

export default Staff
