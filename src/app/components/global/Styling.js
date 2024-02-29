import { TableCell, TableRow, tableCellClasses, Toolbar, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DateRange } from 'react-date-range';

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 12,
    padding: '6px',
    // height: '40px',
    fontWeight: 500,
    textTransform: 'uppercase !important',
    color: '#0d4689'
    // border: '1px solid rgba(0, 0, 0, 0.125)'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    padding: '4px 6px',
    height: '40px'
    // borderBottom: '1px solid #f1f3f4'
  }
}));

export const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 45,
  display: 'flex',
  justifyContent: 'space-between'
  // padding: '0 !important'
}));

export const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
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

export const DateRangeStyled = styled(DateRange)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  border: '1px solid #ddd',
  background: '#eee',
  zIndex: 10
}));
