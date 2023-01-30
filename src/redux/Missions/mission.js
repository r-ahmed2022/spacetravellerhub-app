const STATUS_CHECKED = 'STATUS_CHECKED';

const missionStatusAction = () => ({
    type: STATUS_CHECKED,
  });
  

const missionReducer = (state = [], action = {}) => {
    switch (action.type) {
      case STATUS_CHECKED: return 'Under construction';
      default: return state;
    }
};

export { missionStatusAction };
export default missionReducer;