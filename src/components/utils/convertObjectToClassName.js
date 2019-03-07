const convertObjectToClassName = (prefix, obj) => {
  if (Object.keys(obj).length === 0) return false;
  return Object.entries(obj)
    .map(item => {
      if (typeof item[1] === 'object') {
        return Object.entries(item[1])
          .map(subItem => {
            const direction = subItem[0].substr(0, 1);
            const value = subItem[1];
            return `${prefix}-${direction}-${item[0]}--${value}`;
          })
          .join(' ');
      } else {
        const direction = item[0].substr(0, 1);
        const value = item[1];
        return `${prefix}-${direction}--${value}`;
      }
    })
    .join(' ');
};

export default convertObjectToClassName;
