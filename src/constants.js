const positions = {
  TOP_LEFT: 'top left',
  TOP_CENTER: 'top center',
  TOP_RIGHT: 'top right',
  BOTTOM_LEFT: 'bottom left',
  BOTTOM_CENTER: 'bottom center',
  BOTTOM_RIGHT: 'bottom right'
};

const initialNotificationPositions = Object.keys(positions).reduce((obj, position) => ({
  ...obj,
  [positions[position]]: []
}), {});

const transitionNames = {
  FADE: 'fade',
  SLIDE: 'slide'
};

const notificationTypes = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  DEFAULT: 'default',
  LOADING: 'loading'
};

const REMOVE = 'remove';
const CLEAR = 'clear';
const TRANSITION_DURATION = 150;

export {
  TRANSITION_DURATION,
  positions,
  transitionNames,
  notificationTypes,
  initialNotificationPositions,
  REMOVE,
  CLEAR
};
