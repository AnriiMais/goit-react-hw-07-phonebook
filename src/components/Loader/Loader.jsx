import styled from 'styled-components';
import { Roller } from 'react-awesome-spinners';

const Loader = () => {
  return (
    <FallbackContainer>
      <Roller />
    </FallbackContainer>
  );
};
const FallbackContainer = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate (-50%, -80%);
`;
export default Loader;
