import Tesseract from 'tesseract.js';
import { updateDataCard } from '../../features/shopBicycleState/shopBicycleSlice';
import { useDispatch } from 'react-redux';

const ocr = () => {
  Tesseract.recognize('../../assets/card.png', 'eng', {
    logger: (m) => {
      console.log(m.progress);
    }
  }).then(({ data: { text } }) => {
    console.log('text', text);
    const val = text;
    const name = 'text';
    const dispatch = useDispatch();
    dispatch(updateDataCard({ name, val }));
  });
  return;
};

export default ocr;
