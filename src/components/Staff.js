import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../theme/theme'
import { toRem } from '../utils/utils'
import Paper from 'material-ui/Paper'
import Chip from 'material-ui/Chip'
import Avatar from '../components/Avatar'

const ChipWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Name = styled.h2`
	text-align: center;
	font-size: ${toRem(16)};
	color: ${theme.textBlack};
	font-weight: normal;
`

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

	handleSelect = index =>
		this.setState({
			index
		})

	render() {
		const { index, items } = this.state
		return (
			<div>
				<Avatar src={items[index].href} />
				<Name>{items[index].name}</Name>
				<ChipWrapper>
					{items.map((item, i) => (
						<Chip key={i} onClick={() => this.handleSelect(i)}>
							{item.name}
						</Chip>
					))}
				</ChipWrapper>
			</div>
		)
	}
}

export default Staff
