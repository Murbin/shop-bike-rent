import Spinner from 'react-bootstrap/Spinner';
import { ContainerLoader } from '../assets/styles';

const Loader = ({ animation, variant, size }) => (
  <ContainerLoader>
    <Spinner animation={animation} variant={variant} size={size} />;
  </ContainerLoader>
);

export default Loader;
