import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../theme/theme'
import { toRem } from '../utils/utils'

import ReactSwipe from 'react-swipe'
import ArrowRight from 'react-icons/lib/fa/angle-right'
import ArrowLeft from 'react-icons/lib/fa/angle-left'

const TrayWrapper = styled.div`
	position: relative;
	overflow: hidden;
`

const Review = styled.div`width: 75%;`

const Item = styled.div`
	width: 30%;
	float: left;
`

const ButtonLeft = styled.button`
	background: none;
	height: 100%;
	border: none;
	outline: none;
	position: absolute;
	left: 0;
	top: 0px;
	bottom: 0px;
	z-index: 2;
`

const ButtonRight = styled.button`
	background: none;
	height: 100%;
	border: none;
	outline: none;
	position: absolute;
	right: 0;
	top: 0px;
	bottom: 0px;
	z-index: 2;
`

const ReviewWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 4px;
`

export default class Tray extends Component {
	state = {
		index: 0,
		items: this.props.items
	}

	handleLeft = () => {
		console.log('left')
		this.slideshow.prev()
	}

	handleRight = () => {
		this.slideshow.next()
	}

	render() {
		const { items } = this.state

		return (
			<TrayWrapper>
				<ButtonLeft onClick={this.handleLeft}>
					<ArrowLeft />
				</ButtonLeft>
				<ButtonRight onClick={this.handleRight}>
					<ArrowRight />
				</ButtonRight>
				<ReactSwipe
					ref={node => (this.slideshow = node)}
					swipeOptions={{ continuous: true }}
				>
					{items.map((item, i) => (
						<ReviewWrapper>
							<Review>
								<p>"{item.review}"</p>
								<p>{item.name}</p>
							</Review>
						</ReviewWrapper>
					))}
				</ReactSwipe>
			</TrayWrapper>
		)
	}

	static propTypes = {}
}
