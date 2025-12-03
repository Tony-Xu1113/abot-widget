const CDN_URL =
  "https://cdn.jsdelivr.net/gh/Tony-Xu1113/abot-widget@v0.3.0/dist/";

export const getImgUrl = (url: string, imgType = ""): string => {
  return `${CDN_URL}${url}${imgType !== "" ? "." : ""}${imgType}`;
};
