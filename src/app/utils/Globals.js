export function getGlobals() {
  let GLOBAL_PATH = '';
  const { href } = window.location;
  // console.log('urls', window.location);
  if (href.includes('dev')) {
    GLOBAL_PATH = '/dev';
  } else if (href.includes('uat')) {
    GLOBAL_PATH = '/uat';
  } else if (href.includes('qa')) {
    GLOBAL_PATH = '/qa';
  }
  // console.log('urls', GLOBAL_PATH);
  return { GLOBAL_PATH };
}
