const CDN_URL =
  "https://cdn.jsdelivr.net/gh/Tony-Xu1113/abot-widget@0.4.0/dist/";

export const getImgUrl = (url: string, imgType = ""): string => {
  return `${CDN_URL}${url}${imgType !== "" ? "." : ""}${imgType}`;
};
