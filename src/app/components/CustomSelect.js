import React, { useState } from 'react';
import { Select, MenuItem, Grid } from '@mui/material';
import { YearRangePicker } from 'react-year-range-picker';

function CustomSelect({ AlertCustomFilterApi }) {
  const [value, setValue] = useState(' ');
  const [yearRange, setYearRange] = useState({ startYear: null, endYear: null });

  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  const handleYearRangeSelect = (startYear, endYear) => {
    setYearRange({ startYear, endYear });
    const range = { startYear, endYear };
    setTimeout(() => {
      AlertCustomFilterApi(value, range);
    }, 1);
  };

  const currentYear = new Date().getFullYear();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Select
          fullWidth
          inputProps={{
            className: `textInput customSelectBox disabledMenu${value}`
          }}
          value={value}
          onChange={handleSelect}
        >
          <MenuItem value=" " disabled>
            Trade Type
          </MenuItem>
          <MenuItem value="Export">Export</MenuItem>
          <MenuItem value="Import">Import</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <YearRangePicker
          minYear={currentYear - 10}
          maxYear={currentYear}
          onSelect={handleYearRangeSelect}
          startYear={yearRange?.startYear}
          endYear={yearRange?.endYear}
          endText="End Year"
          fullWidth
          classNames="custom-year-range-picker"
          selectedColor="#0d4689"
        />
      </Grid>
    </Grid>
  );
}

export default CustomSelect;
