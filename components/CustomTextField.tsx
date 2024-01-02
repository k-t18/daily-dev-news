import ITextField from '@/interface/types-text-field';
import { TextField } from '@mui/material';
import { FC } from 'react';

const CustomTextField: FC<ITextField> = ({ id, name, label }) => {
  return (
    <div>
      <TextField
        id={id}
        name={name}
        label={label}
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export default CustomTextField;
