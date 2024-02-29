import { Autocomplete, Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import './formula.css';

function FormulaEditor({
  moreColumn,
  value,
  onChange,
  validation,
  fieldsData,
  validationIndex,
  setValidationObj,
  setRefreshOnChange,
  refreshOnChange,
  globelParamFieldValueArray
}) {
  console.log('moreColumn', fieldsData);
  console.log('moreColumn', value);
  console.log('moreColumn', validation);
  console.log('moreColumn', globelParamFieldValueArray);

  // const method1 = [
  //   { name: ',', value: ',' },
  //   { name: '(', value: '(' },
  //   { name: ')', value: ')' },
  //   { name: '+', value: '+' },
  //   { name: '-', value: '-' },
  //   { name: '*', value: '*' },
  //   { name: '/', value: '/' },
  //   { name: 'Power', value: 'Power' },
  //   { name: '0', value: '0' },
  //   { name: '1', value: '1' },
  //   { name: '2', value: '2' },
  //   { name: '3', value: '3' },
  //   { name: '4', value: '4' },
  //   { name: '5', value: '5' },
  //   { name: '6', value: '6' },
  //   { name: '7', value: '7' },
  //   { name: '8', value: '8' },
  //   { name: '9', value: '9' }
  // ];
  // const LeastGreatest = [
  //   { name: ',', value: ',' },
  //   { name: '(', value: '(' },
  //   { name: ')', value: ')' },
  //   { name: 'Least', value: 'least' },
  //   { name: 'Greatest', value: 'greatest' },
  //   { name: '0', value: '0' },
  //   { name: '1', value: '1' },
  //   { name: '2', value: '2' },
  //   { name: '3', value: '3' },
  //   { name: '4', value: '4' },
  //   { name: '5', value: '5' },
  //   { name: '6', value: '6' },
  //   { name: '7', value: '7' },
  //   { name: '8', value: '8' },
  //   { name: '9', value: '9' }
  // ];
  // const [allDropDownOption, setAllDropDownOptions] = useState(
  //   fieldsData.sub_category !== 'Least_Greatest' ? method1 : LeastGreatest
  // );
  const [allDropDownOption, setAllDropDownOptions] = useState([
    { name: ',', value: ',' },
    { name: '(', value: '(' },
    { name: ')', value: ')' },
    { name: '+', value: '+' },
    { name: '-', value: '-' },
    { name: '*', value: '*' },
    { name: '/', value: '/' },
    { name: 'Power', value: 'Power' },
    { name: '0', value: '0' },
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
    { name: '5', value: '5' },
    { name: '6', value: '6' },
    { name: '7', value: '7' },
    { name: '8', value: '8' },
    { name: '9', value: '9' }
  ]);

  const [allInsertedtags, setAllInsertedTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const [refreshComp, setRefreshComp] = useState([]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleOnClose = (event, option, reason, details) => {
    if (option && event.key === 'Enter') {
      // allDropDownOption
      addNewValueInArray(inputValue);
      // setInput(highlightedInput);
      // if (allDropDownOption.filter((item, index) => item.value === inputValue).length > 0) {
      //   console.log('newValue onCLose');
      //   addNewValueInArray(inputValue);
      // }
    }
    setIsOpen(false);
  };
  const addNewValueInArray = (newValue) => {
    console.log('addNewValueInArray', newValue);
    const prevInsertedData = allInsertedtags;
    if (newValue !== null) {
      prevInsertedData.push(newValue);
    }

    console.log('addNewValueInArray', prevInsertedData);
    setAllInsertedTags(prevInsertedData);

    onChange(
      prevInsertedData,
      validation,
      fieldsData,
      validationIndex,
      setValidationObj,
      setRefreshOnChange
    );

    setTimeout(() => {
      setInputValue('');
      setRefreshComp(new Date());
    }, 100);
  };
  useEffect(() => {
    console.log('rerender on refreshOnChange');
    console.log('inputValue', fieldsData, moreColumn);
    console.log('inputValue', inputValue);
    console.log('inputValue', value.formula);
    if (moreColumn || globelParamFieldValueArray) {
      const prevdata = allDropDownOption;

      // setInputValue(Object.keys(value).length > 0 ? value?.formula : 'something');
      // if (Object.keys(value).length > 0) {
      //   value?.formula.map((item, index) => {
      //     addNewValueInArray(item);
      //   });
      // }
      setAllDropDownOptions([...prevdata, ...moreColumn, ...globelParamFieldValueArray]);
    }
  }, [refreshOnChange]);
  useEffect(() => {
    console.log('rerender on validation');
    console.log('moreColumnuseEffect', fieldsData);
    console.log('moreColumnuseEffect', value);
    console.log('moreColumnuseEffect', validation);
    if (Object.keys(value).length > 0) {
      console.log('moreColumnuseEffect', value);
      if (value?.formula?.constructor.name === 'Array') {
        value?.formula?.map((item, index) => {
          console.log('addNewValueInArray', item);
          const prevInsertedData = allInsertedtags;
          if (item !== null) {
            prevInsertedData.push(item);
          }

          console.log('addNewValueInArray', prevInsertedData);
          setAllInsertedTags(prevInsertedData);
          onChange(
            prevInsertedData,
            validation,
            fieldsData,
            validationIndex,
            setValidationObj,
            setRefreshOnChange
          );
          // setTimeout(() => {
          //   setInputValue('');
          //   setRefreshComp(new Date());
          // }, 100);
        });
      }
    }
  }, [validation]);
  console.log('addNewValueInArray', allInsertedtags);
  console.log('inputValue', inputValue);

  return (
    <Box className="formulaEditorHolder">
      <Box className="stringAndInput">
        <Box className="arraToString">
          {allInsertedtags.map((tagsItems, tagsIndex) => tagsItems)}
        </Box>
        <Autocomplete
          className="formulaInput"
          classes={{
            root: 'formulaInputRoot',
            hasPopupIcon: 'hasPopupIcon',
            hasClearIcon: 'hasClearIcon',
            inputRoot: 'inputRoot',
            input: 'input',
            inputFocused: 'inputFocused',
            endAdornment: 'endAdornmentClose',
            clearIndicator: 'clearIndicator'
          }}
          freeSolo
          onChange={(e, newValue) => {
            console.log('newValue', newValue);
            // if (!allDropDownOption.filter((item, index) => item.value === newValue).length > 0) {
            //   console.log('newValue onChange');
            //   addNewValueInArray(newValue);
            // }
            // addNewValueInArray(newValue);
          }}
          open={isOpen}
          onOpen={handleOpen}
          onClose={handleOnClose}
          options={allDropDownOption.map((option) => option.name)}
          inputValue={inputValue}
          onInputChange={(e, value) => {
            console.log('newValueinput', value);
            addNewValueInArray(value);
            setInputValue(value);
            setRefreshComp(new Date());
          }}
          renderInput={(params) => {
            console.log('inputParam', params, inputValue);
            return (
              <TextField
                {...params}
                onChange={(e) => {
                  console.log('newValueisOnChage', e.target.value);
                  // addNewValueInArray(e.target.value);
                }}
                onKeyDown={(e) => {
                  console.log('onKeyDown', e.target.value);
                  console.log('onKeyDown', e.target.value === '');
                  // console.log('isOnChage', e.target.value);
                  if (e.key === 'Backspace' && e.target.value === '') {
                    const prevData = allInsertedtags;
                    prevData.pop();
                    console.log('isOnChage', prevData);

                    setAllInsertedTags(prevData);
                    onChange(
                      prevData,
                      validation,
                      fieldsData,
                      validationIndex,
                      setValidationObj,
                      setRefreshOnChange
                    );
                    setRefreshComp(new Date());
                  }
                }}
              />
            );
          }}
        />
      </Box>
    </Box>
  );
}

export default FormulaEditor;
