import * as React from 'react';

const App = () => {

 const options = [

   { label: 'Tea', value: 'tea' },

   { label: 'Milk', value: 'milk' },

   { label: 'Water', value: 'water' },

   { label: 'Wine', value: 'wine'},

   { label: 'Juice', value: 'juice'}

 ];

 const [value, setValue] = React.useState('fruit');

 const handleChange = (event) => {

   setValue(event.target.value);

 };

 return (

   <div>

     <Dropdown

       label="What do we drink?"

       options={options}

       value={value}

       onChange={handleChange}

     />

     <p>We drink {value}!</p>

   </div>

 );

};

const Dropdown = ({ label, value, options, onChange }) => {

 return (

   <label>

     {label}

     <select value={value} onChange={onChange}>

       {options.map((option) => (

         <option value={option.value}>{option.label}</option>

       ))}

     </select>

   </label>

 );

};

export default App;