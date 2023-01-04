export function pigLatin(str: string): string {
  return str
    .split(` `)
    .map((elem) => {
      if (/^[a-zA-Z]/.test(elem)) {
        let subArr = [...elem];
        return [...subArr.slice(1, subArr.length), ...subArr[0], `ay`].join(``);
      } else return elem;
    })
    .join(` `);
}
