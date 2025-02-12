
import React from 'react';

import { Button, ButtonProps } from '@mui/material';


const CustomButton = ({
  children,
  ...rest
}: { children: React.ReactNode } & ButtonProps) => (
  
  <Button
    type="submit"
    variant="contained" 
    color="primary"    
    fullWidth
    
    {...rest}           
  >
    {children}
  </Button>
);


export default CustomButton;
