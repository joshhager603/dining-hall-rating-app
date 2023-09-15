import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const stations = [
  'Home Zone',
  'Halal Grill',
  'Brick',
  'Fusion',
  'Saute',
  'Vegan Entree',
  'Vegan Daily Special',
  'Soup',
  'Toasted',
  'Breads & Spreads',
  'Protein',
  'Wholesome Additions',
  'Toppings',
  'Greens & Grains',
  'Harvested',
  'Smoked & Roasted',
  'Protein Addition',
  'Crunch',
  'Scratchmade Dressings',
  'Sweets & Treats'
];

function getStyles(station, stationName, theme) {
  return {
    fontWeight:
      stationName.indexOf(station) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function FilterSelect() {
  const theme = useTheme();
  const [stationName, setStationName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setStationName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300}}>
        <InputLabel>Station</InputLabel>
        <Select
          multiple
          value={stationName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Station" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {stations.map((station) => (
            <MenuItem
              key={station}
              value={station}
              style={getStyles(station, stationName, theme)}
            >
              {station}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
