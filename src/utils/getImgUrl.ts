export const getImgUrl = (url: string, imgType=''): string => {
  return `${url}${imgType !== "" ? "." : ""}${imgType}`;
};
