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
import Card from '../components/Card'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import AutoComplete from 'material-ui/AutoComplete'
import Toggle from 'material-ui/Toggle'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'
import { toRem } from '../utils/utils'
import { toggleLabel } from '../theme/materialStyles'

const fruit = [
	'Apple',
	'Apricot',
	'Avocado',
	'Banana',
	'Bilberry',
	'Blackberry',
	'Blackcurrant',
	'Blueberry',
	'Boysenberry',
	'Blood Orange',
	'Cantaloupe',
	'Currant',
	'Cherry',
	'Cherimoya',
	'Cloudberry',
	'Coconut',
	'Cranberry',
	'Clementine',
	'Damson',
	'Date',
	'Dragonfruit',
	'Durian',
	'Elderberry',
	'Feijoa',
	'Fig',
	'Goji berry',
	'Gooseberry',
	'Grape',
	'Grapefruit',
	'Guava',
	'Honeydew',
	'Huckleberry',
	'Jabouticaba',
	'Jackfruit',
	'Jambul',
	'Jujube',
	'Juniper berry',
	'Kiwi fruit',
	'Kumquat',
	'Lemon',
	'Lime',
	'Loquat',
	'Lychee',
	'Nectarine',
	'Mango',
	'Marion berry',
	'Melon',
	'Miracle fruit',
	'Mulberry',
	'Mandarine',
	'Olive',
	'Orange',
	'Papaya',
	'Passionfruit',
	'Peach',
	'Pear',
	'Persimmon',
	'Physalis',
	'Plum',
	'Pineapple',
	'Pumpkin',
	'Pomegranate',
	'Pomelo',
	'Purple Mangosteen',
	'Quince',
	'Raspberry',
	'Raisin',
	'Rambutan',
	'Redcurrant',
	'Salal berry',
	'Satsuma',
	'Star fruit',
	'Strawberry',
	'Squash',
	'Salmonberry',
	'Tamarillo',
	'Tamarind',
	'Tomato',
	'Tangerine',
	'Ugli fruit',
	'Watermelon'
]

const FinePrint = styled.p`
	padding: ${toRem(12)} 0;
	font-size: ${toRem(8)};
	line-height: ${toRem(12)};
`

const OffersWrapper = styled.div`margin-bottom: ${toRem(12)};`

const Offers = styled.h3`
	font-size: ${toRem(14)};
	margin: ${toRem(24)} 0 ${toRem(12)};
	font-weight: normal;
`

const IndexPage = ({ theme }) => (
	<div>
		<Section background={theme.lightBlue} zIndex={-1}>
			<ListingHeader>Canyonlands Dental</ListingHeader>
		</Section>

		<Section background={theme.mediumBlue} zIndex={-2}>
			<Card background={theme.aliceBlue}>
				<SectionHeader color={theme.textBlack}>About Us</SectionHeader>
				<SectionParagraph color={theme.textBlack}>
					Welcome to Canyonlands Dental! We are glad you are here. Here at
					Canyonlands we work hard every day to put a smile on you face. We hope
					to see you soon!
				</SectionParagraph>

				<Divider />

				<SectionHeader color={theme.textBlack}>Staff</SectionHeader>
				<Staff
					items={[
						{
							href: 'lukeurl',
							name: 'Luke Skywalker',
							description: 'Luke is strong in the force'
						},
						{
							href: 'vaderurl',
							name: 'Darth Vader',
							description: 'Vader with force choke you'
						},
						{
							href: 'solourl',
							name: 'Han Solo',
							description: 'A smuggler that is wanted in the galaxy'
						}
					]}
				/>

				<Divider />

				<SectionHeader color={theme.textBlack}>Welcome Video</SectionHeader>
				<MediaPlayer url="https://www.youtube.com/embed/3ZCF2iFqQLs" />
			</Card>
		</Section>

		<Section background={theme.lightRed} zIndex={-3}>
			<Card background={theme.aliceBlue}>
				<SectionHeader color={theme.textBlack}>
					Patient Testimonials
				</SectionHeader>
				<Testimonials />
			</Card>
		</Section>

		<Section background={theme.white} zIndex={-4}>
			<Card>
				<SectionHeader color={theme.textBlack}>Contact Us</SectionHeader>
				<Contact />
			</Card>
		</Section>

		<Section background={theme.orange} zIndex={-5} squareBottom>
			<Card>
				<SectionHeader color={theme.textBlack}>
					Request Appointment
				</SectionHeader>
				<TextField floatingLabelFixed={true} floatingLabelText="First Name" />
				<TextField floatingLabelFixed={true} floatingLabelText="Last Name" />
				<TextField
					floatingLabelFixed={true}
					floatingLabelText="Email Address"
				/>
				<TextField floatingLabelFixed={true} floatingLabelText="Phone Number" />
				<DatePicker
					floatingLabelFixed={true}
					floatingLabelText="Request Date"
					minDate={new Date()}
				/>
				<AutoComplete
					floatingLabelFixed={true}
					floatingLabelText="Insurance Provider"
					filter={AutoComplete.fuzzyFilter}
					dataSource={fruit}
					maxSearchResults={5}
				/>
				<OffersWrapper>
					<Offers>Special Offers</Offers>
					<Toggle
						labelStyle={toggleLabel}
						label="Free Consultation"
						labelPosition="right"
					/>
					<Toggle
						labelStyle={toggleLabel}
						label="50% off first cleaning"
						labelPosition="right"
					/>
					<Toggle
						labelStyle={toggleLabel}
						label="$20 cash back"
						labelPosition="right"
					/>
				</OffersWrapper>

				<TextField
					floatingLabelText="Additional Comments"
					multiLine={true}
					floatingLabelFixed={true}
					rows={1}
				/>
				<FinePrint>
					* This form will request an appointment on your behalf. You wiill
					receive a follow up via email or phone from the listed practice to
					confirm your visit.
				</FinePrint>
				<RaisedButton label="Submit" primary />
			</Card>
		</Section>
	</div>
)

export default withTheme(IndexPage)
