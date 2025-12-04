const BASE = import.meta.env.VITE_API_BASE_URL;

enum Api {
  GET_SETTING = "/merchant/channel/website",
  GET_HISTORY = "/merchant/chats/messages",
  GET_LAT_CHAT = "/merchant/chats/getLatestChat",
}

// 通用的请求配置接口
interface RequestConfig {
  method: "GET" | "POST";
  endpoint: Api;
  channelId?: string;
  body?: any;
  urlParams?: string;
}

// 通用的请求函数
async function makeRequest(config: RequestConfig) {
  const { method, endpoint, channelId, body, urlParams } = config;

  const token = localStorage.getItem("__ABOT_ACCESS_TOKEN__");
  let url = BASE + endpoint;
  if (urlParams) {
    url += urlParams;
  }

  const headers: { [key: string]: string } = {
    "Content-Type": "application/json",
  };

  if (channelId) {
    headers["Authorization"] = `Bearer ${token}`;
    headers["TENANT-ID"] = channelId;
    headers["Accept-Language"] = "zh_cn";
  }

  const requestOptions: RequestInit = {
    method,
    headers,
  };

  if (method === "POST" && body) {
    requestOptions.body = JSON.stringify(body);
  }

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response;
}

// 封装后的具体函数
export async function getStyleSetting(channelId?: string) {
  const urlParams = channelId ? `/${channelId}?_t=${new Date().getTime()}` : "";

  return makeRequest({
    method: "GET",
    endpoint: Api.GET_SETTING,
    channelId,
    urlParams,
  });
}

export async function getChatHistory(chatId: string, channelId?: string) {
  return makeRequest({
    method: "POST",
    endpoint: Api.GET_HISTORY,
    channelId,
    body: { chatId },
  });
}

export async function getLatestChat(channelId?: string) {
  return makeRequest({
    method: "GET",
    endpoint: Api.GET_LAT_CHAT,
    channelId,
  });
}
