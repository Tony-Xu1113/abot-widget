/**
 * 客服入口样式
 * @INVISIBLE 隐藏
 * @RECT 竖版文字 长方形框
 * @SQUARE 横版文字 长方形框
 * @CIRCLE 横版文字 圆形框
 */
export enum EntranceType {
  INVISIBLE = 0,
  RECT = 1,
  SQUARE = 2,
  CIRCLE = 3,
}

// 客服入口位置
export enum EntranceLocationType {
  TOPLEFT = 1,
  TOPRIGHT = 2,
  MIDDLELEFT = 3,
  MIDDLERIGHT = 4,
  BOTTOMLEFT = 5,
  BOTTOMRIGHT = 6,
}

// sessionEnum 在线客服 -> 我的会话
export enum ChatFunctionType {
  INFO = "customerInfo",
  QUICKREPLY = "quickReply",
  KNOWLEDGE = "knowledge",
  TRANSLATE = "translate",
  SESSION = "sessionRecord",
  ORDER = "orderRecord",
}

export enum ChannelType {
  WEBSITE = 1,
  TELEGRAM = 2,
}
