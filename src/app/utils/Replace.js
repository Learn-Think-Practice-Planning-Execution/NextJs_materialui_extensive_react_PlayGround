const camelCase = (str) => {
  // alert(str)
  // let str2 = str.replace(/_/g, ' ');
  let camCase = '';
  [...str].forEach((item, i) => {
    camCase += i === 0 ? item.toUpperCase() : item.toLowerCase();
  });
  return camCase;
};

export function replaceTextOrPattern(
  rows,
  columnTarget,
  find,
  replaceText,
  isCaseSensitive = false
) {
  let regEx = new RegExp(find, 'ig');
  if (isCaseSensitive) {
    regEx = new RegExp(find, 'g');
  }
  const totalData = [...rows];
  console.log(totalData);
  totalData.forEach((entry) => {
    columnTarget.forEach(({ columnName }) => {
      if (entry[columnName]) {
        console.log(entry[columnName]);
        // debugger;
        entry[columnName + '-new'] = entry[columnName].replace(regEx, replaceText);
      }
    });
  });

  return totalData;
}

export function replaceCells(rows, columnTarget, find, replaceText, isCaseSensitive = false) {
  const totalData = [...rows];
  let regEx = new RegExp('^' + find + '$', 'ig');
  if (isCaseSensitive) {
    regEx = new RegExp('^' + find + '$', 'g');
  }
  totalData.forEach((entry) => {
    columnTarget.forEach(({ columnName }) => {
      entry[columnName + '-new'] = (entry[columnName] + '').replace(regEx, replaceText);
    });
  });
  return totalData;
}

export function replaceByDelimiter(
  totalData,
  columnTarget,
  start,
  end,
  replace,
  isCaseSensitive = false,
  isInclude = false
) {
  let sense;
  if (isCaseSensitive) {
    sense = 'g';
  } else {
    sense = 'ig';
  }
  // isCaseSensitive ? (sense = 'g') : (sense = 'ig');
  let pattern;
  if (isInclude) {
    pattern = '' + start + '.+' + end + '';
  } else {
    pattern = '(?<=' + start + ').+?(?=' + end + ')';
  }
  const regEx = new RegExp(pattern, sense);
  totalData.forEach((entry) => {
    columnTarget.forEach(({ columnName }) => {
      entry[columnName + '-new'] = entry[columnName].replace(regEx, replace);
    });
  });
  return totalData;
}

export function replaceByPositions(
  totalData,
  columnTarget,
  start,
  end,
  replace,
  isCaseSensitive = false
) {
  let sense;
  if (isCaseSensitive) {
    sense = 'g';
  } else {
    sense = 'ig';
  }

  totalData.forEach((entry) => {
    columnTarget.forEach(({ columnName }) => {
      if (entry[columnName].length > start) {
        entry[columnName + '-new'] =
          entry[columnName].substring(0, start) + replace + entry[columnName].substring(end);
      } else {
        entry[columnName + '-new'] = entry[columnName];
      }
    });
  });
  return totalData;
}

export function replaceByMisMatch(totalData, targets, type, replace) {
  totalData.forEach((entry) => {
    targets.forEach(({ columnType, columnName }) => {
      if (typeof entry[columnName] !== typeof type) {
        entry[columnName + '-new'] = replace;
      } else {
        entry[columnName + '-new'] = entry[columnName];
      }
    });
  });
  return totalData;
}

export function replaceByMissing(totalData, targets, replace) {
  totalData.forEach((entry) => {
    targets.forEach(({ columnName }) => {
      if (
        entry[columnName] === '' ||
        typeof entry[columnName] === typeof undefined ||
        typeof entry[columnName] === typeof 'undefined'
      ) {
        entry[columnName + '-new'] = replace;
      } else {
        entry[columnName + '-new'] = entry[columnName];
      }
    });
  });
  return totalData;
}

export function textExtractByPattern(
  data,
  column,
  pattern,
  inSensitive = true,
  startAfter = undefined,
  endBefore = undefined,
  numberOfCheck = 1
) {
  const glob = inSensitive ? 'ig' : 'g';

  // let regExString = "(?<=" + startAfter + ")" + pattern + "+?(?=" + endBefore + ")";
  let regExString = pattern;
  // const regEx = new RegExp("(?<=" + startAfter + ")" + pattern + "+?(?=" + endBefore + ")", glob)
  // console.log(glob)
  if (startAfter && !endBefore) {
    regExString = '(?<=' + startAfter + ')' + pattern + '+?';
  }
  if (startAfter && endBefore) {
    regExString = '(?<=' + startAfter + ')' + pattern + '+?(?=' + endBefore + ')';
  }
  if (!startAfter && endBefore) {
    regExString = pattern + '+?(?=' + endBefore + ')';
  }

  const regEx = new RegExp(regExString, glob);

  let newColumn;

  return data.map((item) => {
    const matched = item[column.columnName].match(regEx);
    console.log(item[column.columnName] + ' - ' + matched);

    for (let i = 0; i < numberOfCheck; i++) {
      newColumn = 'new' + column.columnName + i;
      if (matched && matched.length > i) {
        item[newColumn] = matched[i];
      } else {
        item[newColumn] = null;
      }
    }
    return item;
  });
  // console.log("Extract", data)
}

export const extractByNumber = (data, column, numberOfMatch) => {
  const regEx = /\b\d+/g;
  let newColumn;
  if (numberOfMatch > 0) {
    return data.map((item) => {
      const allOccurances = item[column.columnName].match(regEx);
      for (let i = 0; i < numberOfMatch; i++) {
        if (allOccurances && allOccurances.length > i) {
          item['new' + column.columnName + '' + i] = allOccurances[i];
        } else {
          item['new' + column.columnName + '' + i] = null;
        }
      }
      return item;
    });
  } else {
    return data;
  }
};

export const extractByDelimiter = (
  totalData,
  columnTarget,
  start,
  end,
  numberOfMatch,
  isCaseSensitive = false,
  isInclude = false
) => {
  let sense;
  if (isCaseSensitive) {
    sense = 'g';
  } else {
    sense = 'ig';
  }
  let pattern;
  if (isInclude) {
    pattern = '' + start + '.+' + end + '';
  } else {
    pattern = '(?<=' + start + ').+?(?=' + end + ')';
  }
  const regEx = new RegExp(pattern, sense);

  return totalData.map((entry) => {
    const matched = entry[columnTarget.columnName].match(regEx);
    console.log(entry[columnTarget.columnName]);
    console.log(matched);

    for (let i = 0; i < numberOfMatch; i++) {
      if (matched && matched.length > i) {
        entry['new' + columnTarget.columnName + '' + i] = matched[i];
      } else {
        entry['new' + columnTarget.columnName + '' + i] = null;
      }
    }
    return entry;
  });
  // console.log(totalData, ' delimiter')
};

function getRegs(str, start, end, sense) {
  const st = str.charAt(start - 1);
  const en = str.charAt(end - 1);
  return new RegExp('(?<=' + st + ').+(?=' + en + ')', sense);
}
export const extractByCharacter = (totalData, columnTarget, option, start, end, numberOfChar) => {
  let pattern;
  if (option === 'first_char') {
    pattern = '^[a-zA-Z0-9.&() ]{' + numberOfChar + '}';
  }
  if (option === 'last_char') {
    pattern = '[a-zA-Z0-9.&() ]{' + numberOfChar + '}$';
  }

  const regEx = new RegExp(pattern, 'g');
  let matched;
  // console.log(pattern)
  return totalData.map((entry) => {
    if (option === 'position') {
      const de = getRegs(entry[columnTarget.columnName], start, end, 'g');
      matched = entry[columnTarget.columnName].match(de);
    } else {
      console.log(columnTarget);
      matched = entry[columnTarget.columnName].match(regEx);
    }
    if (matched && matched.length > 0) {
      entry[columnTarget.columnName + '-new'] = matched[0];
    } else {
      entry[columnTarget.columnName + '-new'] = '';
    }
    // console.log(matched);
    return entry;
  });
};

export const formateColumns = (rows, columnTarget, option, textToAdd, padText, padlength) => {
  const totalData = [...rows];
  totalData.forEach((entry) => {
    columnTarget.forEach(({ columnName }) => {
      if (entry[columnName]) {
        console.log(entry[columnName]);
        // debugger;
        if (option === 'upper_case') {
          entry[columnName + '-new'] = entry[columnName].toUpperCase();
        }
        if (option === 'lower_case') {
          entry[columnName + '-new'] = entry[columnName].toLowerCase();
        }
        if (option === 'proper_case') {
          entry[columnName + '-new'] = camelCase(entry[columnName]);
        }
        if (option === 'trim_leading_and_trailing_whitespaces') {
          entry[columnName + '-new'] = entry[columnName].trim();
        }
        if (option === 'trim_leading_and_trailing_quotes') {
          entry[columnName + '-new'] = entry[columnName].replace(/['"]+/g, '');
        }
        if (option === 'remove_whitespace') {
          entry[columnName + '-new'] = entry[columnName].split(' ').join('');
        }
        if (option === 'remove_symbols') {
          entry[columnName + '-new'] = entry[columnName].replace(/[^a-zA-Z ]/g, '');
        }
        if (option === 'add_prefix') {
          entry[columnName + '-new'] = textToAdd + entry[columnName];
        }
        if (option === 'add_suffix') {
          entry[columnName + '-new'] = entry[columnName] + textToAdd;
        }
        if (option === 'pad_text_with_leading_characters') {
          if (entry[columnName].length <= padlength) {
            entry[columnName + '-new'] = padText + entry[columnName];
          } else {
            entry[columnName + '-new'] = entry[columnName];
          }
        }
      }
    });
  });
  return totalData;
};

export const countMatch = (
  rows,
  columnTarget,
  option,
  text_or_pattern_to_count,
  starting_pattern,
  ending_pattern,
  isIgnore_case,
  new_column_name
) => {
  const totalData = [...rows];
  let regEx = new RegExp(text_or_pattern_to_count, 'ig');
  if (option === 'between_two_delimiters') {
    totalData.forEach((entry) => {
      columnTarget.forEach(({ columnName }) => {
        if (entry[columnName]) {
          if (new_column_name !== '') {
            entry[columnName + '-' + new_column_name] = numberOfDifferentSubstrings(
              entry[columnName].toLowerCase(),
              starting_pattern.toLowerCase(),
              ending_pattern.toLowerCase()
            );
          } else {
            entry[columnName + '-new'] = numberOfDifferentSubstrings(
              entry[columnName].toLowerCase(),
              starting_pattern.toLowerCase(),
              ending_pattern.toLowerCase()
            );
          }
        }
      });
    });
  } else {
    if (isIgnore_case) {
      regEx = new RegExp(text_or_pattern_to_count, 'g');
    }
    if (starting_pattern !== '') {
      regEx = new RegExp(starting_pattern + text_or_pattern_to_count, 'g');
    }
    if (ending_pattern !== '') {
      regEx = new RegExp(text_or_pattern_to_count + ending_pattern, 'g');
    }
    if (starting_pattern !== '' && ending_pattern !== '') {
      regEx = new RegExp(starting_pattern + text_or_pattern_to_count + ending_pattern, 'g');
    }

    totalData.forEach((entry) => {
      columnTarget.forEach(({ columnName }) => {
        if (entry[columnName]) {
          console.log(entry[columnName]);
          if (new_column_name !== '') {
            entry[columnName + '-' + new_column_name] = (
              entry[columnName].match(regEx) || []
            ).length;
          } else {
            entry[columnName + '-new'] = (entry[columnName].match(regEx) || []).length;
          }
        }
      });
    });
  }

  return totalData;
};

export const splitBuDelimiter = (
  rows,
  columnTarget,
  option,
  by_delimiter,
  start_delimiter,
  end_delimiter,
  no_of_split,
  multiple_delimiter
) => {
  const totalData = [...rows];
  totalData.forEach((entry) => {
    columnTarget.forEach(({ columnName }) => {
      if (entry[columnName]) {
        if (option === 'by_delimiter' && by_delimiter !== '') {
          const noOfColumns = entry[columnName].split(by_delimiter);
          noOfColumns.map((item, index) => {
            if (index < no_of_split) {
              return (entry[columnName + '-' + Number(index + 2)] = item);
            }
          });
        }
        if (option === 'between_two_delimiter') {
          const pattern = '' + start_delimiter + '.+' + end_delimiter + '';
          const regEx = new RegExp(pattern, 'ig');
          console.log(regEx);
          // let splitText = entry[columnName].replace(regEx, replace);
          const noOfColumns = entry[columnName].toLowerCase().split(regEx);
          console.log(noOfColumns);
          noOfColumns.map((item, index) => {
            if (index < no_of_split) {
              return (entry[columnName + '-' + Number(index + 2)] = item);
            }
          });
        }
        if (option === 'multi_delimiter') {
          let pattern = '';
          multiple_delimiter.forEach((item, index) => {
            pattern += item + '.+';
          });
          console.log(pattern);
          const regEx = new RegExp(pattern, 'ig');
          console.log(regEx);
          // let splitText = entry[columnName].replace(regEx, replace);
          const noOfColumns = entry[columnName].toLowerCase().split(regEx);
          noOfColumns.map((item, index) => {
            if (index < no_of_split) {
              return (entry[columnName + '-' + Number(index + 2)] = item);
            }
          });
        }
      }
    });
  });
  return totalData;
};

export const splitByPostion = (
  rows,
  columnTarget,
  option,
  byPosition,
  startPosition,
  endPosition
) => {
  const totalData = [...rows];
  totalData.forEach((entry) => {
    columnTarget.forEach(({ columnName }) => {
      if (entry[columnName]) {
        if (option === 'by_position' && byPosition !== '') {
          console.log(byPosition);
          const noOfColumns = [
            entry[columnName].substring(0, byPosition),
            entry[columnName].substring(byPosition)
          ];
          noOfColumns.map((item, index) => {
            // if(index<no_of_split){
            return (entry[columnName + '-' + Number(index + 2)] = item);
            // }
          });
        }
        if (option === 'between_two_positions') {
          // let splitText = entry[columnName].replace(regEx, replace);
          const noOfColumns = [
            entry[columnName].substring(0, startPosition),
            entry[columnName].substring(endPosition)
          ];
          noOfColumns.map((item, index) => {
            // if(index<no_of_split){
            return (entry[columnName + '-' + Number(index + 2)] = item);
            // }
          });
        }
      }
    });
  });
  return totalData;
};

export const mergeColumn = (
  rows,
  columnTarget,
  seprator,
  newColumnName,
  start_delimiter,
  end_delimiter,
  no_of_split,
  multiple_delimiter
) => {
  console.log(newColumnName);
  // debugger;

  const totalData = [...rows];
  totalData.forEach((entry) => {
    let string = '';
    let colName = '';
    columnTarget.forEach((item, index) => {
      // console.log(entry[item.columnName])
      // debugger;
      string += entry[item.columnName];
      colName += item.columnName;
      if (index < columnTarget.length - 1) {
        string += seprator;
        colName += seprator;
      }
    });
    return (entry['new-' + newColumnName] = string);
  });
  return totalData;
};

function numberOfDifferentSubstrings(s, a, b) {
  let ans = 0;
  const ls = s.length;
  const x = new Array(ls);
  const y = new Array(ls);

  for (let i = 0; i < ls; i++) {
    x[i] = 0;
    y[i] = 0;
  }
  for (let i = 0; i < ls; i++) {
    if (s[i] === a) x[i] = 1;
    if (s[i] === b) y[i] = 1;
  }
  const hash = new Set();
  let curr_substr = '';
  for (let i = 0; i < ls; i++) {
    if (x[i] !== 0) {
      for (let j = i; j < ls; j++) {
        if (y[j] === 0) curr_substr += s[i];
        if (y[j] !== 0) {
          curr_substr += s[j];
          if (!hash.has(curr_substr)) ans++;
          hash.add(curr_substr);
        }
      }
      curr_substr = '';
    }
  }
  return ans;
}
