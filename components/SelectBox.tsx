import React from 'react';

const SelectBox = ({ propertyType }) => {
  return (
    <select
      className='w-full block bg-white border border-btn p-2.5 rounded-md text-sm appearance-none md:pr-20'
      //   value={category || ''}
      onChange={handleCategoryChange}
    >
      <option value={''}>Property Type</option>
      {propertyType.map((types) => {
        <option value={`${types.typeName}`}>{types.typeName}</option>;
      })}
      <option value={'House'}>House</option>
      <option value={'Townhomes'}>Townhomes</option>
      <option value={'Multi'}>Multi-family</option>
      <option value={'Condos'}>Condos/Co-ops</option>
      <option value={'Lots'}>Lots/Lands</option>
      <option value={'Apartment'}>Apartment</option>
      <option value={'Manufactured'}>Manufactured</option>
    </select>
  );
};

export default SelectBox;
