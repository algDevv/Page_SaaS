import Header from '../components/Header';
import LayoutCard from '../components/LayoutCard';
import { Container } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Container sx={{ marginY: '3rem' }} >
            <Header />
            <LayoutCard />
        </Container>
    );
}

export default Home;
