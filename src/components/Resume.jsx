import React from 'react'
import { SectionWrapper } from '../hoc';
import { RESUME } from '../constants';

const Resume = () => {
    const handleDownload = () => {
        fetch(RESUME).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'NicholasMills_Resume.pdf';
                alink.click();
            })
        })
    }

  return (
    <div className='flex'>
        <button
            className='font-inter font-medium bg-[#6469ff] text-white px-4 py-4 rounded-lg mx-auto' 
            onClick={handleDownload}
        >
            Download my Resume!
        </button> 

    </div>
  )
}

export default SectionWrapper(Resume, "");