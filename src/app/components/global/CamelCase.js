/**
 *Handling function for camelCase
 */
export function camelCase(str) {
  if (str) {
    // let str2 = str.replace (/_/g, ' ');
    let camCase = '';
    [...str].forEach((item, i) => {
      camCase += i === 0 ? item.toUpperCase() : item.toLowerCase();
    });
    return camCase;
  }
  return '';
}
