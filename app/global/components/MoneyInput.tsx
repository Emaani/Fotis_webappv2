import { useState, ChangeEvent, useEffect } from 'react';

type NumberInputProps = {
  value?: number;
  onChange: (value: number) => void;
  className:string,
  disabled?: boolean
};

const MoneyInput = ({ value=0, onChange ,className, disabled= false}: NumberInputProps) => {
  const [formattedValue, setFormattedValue] = useState("");
  useEffect(()=>{
    console.log("money")
    if (value) {
      setFormattedValue(value.toLocaleString())
    }
  },[value])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    const cleanValue = rawValue.replace(/[^0-9.,-]/g, ''); // remove all non-numeric characters except for comma and hyphen
    const parsedValue = parseFloat(cleanValue.replace(/,/g, '')); // remove commas and parse value
    if (!isNaN(parsedValue)) {
      onChange(parsedValue);
      setFormattedValue(parsedValue.toLocaleString());
    }else{
        setFormattedValue("0");
    }
  };

  return (
    <input disabled={disabled} className={className} type="text" value={formattedValue} onChange={handleInputChange} />
  );
};

export default MoneyInput;
