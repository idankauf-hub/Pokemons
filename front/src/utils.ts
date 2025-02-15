export const joinArray = (
  array?: string[],
  separator: string = ", "
): string => {
  return array && array?.length > 0 ? array?.join(separator) : "None";
};
