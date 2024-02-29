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

// import { DateRangeStyled } from '../../pages/Global/Styling';
import { fDate } from '../../../utils/formatTime';
import { getGlobals } from '../../../utils/Globals';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 'unset',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 !important',
  minHeight: 'unset !important',
  marginBottom: '0.75rem'
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
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

export default function UserListToolbar({ numSelected, filterName, onFilterName, parent }) {
  const navigate = useNavigate();
  const { GLOBAL_PATH } = getGlobals();
  console.log('GLOBAL_PATH', GLOBAL_PATH);
  const [isOpenFilter, openFilter] = useState(false);
  const [filterDatesRange, setFilterDatesRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection'
    }
  ]);
  const [selectName, setSelectName] = useState(' ');
  const [selectTags, setSelectTags] = useState(' ');
  const [selectStatus, setSelectStatus] = useState(' ');
  return (
    <>
      {isOpenFilter && (
        <Box mb={1} className="flterField">
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography variant="body2" className="formLabel">
                Name
              </Typography>
              <Select
                fullWidth
                inputProps={{
                  className: `textInput dissabledMenu${selectName}`
                }}
                value={selectName}
                onChange={(e) => setSelectName(e.target.value)}
              >
                <MenuItem value=" " disabled>
                  Select Name
                </MenuItem>
                <MenuItem value="menu1">Menu 1</MenuItem>
                <MenuItem value="menu2">Menu 1</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" className="formLabel">
                Tags
              </Typography>
              <Select
                fullWidth
                inputProps={{
                  className: `textInput dissabledMenu${selectTags}`
                }}
                value={selectTags}
                onChange={(e) => setSelectTags(e.target.value)}
              >
                <MenuItem value=" " disabled>
                  Select Tags
                </MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Mysql">Mysql</MenuItem>
                <MenuItem value="Dataset">Dataset</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" className="formLabel">
                Status
              </Typography>
              <Select
                fullWidth
                inputProps={{
                  className: `textInput dissabledMenu${selectStatus}`
                }}
                value={selectStatus}
                onChange={(e) => setSelectStatus(e.target.value)}
              >
                <MenuItem value=" " disabled>
                  Select Status
                </MenuItem>
                <MenuItem value="Manue1">Menu 1</MenuItem>
                <MenuItem value="Manue2">Menu 1</MenuItem>
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
          <Box>
            <Tooltip title="Add new" placement="top" arrow>
              <IconButton
                className="squareIconButton"
                onClick={(e) => navigate(`${GLOBAL_PATH}/measures/add`)}
              >
                <Icon icon={add} width={16} />
              </IconButton>
            </Tooltip>
            &nbsp;&nbsp;&nbsp;
            {/* <Tooltip title="Export data" placement="top" arrow>
              <IconButton className="squareIconButton">
                <Icon icon={exportIcon} width={16} />
              </IconButton>
            </Tooltip> */}
          </Box>
          <Box>
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
                sx={{ padding: '0' }}
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
          </Box>
        </Box>
      </RootStyle>
    </>
  );
}
