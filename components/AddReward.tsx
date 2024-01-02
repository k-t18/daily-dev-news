'use client';
import CustomTextField from '@/components/CustomTextField';
import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AddReward: FC = () => {
  const [selectedFile, setSelectedFile] = useState<null>(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0].name;
    setSelectedFile(file);
  };
  return (
    <div>
      <div className="border mt-28 px-8 mx-8 lg:mx-96 xl:mx-[600px] rounded-lg">
        <div className="mt-4">
          <CustomTextField
            id="company-name"
            name="company-name"
            label="Company Name"
          />
        </div>
        <div className="mt-4">
          <CustomTextField
            id="coupon-code"
            name="coupon-code"
            label="Coupon Code"
          />
        </div>
        <div className="mt-4">
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput">
            <Button
              component="span"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload file
            </Button>
          </label>
          {selectedFile && <span className="ms-4 text-lg">{selectedFile}</span>}
        </div>
      </div>
    </div>
  );
};

export default AddReward;
