import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
import add from '@iconify/icons-ic/add';
import exportIcon from '@iconify/icons-ant-design/export-outline';
// import export from '@iconify/icons-ic/export';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment,
  Select,
  MenuItem,
  Grid
} from '@mui/material';

import { fDate } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 45,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 !important'
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  paddingTop: 2,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

// ----------------------------------------------------------------------

export default function DashboardToolbar({ numSelected, filterName, onFilterName, parent }) {
  const navigate = useNavigate();
  const [isOpenFilter, openFilter] = useState(false);
  const [filterDatesRange, setFilterDatesRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <>
      {isOpenFilter && (
        <Box mt={2} className="flterField">
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography variant="h7" className="formLabel">
                NAME
              </Typography>
              <Select
                fullWidth
                inputProps={{
                  className: 'textInput'
                }}
                className="gbleInpt"
                value=" "
              >
                <MenuItem value=" " disabled>
                  Select
                </MenuItem>
                <MenuItem> Menu 1</MenuItem>
                <MenuItem> Menu 1</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h7" className="formLabel">
                TAGS
              </Typography>
              <Select
                fullWidth
                inputProps={{
                  className: 'textInput'
                }}
                className="gbleInpt"
                value=" "
              >
                <MenuItem value=" " disabled>
                  Select
                </MenuItem>
                <MenuItem> Active</MenuItem>
                <MenuItem> Mysql</MenuItem>
                <MenuItem> Dataset</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h7" className="formLabel">
                STATUS
              </Typography>
              <Select
                fullWidth
                inputProps={{
                  className: 'textInput'
                }}
                className="gbleInpt"
                value=" "
              >
                <MenuItem value=" " disabled>
                  Select
                </MenuItem>
                <MenuItem> Menu 1</MenuItem>
                <MenuItem> Menu 1</MenuItem>
              </Select>
            </Grid>
            {/* <Grid item xs={2} sx={{ position: 'relative' }}>
              <Typography variant="h7" className="formLabel">
                PERIOD
              </Typography>
              <Box className="displayDateRange">
                {filterDatesRange[0].startDate !== null
                  ? `${fDate(filterDatesRange[0].startDate)} to `
                  : ''}
                {filterDatesRange[0].endDate !== null ? fDate(filterDatesRange[0].endDate) : ''}
              </Box>
              <Select
                fullWidth
                inputProps={{
                  className: 'textInput'
                }}
                className="gbleInpt "
                MenuProps={{
                  className: 'menuOpened'
                }}
                value=" "
              >
                <DateRangeStyled
                  editableDateInputs={false}
                  onChange={(item) => setFilterDatesRange([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={filterDatesRange}
                  className="dateRangePicker"
                /> 
              </Select>
            </Grid> */}
          </Grid>
        </Box>
      )}
      <RootStyle
        sx={{
          minHeight: 45,
          ...(numSelected > 0 && {
            color: 'primary.main',
            bgcolor: 'primary.lighter'
          })
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          className="tbleFltrHead"
        >
          {/* <Box>
            <Tooltip title="Add new" placement="top" arrow>
              <IconButton className="squareIconButton" onClick={(e) => navigate(`/${parent}/add`)}>
                <Icon icon={add} width={16} />
              </IconButton>
            </Tooltip>
            &nbsp;&nbsp;&nbsp;
            <Tooltip title="Export data" placement="top" arrow>
              <IconButton className="squareIconButton">
                <Icon icon={exportIcon} width={16} />
              </IconButton>
            </Tooltip>
          </Box> */}
          {/* <Box>
            <SearchStyle
              value={filterName}
              onChange={onFilterName}
              placeholder="Search master..."
              className="gbleInpt"
              classes={{
                root: 'searchHolder',
                input: 'searchInput'
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              }
            />
            &nbsp;&nbsp;&nbsp;
            <Tooltip title="Filter list">
              <IconButton
                onClick={(e) => {
                  if (isOpenFilter) {
                    openFilter(false);
                  } else {
                    openFilter(true);
                  }
                }}
              >
                <Icon icon={roundFilterList} />
              </IconButton>
            </Tooltip>
          </Box> */}
        </Box>
      </RootStyle>
    </>
  );
}
