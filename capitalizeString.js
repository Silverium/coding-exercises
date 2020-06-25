export const capitalizeString = (s) => {
  let result = s.trim(); // spaces at ends
  result = result.replace(/\s+/g, ' '); // double spaces
  result = result.replace(/(?:\s*)([\.\?\!;:,])(?:\s*)/g, '$1'); // spaces before and after punctuation
  result = result.replace(/([\?\!;:,]|\.+)(\w)/g, (match, p1, p2) =>{
    const isLower = /[,:;]|^\.{3}$/.test(p1);
    return p1 + ' ' + (isLower? p2 : p2.toUpperCase())
  })
  result = result[0].toUpperCase() + result.substring(1)
  return result;
};
