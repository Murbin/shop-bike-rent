import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

export const ContainerLoader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerHome = styled.button`
  width: 70%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-width: 0;
  background: white;
`;

export const Button = styled.button`
  background: #6085fc;
  border-width: 0px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 100px;
  width: 300px;
  cursor: pointer;
  margin-top: 350px;
  padding: 5px;
`;

export const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 800px) {
    width: 50%;
    height: 100vh;
    padding: 0px;
  }
`;

export const LabelInput = styled.div`
  font-size: 12px;
  width: 98%;
  text-align: center;
  margin: 0px 0px 10px 0px;
  font-weight: bold;
  @media (min-width: 650px) {
    font-size: 22px;
    width: 320px;
  }
`;

export const Error = styled.p`
  margin: 0;
  color: red;
`;

export const ContainerZone = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1250px) {
    flex-direction: row;
  }
`;

export const ItemZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

export const ContainerResume = styled.div`
  position: sticker;
  background: #6085fc;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
  @media (min-width: 800px) {
    width: 40%;
    height: 100vh;
    padding-bottom: 0px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  text-align: center;
  color: black;
  margin: 6px;
  padding: 5px;
  @media (min-width: 1100px) {
    font-size: 19px;
  }
`;

export const Title = styled(Text)`
  font-weight: bold;
  text-align: center;
`;

export const ContainerStepper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 600px) {
    padding-top: 30px;
  }
`;

export const ContainerReview = styled.div`
  display: flex;
  width: 100%;
  background: #6085fc;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 800px) {
    width: 50%;
    height: 100vh;
  }
`;

export const BackgroundDepartment = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 800px) {
    width: 50%;
    height: 100vh;
  }
`;

export const MarginTop = styled.div`
  margin-top: 20px;
`;

export const styleGlobal = {
  paddingLeft: 10,
  height: 40,
  fontSize: 20,
  width: '80%',
  borderRadius: 4,
  borderColor: 'black'
};

export const styleInput = {
  ...styleGlobal,
  width: '80%'
};

export const styleSelect = {
  ...styleGlobal,
  width: 150
};

export const ButtonsContainer = styled.div`
  position: sticker;
  background: #6085fc;
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-bottom: 20px;
  @media (min-width: 800px) {
    width: 40%;
    height: 100vh;
    padding-bottom: 0px;
    padding: 6px;
  }
`;

export const styleRow = {
  justifyContent: 'space-around',
  width: '80%',
  margin: '20px auto'
};

export const styleCol = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
};

export const styleWidth = { width: 200 };

export const imgStyle = { width: '70%', maxHeight: '300px' };

export const RowGroupCard = styled(Row)`
  justify-content: space-around;
  width: 80%;
  margin: 20px auto !important;
`;
