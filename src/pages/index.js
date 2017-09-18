import React from 'react'
import Link from 'gatsby-link'
import Section from '../layouts/Section'
import { withTheme } from 'styled-components'
import ListingHeader from '../components/ListingHeader'
import SectionHeader from '../components/SectionHeader'
import SectionParagraph from '../components/SectionParagraph'
import Divider from '../components/Divider'
import Staff from '../components/Staff'
import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'
import MediaPlayer from '../components/MediaPlayer'

const IndexPage = ({ theme }) => (
	<div>
		<Section background={theme.lightBlue} zIndex={-1}>
			<ListingHeader>Canyonlands Dental</ListingHeader>
		</Section>

		<Section background={theme.mediumBlue} zIndex={-2}>
			<SectionHeader>About Us</SectionHeader>
			<SectionParagraph>
				Welcome to Canyonlands Dental! We are glad you are here. Here at
				Canyonlands we work hard every day to put a smile on you face. We hope
				to see you soon!
			</SectionParagraph>

			<Divider />

			<SectionHeader>Staff</SectionHeader>
			<Staff
				items={[
					{
						href: 'href',
						name: 'Dr Monkey',
						description: 'Cool story bro'
					}
				]}
			/>

			<Divider />

			<SectionHeader>Welcome Video</SectionHeader>
			<MediaPlayer url="https://www.youtube.com/embed/3ZCF2iFqQLs" />
		</Section>

		<Section background={theme.lightRed} zIndex={-3}>
			<SectionHeader>Patient Testimonials</SectionHeader>
			<Testimonials />
		</Section>

		<Section background={theme.white} zIndex={-4}>
			<SectionHeader color={theme.textBlack}>Contact Us</SectionHeader>
			<Contact />
		</Section>

		<Section background={theme.orange} zIndex={-5} squareBottom>
			<SectionHeader color={theme.textBlack}>Request Appointment</SectionHeader>
		</Section>
	</div>
)

export default withTheme(IndexPage)
