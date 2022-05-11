import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select, SelectChangeEvent } from "@mui/material";

function CustomSelect({
  callback,
  value,
  options,
  id,
  label,
  ...rest
}: {
  callback: (value: string) => void;
  value: string;
  options?: string[];
  id?: string;
  label?: string;
}) {
  const [val, setVal] = useState(value || '');

  useEffect(() => {
    setVal(value || '');
  }, [value]);

  const handleChange = (event: SelectChangeEvent) => {
    setVal(event.target.value as string);
    callback(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId={id}
          value={val}
          onChange={handleChange}
          label={label}
          defaultValue={value}
          {...rest}
        >
          {options?.map((option, i) => (
            <MenuItem key={`${option}-${i}`} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default CustomSelect;
