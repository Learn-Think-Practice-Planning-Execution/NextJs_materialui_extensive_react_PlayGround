export function getCellClassName(formData, params, applied) {
  console.log(params);
  console.log(formData);
  console.log(applied);

  let columnsToReplace = [];
  let numberToCheck = 0;
  if (applied.replaceText) {
    columnsToReplace = formData.replaceText.columnsToReplace;
  }
  if (applied.replaceCells) {
    columnsToReplace = formData.replaceCells.columnsToReplace;
  }
  if (applied.replaceDelimiter) {
    columnsToReplace = formData.replaceByDelimiter.columnsToReplace;
  }
  if (applied.replacePosition) {
    columnsToReplace = formData.replaceByPosition.columnsToReplace;
  }
  if (applied.replaceMisMatch) {
    columnsToReplace = formData.replaceByMismatch.columnsToReplace;
  }
  if (applied.replaceMissing) {
    columnsToReplace = formData.replaceMissing.columnsToReplace;
  }
  if (applied.extractText) {
    columnsToReplace = formData.extractText.columnsToReplace;
    numberToCheck = formData.extractText.numberOfCheck;
  }
  if (applied.extractNumber) {
    columnsToReplace = formData.extractNumber.columnsToReplace;
    numberToCheck = formData.extractNumber.numberOfCheck;
  }
  if (applied.extractDelimiter) {
    columnsToReplace = formData.extractByDelimiter.columnsToReplace;
    numberToCheck = formData.extractByDelimiter.numberOfCheck;
  }
  if (applied.extractPositionFirst) {
    columnsToReplace = formData.extractPositionFirst.columnsToReplace;
  }
  if (applied.extractPositionLast) {
    columnsToReplace = formData.extractPositionLast.columnsToReplace;
  }
  if (applied.extractPositionBetween) {
    columnsToReplace = formData.extractPositionBetween.columnsToReplace;
  }
  if (applied.countMatch) {
    columnsToReplace = formData.countMatch.columnsToReplace;
  }
  if (applied.splitDelimiter) {
    columnsToReplace = formData.splitByDelimiter.columnsToReplace;
  }
  if (applied.splitByPosition) {
    columnsToReplace = formData.splitByPosition.columnsToReplace;
  }
  if (applied.mergeColumn) {
    columnsToReplace = formData.mergeColumn.columnsToReplace;
  }
  if (applied.formatColumns) {
    columnsToReplace = formData.formatColumns.columnsToReplace;
  }

  if (
    columnsToReplace.filter((each) => each.columnName.toLowerCase() === params.field.toLowerCase())
      .length > 0
  ) {
    return 'hot';
  }
  if (
    columnsToReplace.filter(
      (each, index) => each.columnName.toLowerCase() + '-new' === params.field.toLowerCase()
    ).length > 0
  ) {
    return 'cold';
  }
  if (formData.splitByDelimiter) {
    if (formData.splitByDelimiter.no_of_split) {
      for (let i = 0; i < Number(formData.splitByDelimiter.no_of_split); i++) {
        console.log(i);
        if (
          columnsToReplace.filter(
            (each, index) =>
              each.columnName.toLowerCase() + '-' + Number(i + 2) === params.field.toLowerCase()
          ).length > 0
        ) {
          return 'cold';
        }
      }
    }
  }

  if (formData.splitByPosition) {
    if (
      columnsToReplace.filter(
        (each, index) => each.columnName.toLowerCase() + '-' + 2 === params.field.toLowerCase()
      ).length > 0
    ) {
      return 'cold';
    }
    if (
      columnsToReplace.filter(
        (each, index) => each.columnName.toLowerCase() + '-' + 3 === params.field.toLowerCase()
      ).length > 0
    ) {
      return 'cold';
    }
  }

  if (formData.mergeColumn) {
    if (
      columnsToReplace.filter(
        (each, index) =>
          'new-' + formData.mergeColumn.newColumnName.toLowerCase() === params.field.toLowerCase()
      ).length > 0
    ) {
      return 'cold';
    }
  }
  let matched = false;
  for (let i = 0; i < numberToCheck; i++) {
    if (
      columnsToReplace.filter(
        (each) => 'new' + each.columnName.toLowerCase() + i === params.field.toLowerCase()
      ).length > 0
    ) {
      matched = true;
    }
  }
  if (matched) {
    return 'cold';
  }
}

export function renderCell(formData, params, applied) {
  console.log(applied);
  if (applied.replaceText) {
    return renderReplaceTextCell(formData, params);
  } else if (applied.replaceCells) {
    return renderReplaceCells(formData, params);
  } else if (applied.replaceDelimiter) {
    return renderReplaceDelimiter(formData, params);
  } else if (applied.replacePosition) {
    return renderReplacePosition(formData, params);
  } else if (applied.replaceMisMatch) {
    return renderReplaceMismatch(formData, params);
  } else if (applied.replaceMissing) {
    return renderReplaceMissing(formData, params);
  } else if (applied.extractText) {
    return renderExtractReplace(formData, params);
  } else if (applied.extractNumber) {
    return renderExtractNumber(formData, params);
  } else if (applied.extractDelimiter) {
    return renderExtractDelimiter(formData, params);
  } else if (applied.extractPositionFirst) {
    return '';
  } else if (applied.extractPositionLast) {
    return '';
  } else if (applied.extractPositionBetween) {
    return '';
  } else if (applied.formatColumns) {
    return renderFormatedCell(formData, params);
  } else if (applied.splitDelimiter) {
    return renderSplitedCell(formData, params);
  } else if (applied.splitByPosition) {
    return renderSplitedNumberCell(formData, params);
  } else if (applied.mergeColumn) {
    return rendermergedColumn(formData, params);
  } else if (applied.countMatch) {
    return rendercountMatchColumn(formData, params);
  }
}

export function renderReplaceTextCell(formData, params) {
  let regEx = new RegExp(formData.replaceText.find, 'ig');
  if (formData.replaceText.caseSensitive) {
    regEx = new RegExp(formData.replaceText.find, 'g');
  }
  const regExReplace = new RegExp(formData.replaceText.replace, 'ig');
  //   params.value=(<span>{params.value}</span>)
  if (params.value) {
    let htmlToRender = `<span class="noChanges">${params.value}</span>`;
    formData.replaceText.columnsToReplace.forEach(({ columnName }) => {
      if (columnName.toLowerCase() === params.field.toLowerCase()) {
        htmlToRender = params.value.replace(
          regEx,
          `<span class="text-highlight text-strikeout">${formData.replaceText.find}</span>`
        );
      }
      if (columnName.toLowerCase() + '-new' === params.field.toLowerCase()) {
        htmlToRender = params.value.replace(
          regExReplace,
          `<span class="text-highlight text-replacement">${formData.replaceText.replace}</span>`
        );
      }
    });
    return <p className="gridDataPara" dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
  }
}

export function renderReplaceCells(formData, params) {
  let regEx = new RegExp(formData.replaceCells.find, 'ig');
  if (formData.replaceCells.caseSensitive) {
    regEx = new RegExp(formData.replaceCells.find, 'g');
  }
  const regExReplace = new RegExp(formData.replaceCells.replace, 'ig');
  //   params.value=(<span>{params.value}</span>)
  let htmlToRender = params.value;
  formData.replaceCells.columnsToReplace.forEach(({ columnName }) => {
    if (columnName.toLowerCase() === params.field.toLowerCase()) {
      htmlToRender = params.value.replace(
        regEx,
        `<span class="text-highlight text-strikeout">${formData.replaceCells.find}</span>`
      );
    }
    if (columnName.toLowerCase() + '-new' === params.field.toLowerCase()) {
      htmlToRender = params.value.replace(
        regExReplace,
        `<span class="text-highlight text-replacement">${formData.replaceCells.replace}</span>`
      );
    }
  });
  return <p dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
}

export function renderReplaceDelimiter(formData, params) {
  let sense;
  if (formData.replaceByDelimiter.caseSensitive) {
    sense = 'g';
  } else {
    sense = 'ig';
  }
  let pattern;
  if (formData.replaceByDelimiter.isInclude) {
    pattern = '' + formData.replaceByDelimiter.start + '.+' + formData.replaceByDelimiter.end + '';
  } else {
    pattern =
      '(?<=' +
      formData.replaceByDelimiter.start +
      ').+?(?=' +
      formData.replaceByDelimiter.end +
      ')';
  }
  const regEx = new RegExp(pattern, sense);
  //   params.value=(<span>{params.value}</span>)
  let htmlToRender = params.value;
  formData.replaceByDelimiter.columnsToReplace.forEach(({ columnName }) => {
    if (columnName.toLowerCase() === params.field.toLowerCase()) {
      const matched = params.value.match(regEx);
      if (matched && matched.length > 0) {
        htmlToRender = params.value.replace(
          matched[0],
          `<span class="text-highlight text-strikeout">${matched[0]}</span>`
        );
      }
    }
    if (columnName.toLowerCase() + '-new' === params.field.toLowerCase()) {
      htmlToRender = params.value.replace(
        regEx,
        `<span class="text-highlight text-replacement">${formData.replaceByDelimiter.replace}</span>`
      );
    }
  });
  return <p dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
}

export function renderReplacePosition(formData, params) {
  //   params.value=(<span>{params.value}</span>)
  let htmlToRender = params.value;
  formData.replaceByPosition.columnsToReplace.forEach(({ columnName }) => {
    if (columnName.toLowerCase() === params.field.toLowerCase()) {
      if (params.value.length > formData.replaceByPosition.start) {
        const replaceTo = params.value.substring(
          formData.replaceByPosition.start,
          formData.replaceByPosition.end
        );
        htmlToRender =
          params.value.substring(0, formData.replaceByPosition.start) +
          `<span class="text-highlight text-strikeout">${replaceTo}</span>` +
          params.value.substring(formData.replaceByPosition.end);
      }
    }
    if (columnName.toLowerCase() + '-new' === params.field.toLowerCase()) {
      if (params.value.length > formData.replaceByPosition.start) {
        htmlToRender =
          params.value.substring(0, formData.replaceByPosition.start) +
          `<span class="text-highlight text-replacement">${formData.replaceByPosition.replace}</span>` +
          params.value.substring(formData.replaceByPosition.end);
      }
    }
  });
  return <p dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
}

export function renderReplaceMismatch(formData, params) {
  let htmlToRender = params.value;
  formData.replaceByMismatch.columnsToReplace.forEach(({ columnName }) => {
    if (columnName.toLowerCase() === params.field.toLowerCase()) {
      if (typeof params.value !== typeof formData.replaceByMismatch.type) {
        htmlToRender = `<span class="text-highlight text-strikeout">${params.value}</span>`;
      }
    }
    if (columnName.toLowerCase() + '-new' === params.field.toLowerCase()) {
      if (typeof params.value !== typeof formData.replaceByMismatch.type) {
        htmlToRender = `<span class="text-highlight text-replacement">${formData.replaceByMismatch.replace}</span>`;
      }
    }
  });
  return <p dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
}

export function renderReplaceMissing(formData, params) {
  let htmlToRender = params.value;
  formData.replaceMissing.columnsToReplace.forEach(({ columnName }) => {
    if (columnName.toLowerCase() + '-new' === params.field.toLowerCase()) {
      console.log(params.value);
      if (
        !params.value ||
        params.value === formData.replaceMissing.replace ||
        typeof params.value === typeof undefined ||
        typeof params.value === typeof 'undefined'
      ) {
        htmlToRender = `<span class="text-highlight text-replacement">${formData.replaceMissing.replace}</span>`;
      }
    }
  });
  return <p dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
}

export function renderExtractReplace(formData, params) {
  const glob = formData.extractText.caseSensitive ? 'ig' : 'g';

  // let regExString = "(?<=" + startAfter + ")" + pattern + "+?(?=" + endBefore + ")";
  let regExString = formData.extractText.pattern;
  // let regEx = new RegExp("(?<=" + startAfter + ")" + pattern + "+?(?=" + endBefore + ")", glob)
  // console.log(glob)
  if (formData.extractText.startAfter && !formData.extractText.endBefore) {
    regExString =
      '(?<=' + formData.extractText.startAfter + ')' + formData.extractText.pattern + '+?';
  }
  if (formData.extractText.startAfter && formData.extractText.endBefore) {
    regExString =
      '(?<=' +
      formData.extractText.startAfter +
      ')' +
      formData.extractText.pattern +
      '+?(?=' +
      formData.extractText.endBefore +
      ')';
  }
  if (!formData.extractText.startAfter && formData.extractText.endBefore) {
    regExString = formData.extractText.pattern + '+?(?=' + formData.extractText.endBefore + ')';
  }

  const regEx = new RegExp(regExString, glob);
  let htmlToRender = params.value;
  formData.extractText.columnsToReplace.forEach(({ columnName }) => {
    if (columnName.toLowerCase() === params.field.toLowerCase()) {
      const matched = params.value.match(regEx);
      if (matched && matched.length > 0) {
        const replaced = params.value;
        for (let i = 0; i < matched.length; i++) {
          if (i < formData.extractText.numberOfCheck) {
            htmlToRender = params.value.replaceAll(
              matched[i],
              `<span class="text-highlight">${matched[i]}</span>`
            );
            console.log(replaced);
          }
        }
      }
    }
  });
  return <p dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
}

export function renderExtractNumber(formData, params) {
  let htmlToRender = params.value;
  const regEx = /\b\d+/g;
  formData.extractNumber.columnsToReplace.forEach(({ columnName }) => {
    if (columnName.toLowerCase() === params.field.toLowerCase()) {
      // let allOccurances = params.value.match(regEx);
      // console.log(allOccurances);
      const matched = params.value.match(regEx);
      if (matched && matched.length > 0) {
        let replaced = params.value;
        for (let i = 0; i < matched.length; i++) {
          if (i < formData.extractNumber.numberOfCheck)
            replaced = replaced.replace(
              matched[i],
              `<span class="text-highlight">${matched[i]}</span>`
            );
          console.log(replaced);
        }
        htmlToRender = replaced;
      }
    }
  });
  return <p dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
}

export function renderExtractDelimiter(formData, params) {
  let htmlToRender = params.value;
  let sense;
  if (formData.extractByDelimiter.caseSensitive) {
    sense = 'g';
  } else {
    sense = 'ig';
  }
  let pattern;
  if (formData.extractByDelimiter.isInclude) {
    pattern = '' + formData.extractByDelimiter.start + '.+' + formData.extractByDelimiter.end + '';
  } else {
    pattern =
      '(?<=' +
      formData.extractByDelimiter.start +
      ').+?(?=' +
      formData.extractByDelimiter.end +
      ')';
  }
  const regEx = new RegExp(pattern, sense);

  formData.extractByDelimiter.columnsToReplace.forEach(({ columnName }) => {
    if (columnName.toLowerCase() === params.field.toLowerCase()) {
      const matched = params.value.match(regEx);
      // console.log(entry[columnTarget.columnName]);
      // console.log(matched);

      if (matched && matched.length > 0) {
        for (let i = 0; i < matched.length; i++) {
          if (i < formData.extractByDelimiter.numberOfCheck) {
            htmlToRender = params.value.replaceAll(
              matched[i],
              `<span class="text-highlight">${matched[i]}</span>`
            );
          }
        }
      }
    }
  });
  return <p dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
}
export function renderFormatedCell(formData, params) {
  if (params.value) {
    let htmlToRender = params.value;
    formData.formatColumns.columnsToReplace.forEach(({ columnName }) => {
      if (columnName.toLowerCase() === params.field.toLowerCase()) {
        htmlToRender = `<span class="text-highlight text-strikeout">${params.value}</span>`;
      }
      if (columnName.toLowerCase() + '-new' === params.field.toLowerCase()) {
        htmlToRender = `<span class="text-highlight text-replacement">${params.value}</span>`;
      }
    });
    // return <p className="gridDataPara" dangerouslySetInnerHTML={{ __html: htmlToRender }}></p>;
  }
}

export function renderSplitedCell(formData, params) {
  // console.log(params)
  // debugger;
  if (params.value) {
    let htmlToRender = params.value;
    formData.splitByDelimiter.columnsToReplace.forEach(({ columnName }, index) => {
      if (columnName.toLowerCase() === params.field.toLowerCase()) {
        htmlToRender = `<span class="text-highlight text-strikeout">${params.value}</span>`;
      }
      console.log(columnName.toLowerCase() + '-' + Number(index + 2), params.field.toLowerCase());
      // debugger;
      for (let i = 0; i < formData.splitByDelimiter.no_of_split; i++) {
        if (columnName.toLowerCase() + '-' + Number(i + 2) === params.field.toLowerCase()) {
          htmlToRender = `<span class="text-highlight text-replacement">${params.value}</span>`;
        }
      }
    });
    return <p className="gridDataPara" dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
  }
}

export function renderSplitedNumberCell(formData, params) {
  // console.log(params)
  // debugger;
  if (params.value) {
    let htmlToRender = params.value;
    formData.splitByPosition.columnsToReplace.forEach(({ columnName }, index) => {
      if (columnName.toLowerCase() === params.field.toLowerCase()) {
        htmlToRender = `<span class="text-highlight text-strikeout">${params.value}</span>`;
      }
      console.log(columnName.toLowerCase() + '-' + Number(index + 2), params.field.toLowerCase());

      if (columnName.toLowerCase() + '-2' === params.field.toLowerCase()) {
        htmlToRender = `<span class="text-highlight text-replacement">${params.value}</span>`;
      }
      if (columnName.toLowerCase() + '-3' === params.field.toLowerCase()) {
        htmlToRender = `<span class="text-highlight text-replacement">${params.value}</span>`;
      }
    });
    return <p className="gridDataPara" dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
  }
}

export function rendermergedColumn(formData, params) {
  // console.log(params)
  // debugger;
  if (params.value) {
    let htmlToRender = params.value;
    formData.mergeColumn.columnsToReplace.forEach(({ columnName }, index) => {
      if (columnName.toLowerCase() === params.field.toLowerCase()) {
        htmlToRender = `<span class="text-highlight text-strikeout">${params.value}</span>`;
      }
      console.log(columnName.toLowerCase() + '-' + Number(index + 2), params.field.toLowerCase());
      // debugger;
      if (columnName.toLowerCase() + '-' + Number(index + 2) === params.field.toLowerCase()) {
        htmlToRender = `<span class="text-highlight text-replacement">${params.value}</span>`;
      }
    });
    return <p className="gridDataPara" dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
  }
}

export function rendercountMatchColumn(formData, params) {
  console.log(formData);
  // debugger;
  if (params.value) {
    let htmlToRender = params.value;
    formData.countMatch.columnsToReplace.forEach(({ columnName }, index) => {
      if (columnName.toLowerCase() === params.field.toLowerCase()) {
        htmlToRender = `<span class="text-highlight text-strikeout">${params.value}</span>`;
      }
      // debugger;
      if (
        columnName.toLowerCase() + '-' + formData.countMatch.new_column_name ===
        params.field.toLowerCase()
      ) {
        htmlToRender = `<span class="text-highlight text-replacement">${params.value}</span>`;
      }
    });
    return <p className="gridDataPara" dangerouslySetInnerHTML={{ __html: htmlToRender }} />;
  }
}
