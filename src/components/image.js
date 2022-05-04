import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Resume from '../pages/Resume';
import PreviousNextStep from '../components/PreviousNextStep';
import {
  ContainerMain,
  BackgroundDepartment,
  LabelInput,
  Img
} from '../assets/styles';
import { useTranslation } from 'react-i18next';
import ocr from '../components/RecognizeDataInImage/index';

// const Image = ({
//   name,
//   errors,
//   handleChange,
//   getData,
//   saveData,
//   previous,
//   next,
//   type
// }) => {
//   const { t } = useTranslation('translation');
//   const dispatch = useDispatch();
//   const data = useSelector(getData);

//   const updateValFromStore = (key, val) => {
//     dispatch(saveData({ key, val }));
//   };

//   const handleLoadLocalFile = async (event) => {
//     event.preventDefault();
//     const file = event.target.files[0];
//     const localImageUrl = window.URL.createObjectURL(file);
//     handleChange(localImageUrl);
//     updateValFromStore('image', localImageUrl);
//     let text;
//     try {
//       text = await ocr();
//     } catch (error) {
//     } finally {
//       console.log('text finally', text);
//     }
//   };

//   return (
//     <ContainerMain>
//       <BackgroundDepartment>
//         {data ? <Img src={data} alt={t('bauch')} /> : null}
//         <LabelInput>{t('image.title')}</LabelInput>
//         <input
//           name={name}
//           id="my-upload-btn"
//           type={type}
//           accept=".jpg, .jpeg, .png .svg"
//           onChange={handleLoadLocalFile}
//         />
//         <PreviousNextStep
//           prev={previous}
//           nxt={next}
//           name={name}
//           errors={errors}
//           value={data}
//           validate={() => {}}
//         />
//       </BackgroundDepartment>
//       <Resume />
//     </ContainerMain>
//   );
// };

// export default Image;

import { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';

const preprocessImage = (canvas) => {
  const ctx = canvas.getContext('2d');
  const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return image;
};

const Image = ({
  name,
  errors,
  handleChange,
  getData,
  saveData,
  previous,
  next,
  type
}) => {
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();

  const data = useSelector(getData);

  const [image, setImage] = useState('');
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const handleChangeUrl = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleClick = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(imageRef.current, 0, 0);
    ctx.putImageData(preprocessImage(canvas), 0, 0);
    const dataUrl = canvas.toDataURL('image/jpeg');

    Tesseract.recognize(dataUrl, 'eng', {
      logger: (m) => console.log(m)
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        // Get Confidence score
        let confidence = result;
        console.log(confidence);
        // Get full output
        let text = result;
        console.log('text', text);
        // setText(text);
      });
  };

  const updateValFromStore = (key, val) => {
    dispatch(saveData({ key, val }));
  };

  const handleLoadLocalFile = async (event) => {
    event.preventDefault();

    setImage(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const localImageUrl = window.URL.createObjectURL(file);
    handleChange(localImageUrl);
    updateValFromStore('image', localImageUrl);
  };

  return (
    <div className="App">
      <main className="App-main">
        <img src={image} className="App-logo" alt="logo" ref={imageRef} />
        <canvas ref={canvasRef} width={700} height={250}></canvas>
        <h3>Extracted text</h3>
        <div className="pin-box">{/* <p> {text} </p> */}</div>
        <input
          name={name}
          id="my-upload-btn"
          type={type}
          onChange={handleLoadLocalFile}
        />
        <button onClick={handleClick} style={{ height: 50 }}>
          Convert to text
        </button>
      </main>
      <ContainerMain>
        <BackgroundDepartment>
          {data ? <Img src={data} alt={t('bauch')} /> : null}
          <LabelInput>{t('image.title')}</LabelInput>
          <input
            name={name}
            id="my-upload-btn"
            type={type}
            accept=".jpg, .jpeg, .png .svg"
            onChange={handleLoadLocalFile}
          />
          <PreviousNextStep
            prev={previous}
            nxt={next}
            name={name}
            errors={errors}
            value={data}
            validate={() => {}}
          />
        </BackgroundDepartment>
        <Resume />
      </ContainerMain>
    </div>
  );
};

export default Image;
