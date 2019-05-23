import { positions, transitionNames } from './constants';

const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);

const getRandomID = () => Math.random().toString(36).substr(2, 9);

const getPlacementStyles = position => {
  const initialStyles = { position: 'fixed' };

  switch (position) {
    case positions.TOP_LEFT:
      return {
        top: 0,
        left: 0,
        ...initialStyles
      };
    case positions.TOP_CENTER:
      return {
        top: 0,
        left: '50%',
        transform: 'translate(-50%, 0%)',
        ...initialStyles
      };
    case positions.TOP_RIGHT:
      return {
        top: 0,
        right: 0,
        ...initialStyles
      };
    case positions.BOTTOM_LEFT:
      return {
        bottom: 0,
        left: 0,
        ...initialStyles
      };
    case positions.BOTTOM_CENTER:
      return {
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 0%)',
        ...initialStyles
      };
    case positions.BOTTOM_RIGHT:
      return {
        right: 0,
        bottom: 0,
        ...initialStyles
      };
  }
};

const getTransionName = (position) => {
  switch (position) {
    case positions.TOP_RIGHT:
      return transitionNames.SLIDE;
    default:
      return transitionNames.FADE;
  }
};

export {
  getRandomID,
  isNumeric,
  getPlacementStyles,
  getTransionName
};
