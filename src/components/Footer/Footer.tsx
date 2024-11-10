import { Container } from './styles';
import reactIcon from '../../assets/react-icon.svg';
import { FaHeart } from 'react-icons/fa';

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          Developed with <FaHeart style={{ color: 'red', margin: '0 4px' }} /> using{' '}
          <img src={reactIcon} alt="React" />
        </p>
      </div>
    </Container>
  );
}