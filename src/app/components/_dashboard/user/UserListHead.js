import PropTypes from 'prop-types';
// material
import { visuallyHidden } from '@mui/utils';
import {
  Box,
  Checkbox,
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
  tableCellClasses
} from '@mui/material';
// styling
import { StyledTableCell } from '../../global/Styling';
// ----------------------------------------------------------------------

UserListHead.propTypes = {
  order: PropTypes.oneOf(['asc', 'desc']),
  orderBy: PropTypes.string,
  rowCount: PropTypes.number,
  headLabel: PropTypes.array,
  numSelected: PropTypes.number,
  onRequestSort: PropTypes.func,
  onSelectAllClick: PropTypes.func
};

export default function UserListHead({
  order,
  orderBy,
  rowCount,
  headLabel,
  numSelected,
  onRequestSort,
  onSelectAllClick,
  isCheckBox
}) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        {isCheckBox === 'true' && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              size="small"
              sx={{ padding: '0' }}
            />
          </TableCell>
        )}
        {headLabel.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={
              headCell.alignRight ? 'right' : 'left' && headCell.alignCenter ? 'center' : 'left'
            }
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {console.log('headCell', headLabel)}
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
