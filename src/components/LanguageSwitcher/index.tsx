import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language);

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="lang-label">Language</InputLabel>
      <Select
        labelId="lang-label"
        value={lang}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem value={'en'}>English</MenuItem>
        <MenuItem value={'fr'}>French</MenuItem>
      </Select>
    </FormControl>
  );
}

export default LanguageSwitcher;