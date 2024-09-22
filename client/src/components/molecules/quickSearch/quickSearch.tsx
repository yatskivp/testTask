import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

import { QuickSearchProps } from './quickSearch.types';

export const QuickSearch: QuickSearchProps = ({
  selectLabel,
  filterInputLabel,
  selectedValue,
  options,
  handleSelectChange,
  handleInputChange,
}) => {
  const optionsWithAllValue = [{ label: 'All', value: '' }, ...options];

  return (
    <FormControl fullWidth variant="standard">
      <InputLabel id="quick-search-select-label">{selectLabel}</InputLabel>
      <Box sx={{ display: 'flex' }}>
        <Select
          sx={{ width: '100%' }}
          labelId="quick-search-select-label"
          id="quick-search-select"
          value={selectedValue}
          onChange={(event) => handleSelectChange(event.target.value as string)}
        >
          {optionsWithAllValue.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="quick-search-filter-input"
          label={filterInputLabel}
          variant="standard"
          sx={{ width: '100%' }}
          onChange={(event) => handleInputChange(event.target.value as string)}
        />
      </Box>
    </FormControl>
  );
};
