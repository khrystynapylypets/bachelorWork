import React from 'react';
import { Button } from 'react-bootstrap';
import { IoIosLogOut } from 'react-icons/io';

export const LogOut = ({ userActions }) => {
  const handleOnClick = () => {
    userActions.logoutUser();
  };

  return (
    <Button variant='primary' onClick={handleOnClick}>
      Вийти <IoIosLogOut />
    </Button>
  );
};
