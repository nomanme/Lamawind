import styled from 'styled-components';
import { Announcement } from '../../components/Announcement/Announcement';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import { NewsLetter } from '../../components/NewsLetter/NewsLetter';
import { Products } from '../../components/Products/Products';

const Container = styled.div``;

const Title = styled.h1`
	margin: 20px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
`;

const FilterText = styled.span`
	font-style: 200px;
	font-weight: 600;
	margin-right: 20px;
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
`;

const Option = styled.option``;

export const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
						<Option>Pink</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>Xs</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
						<Option>XXL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select>
						<Option selected>Newest</Option>
						<Option>Price (asc)</Option>
						<Option>Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products />
			<NewsLetter />
			<Footer />
		</Container>
	);
};
