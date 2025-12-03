const CDN_URL = import.meta.env.CDN_URL;

export const getImgUrl = (url: string, imgType = ""): string => {
  return `${CDN_URL}${url}${imgType !== "" ? "." : ""}${imgType}`;
};
