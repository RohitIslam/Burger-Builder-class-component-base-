//this file is for refactoring reducers
// I used this file only in orderReducer
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};
