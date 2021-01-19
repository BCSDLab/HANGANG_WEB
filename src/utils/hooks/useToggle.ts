import React from 'react';

const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [toggle, setToggle] = React.useState(initialState);
  return [toggle, () => setToggle((state) => !state)];
};

export default useToggle;
