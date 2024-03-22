import React from 'react';
import './AccordionHeader.css';
import { FaPlus } from 'react-icons/fa';

const AccordionHeader = () => {
  return (
    <div className='accordion-header'>
      <h1>All Proposals  <button className="add-button"><FaPlus /></button></h1>
    </div>
  );
};

export default AccordionHeader;
