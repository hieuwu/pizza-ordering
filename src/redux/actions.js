export const SET_CATEGORYDATA = 'SET_CATEGORYDATA';
export const SET_PIZZADATA = 'SET_PIZZADATA';
export const SET_ISLOADING = 'SET_ISLOADING';


export const setCategoryData = data => {
  return {
    type: SET_CATEGORYDATA,
    data,
  };
};

export const setPizzaData = data => {
  return {
    type: SET_PIZZADATA,
    data,
  };
};

export const setIsLoading = bool => {
  return {
    type: SET_ISLOADING,
    bool,
  };
};
