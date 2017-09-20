import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../theme/theme'
import { toRem } from '../utils/utils'
import Phone from 'react-icons/lib/fa/phone'
import Email from 'react-icons/lib/md/email'
import Web from 'react-icons/lib/fa/globe'
import Place from 'react-icons/lib/md/place'

import { compose, withProps, withStateHandlers } from 'recompose'
import FaAnchor from 'react-icons/lib/fa/anchor'
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
	InfoWindow
} from 'react-google-maps'

const StyledLineItem = styled.a`
	color: ${props => (props.href ? theme.link : theme.textBlack)};
	display: flex;
	align-items: center;
	text-decoration: none;
`

const Detail = styled.span`
	padding-left: 8px;
	font-size: ${toRem(12)};
`

const LineItem = ({ href, children }) => (
	<li>
		<StyledLineItem href={href}>{children}</StyledLineItem>
	</li>
)

const CenterContent = styled.div`
	display: flex;
	justify-content: center;
`

const ContactBlock = styled.div`width: 100%;`

const List = styled.ul`
	margin: 0;
	padding: 0 ${toRem(18)};
	list-style: none;
	line-height: ${toRem(18)};
`

const MapContainer = styled.div`padding: ${toRem(24)} 0;`

const MapWithInfoWindow = compose(
	withStateHandlers(
		() => ({
			isOpen: false
		}),
		{
			onToggleOpen: ({ isOpen }) => () => ({
				isOpen: !isOpen
			})
		}
	),
	withScriptjs,
	withGoogleMap
)(props => (
	<GoogleMap
		defaultZoom={13}
		defaultCenter={{ lat: 40.2804128, lng: -111.74433369999997 }}
	>
		<Marker
			position={{ lat: 40.2804128, lng: -111.74433369999997 }}
			onClick={props.onToggleOpen}
		>
			{props.isOpen && (
				<InfoWindow onCloseClick={props.onToggleOpen}>
					<FaAnchor />
				</InfoWindow>
			)}
		</Marker>
	</GoogleMap>
))

const Contact = () => (
	<CenterContent>
		<ContactBlock>
			<List>
				<LineItem href="asdf">
					<Phone />
					<Detail>(720) 666-0456</Detail>
				</LineItem>
				<LineItem href="asdf">
					<Email />
					<Detail>jhardman@gmail.com</Detail>
				</LineItem>
				<LineItem href="asdf">
					<Web />
					<Detail>www.joshhardman.com</Detail>
				</LineItem>
				<LineItem href="asdf">
					<Place />
					<Detail>892 S 2040 W Orem, UT</Detail>
				</LineItem>
			</List>
			<MapContainer>
				<MapWithInfoWindow
					googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</MapContainer>
		</ContactBlock>
	</CenterContent>
)

export default Contact
