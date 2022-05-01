import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ContainerLoader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerHome = styled.button`
  width: 100%;
  height: 100vh;
  position: relative;
  border-width: 0;
  background: #6085fc;
`;

export const ButtonLink = styled.button`
  text-align: center;
  background: white;
  width: 100px;
  padding: 7px;
  margin-right: 26px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  border-radius: 20px;
  border-width: 0;
`;

export const buttonLinkStep = {
  marginRight: 20,
  textDecoration: 'none',
  color: '#6085FC',
  fontWeight: 'bold'
};

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

export const RowFilter = styled(Row)`
  justify-content: space-around;
  width: 80%;
  margin: 20px auto;
`;

export const ColFilter = styled(Col)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const FormSelect = styled(Form.Select)`
  width: 200px;
`;

export const Img = styled.img`
  max-height: 300px;
  width: 70%;
`;

export const RowGroupCard = styled(Row)`
  justify-content: space-around;
  width: 80%;
  margin: 20px auto !important;
`;

export const ColCard = styled(Col)`
  margin: 10px 0px;
`;

export const CardContainer = styled(Col)`
  margin: 0px auto;
  width: 100%;
`;

export const CardImg = styled(Card.Img)`
  width: 100%;
`;

export const CardBody = styled(Card.Body)`
  height: 30%;
`;

export const CardTitle = styled(Card.Title)`
  color: #6c757d;
  font-size: 15px;
  text-align: center;
`;

export const CardFooter = styled(Card.Footer)`
  margin: 0px auto;
  padding: 0px;
  font-size: 17px;
  text-align: center;
  font-weight: bold;
`;

export const RowGroupByType = styled(Row)`
  justify-content: space-around;
  width: 100%;
`;

export const ButtonRent = styled(Button)`
  background: #6085fc;
  margin: 10px auto;
  width: 100%;
`;

export const ContainerLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerChildren = styled.div`
  width: 100%;
`;

export const ContainerNab = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
`;
