const HightLight = (props: any) => {
  const { inputValue, str } = props;
  if (!inputValue) return str;
  const regexp = new RegExp(inputValue, "ig");
  const matchValue = str.match(regexp);
  if (matchValue) {
    return str
      .split(regexp)
      .map((string: string, index: number, array: any[]) => {
        if (index < array.length - 1) {
          const firstMatchValue = matchValue.shift();
          return (
            <>
              {string} <span className="span-yellow">{firstMatchValue}</span>
            </>
          );
        }
        return string;
      });
  }
  return str;
};

export default HightLight;
