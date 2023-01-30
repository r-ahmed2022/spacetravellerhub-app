const STATUS_CHECKED = 'STATUS_CHECKED';

const rocketAction = () => ({
    type: STATUS_CHECKED,
  });
  

const rocketReducer = (state = [], action = {}) => {
    switch (action.type) {
      case STATUS_CHECKED: return 'Under construction';
      default: return state;
    }
};

export { rocketAction };
export default rocketReducer;