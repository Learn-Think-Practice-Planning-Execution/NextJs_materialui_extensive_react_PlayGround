import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import CryptoJs from 'crypto-js';
import editFill from '@iconify/icons-ic/drag-handle';
import submit from '@iconify/icons-ant-design/enter-outline';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import { CgNotes, CgEnter, CgEditBlackPoint } from 'react-icons/cg';
import { FiEdit, FiEye } from 'react-icons/fi';
import {
  MdSettingsApplications,
  MdNotifications,
  MdOutlineUpdate,
  MdOutlineTableView,
  MdOutlineSchedule
} from 'react-icons/md';
import { AiOutlineInfoCircle, AiOutlineClose, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { RiRefreshLine } from 'react-icons/ri';
import { TbReport } from 'react-icons/tb';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
// material
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Box
} from '@mui/material';
import styled from '@emotion/styled';
import { getGlobals } from '../../../utils/Globals';

// ----------------------------------------------------------------------

export default function UserMoreMenu({
  rowId,
  parent,
  setOpenStatus,
  setOpenOpportunity,
  setOpenSanctioned,
  setOpenRejected,
  handleOpenDelete,
  handleOpenAdd,
  handleOpenDeleteGlossary,
  handleOpenAddGlossary,
  setDialogContent,
  setnameSymentic,
  field_name,
  setDisplayNameSymentic,
  display_name,
  setDescriptionSymentic,
  description,
  setTagsArray,
  meta_data_tags,
  setDataTypesSymentic,
  data_type,
  data_type_id,
  setCurrentRowDataTypeId,
  listAllDataTypeValue,
  listArray,

  setListArray,
  scanList,
  setOpenDelete,
  setScanListCurrentId,
  classes,
  setClassListCurrentId,
  glossaryDataEntity,
  setGlossaryDialogBoxAddEdit,
  handleSaveEditGlossary,
  setDisplayNameGlossaryMsg,
  setCurrentId,
  tagItem
}) {
  const navigate = useNavigate();
  const { GLOBAL_PATH } = getGlobals();
  console.log('GLOBAL_PATH', GLOBAL_PATH);
  // Styled icon button in Action
  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    margin: '0 3px',
    [`&:hover`]: {
      color: theme.palette.primary.main
    }
  }));
  const [showViewSource, setShowViewSource] = useState(false);

  if (parent === 'sales') {
    return (
      <>
        <Tooltip title="Submit" placement="top" arrow>
          <StyledIconButton className="squareIconButton actionButton">
            <CgEnter size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Application" placement="top" arrow>
          <StyledIconButton className="squareIconButton actionButton">
            <MdSettingsApplications size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Update" placement="top" arrow>
          <StyledIconButton className="squareIconButton actionButton">
            <FiEdit size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="View" placement="top" arrow>
          <StyledIconButton className="squareIconButton actionButton">
            <FiEye size={14} />
          </StyledIconButton>
        </Tooltip>
      </>
    );
  }
  if (parent === 'opportunity') {
    return (
      <>
        <Tooltip title="Update" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            onClick={(e) => setOpenOpportunity(true)}
          >
            <FiEdit size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="View" placement="top" arrow>
          <StyledIconButton className="squareIconButton actionButton">
            <FiEye size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Notification" placement="top" arrow>
          <StyledIconButton className="squareIconButton actionButton">
            <MdNotifications size={14} />
          </StyledIconButton>
        </Tooltip>
      </>
    );
  }
  if (parent === 'sanctioned') {
    return (
      <>
        <Tooltip title="Update" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            onClick={(e) => setOpenSanctioned(true)}
          >
            <FiEdit size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="View" placement="top" arrow>
          <StyledIconButton className="squareIconButton actionButton">
            <FiEye size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Notification" placement="top" arrow>
          <StyledIconButton className="squareIconButton actionButton">
            <MdNotifications size={14} />
          </StyledIconButton>
        </Tooltip>
      </>
    );
  }
  if (parent === 'rejected') {
    return (
      <>
        <Tooltip title="Update" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            onClick={(e) => setOpenRejected(true)}
          >
            <FiEdit size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="View" placement="top" arrow>
          <StyledIconButton className="squareIconButton actionButton">
            <FiEye size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Notification" placement="top" arrow>
          <StyledIconButton className="squareIconButton actionButton">
            <MdNotifications size={14} />
          </StyledIconButton>
        </Tooltip>
      </>
    );
  }
  if (parent === 'call-center') {
    return (
      <>
        <Tooltip title="Complete Form" placement="top" arrow>
          <StyledIconButton className="squareIconButton actionButton">
            <CgNotes size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Update Status" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            onClick={(e) => setOpenStatus(true)}
          >
            <AiOutlineInfoCircle size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Close" placement="top" arrow>
          <StyledIconButton className="squareIconButton actionButton">
            <AiOutlineClose size={14} />
          </StyledIconButton>
        </Tooltip>
      </>
    );
  }

  if (parent === 'users') {
    return (
      <>
        <Tooltip
          title="Delete"
          placement="top"
          arrow
          onClick={(e) => {
            handleOpenDelete(e, rowId);
          }}
        >
          <StyledIconButton className="actionButton squareIconButton">
            <AiFillDelete size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Edit" placement="top" arrow onClick={(e) => handleOpenAdd(e, rowId)}>
          <StyledIconButton className="actionButton squareIconButton">
            <AiFillEdit size={14} />
          </StyledIconButton>
        </Tooltip>
      </>
    );
  }

  if (parent === 'metadata-insight') {
    return (
      <>
        <Tooltip
          title="Delete"
          placement="top"
          arrow
          onClick={(e) => {
            handleOpenDelete(e, rowId);
          }}
        >
          <StyledIconButton className="actionButton squareIconButton">
            <AiFillDelete size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Edit" placement="top" arrow onClick={(e) => handleOpenAdd(e, rowId)}>
          <StyledIconButton className="actionButton squareIconButton">
            <AiFillEdit size={14} />
          </StyledIconButton>
        </Tooltip>
      </>
    );
  }

  if (parent === 'publish-source') {
    return (
      <>
        <Tooltip title="Delete" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            disableRipple="true"
            disableFocusRipple="true"
          >
            <AiFillDelete size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Refresh" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            disableRipple="true"
            disableFocusRipple="true"
          >
            <RiRefreshLine size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Edit" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            disableRipple="true"
            disableFocusRipple="true"
            onClick={(e) => navigate(`${GLOBAL_PATH}/data-catalog/publish-catalog/add-new-source`)}
          >
            <AiFillEdit size={14} />
          </StyledIconButton>
        </Tooltip>
      </>
    );
  }

  if (parent === 'publish-scanrules') {
    return (
      <>
        <Tooltip title="Delete" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            disableRipple="true"
            disableFocusRipple="true"
            onClick={(e) => {
              setScanListCurrentId(scanList.scan_rule_id);
              setOpenDelete(true);
            }}
          >
            <AiFillDelete size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="View" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            disableRipple="true"
            disableFocusRipple="true"
            onClick={(e) => {
              const scanruleEdit = CryptoJs.AES.encrypt(
                JSON.stringify({
                  ...scanList,
                  parent: 'publish-scanrules'
                }),
                'ScanRuleView'
              );
              localStorage.setItem(
                'e13ee06b-72e6-4581-86a3-c0a465e63d75-ScanRuleView',
                scanruleEdit
              );
              navigate(`${GLOBAL_PATH}/data-catalog/publish-catalog/add-new-scanrule`);
            }}
          >
            <AiFillEdit size={14} />
          </StyledIconButton>
        </Tooltip>
      </>
    );
  }

  if (parent === 'publish-classificationrule') {
    return (
      <>
        <Tooltip title="Delete" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            disableRipple="true"
            disableFocusRipple="true"
            onClick={(e) => {
              setClassListCurrentId(classes.classification_id);
              setOpenDelete(true);
              // fireDeleteClassApi();
            }}
          >
            <AiFillDelete size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Edit" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            disableRipple="true"
            disableFocusRipple="true"
            onClick={(e) => {
              const classesEdit = CryptoJs.AES.encrypt(
                JSON.stringify({
                  ...classes,
                  parent: 'publish-classificationrule'
                }),
                'ClassesView'
              );
              localStorage.setItem('e13ee06b-72e6-4581-86a3-c0a465e63d75-ClassesView', classesEdit);
              navigate(`${GLOBAL_PATH}/data-catalog/publish-catalog/add-new-classification`);
            }}
          >
            <AiFillEdit size={14} />
          </StyledIconButton>
        </Tooltip>
      </>
    );
  }

  if (parent === 'data-quality') {
    return (
      <>
        <Tooltip title="Schedule" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            disableRipple="true"
            disableFocusRipple="true"
          >
            <MdOutlineSchedule size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Detailed Report" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            disableRipple="true"
            disableFocusRipple="true"
            onClick={(e) => navigate(`${GLOBAL_PATH}/data-quality/data-quality-detailed`)}
          >
            <TbReport size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="Instant Update" placement="top" arrow>
          <StyledIconButton
            className="squareIconButton actionButton"
            disableRipple="true"
            disableFocusRipple="true"
          >
            <MdOutlineUpdate size={14} />
          </StyledIconButton>
        </Tooltip>
      </>
    );
  }

  if (parent === 'usersGlossary') {
    return (
      <Box display="flex">
        <Tooltip
          title="Delete"
          placement="top"
          arrow
          onClick={(e) => {
            // const rowIdSymenticData = {
            //   displayName: tagItem.display_name
            // };
            // handleOpenDeleteSemantic(e, rowId);
            setCurrentId(rowId);
            handleOpenDeleteGlossary(e, rowId);
            // setGlossaryDialogBoxAddEdit(rowIdSymenticData);
          }}
        >
          <StyledIconButton className="actionButton squareIconButton">
            <AiFillDelete size={14} />
          </StyledIconButton>
        </Tooltip>
        <Tooltip
          title="Edit"
          placement="top"
          arrow
          onClick={(e) => {
            setCurrentId(rowId);
            setDisplayNameGlossaryMsg(false);
            setGlossaryDialogBoxAddEdit((prevState) => {
              return {
                ...prevState,
                ...glossaryDataEntity
              };
            });
            handleOpenAddGlossary(e);
            // const autoArray = listAllDataTypeValue;
            // console.log('rowId', rowId);
            // setDialogContent('Edit Symentic Type');
            // setnameSymentic(field_name);
            // handleViewEditSymentic(tagItem.display_name);
            // handleOpenAddSemantic(e);
            // setCurrentRowDataTypeId(data_type_id);
            // const dataTypeIdArray = data_type_id.split(',');
            // console.log('dataTypeIdArray', dataTypeIdArray);
            // console.log('datatype', autoArray);
            // console.log('datatype', data_type_id);
            // console.log('datatype', dataTypeIdArray);
            // const filteredData = dataTypeIdArray.map((item) => {
            //   return autoArray.filter((item2) => item2.record_id === Number(item))[0];
            // });
            // console.log('datatype', filteredData);
            // handleOpenAddSemantic(e, rowId)
            // const keyWordData = tagItem.keywords.filter((keyItem) => keyItem.keyword === );
            // const rowIdSymenticData = {
            //   displayName: tagItem.display_name,
            //   description: tagItem.description,
            //   keywords: tagItem.keywords
            // };
            // handleViewEditSymentic(tagItem.display_name);

            // setEditIdSemantic(rowIdSymenticData);

            // setDisplayNameSymentic(rowIdSymenticData);
            // setDescriptionSymentic(description);
            // setTagsArray(meta_data_tags);
            // setTagsArray(listArray);
            // setListArray(meta_data_tags.split(',')); not available meta_data_tags so creating error that's why hide
            // setDataTypesSymentic(filteredData);
          }}
        >
          <StyledIconButton className="actionButton squareIconButton">
            <AiFillEdit size={14} />
          </StyledIconButton>
        </Tooltip>
      </Box>
    );
  }

  return (
    <>
      <Tooltip title="Delete" placement="top" arrow>
        <StyledIconButton className="squareIconButton actionButton">
          <AiFillDelete size={14} />
        </StyledIconButton>
      </Tooltip>
      <Tooltip title="Edit" placement="top" arrow>
        <StyledIconButton className="squareIconButton actionButton ml-1">
          <AiFillEdit size={14} />
        </StyledIconButton>
      </Tooltip>
    </>
  );
}
