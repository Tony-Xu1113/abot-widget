export enum MessageType {
  QU = "queueUpdate",
  CC = "chatConnect",
  CD = "chatDisconnect",
  ET = "eventTerminate",
  TEXT = "text",
  BINARY = "binary",
  RECOM = "recommendations",
}

export enum QueueType {
  SERVING = "SERVING",
  WAITING = "WAITING",
}

export enum ActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

export enum ChannelType {
  WEBSITE = 1,
  TELEGRAM = 2,
}

export enum SenderType {
  AGENT = "agent",
  CUSTOM = "custom",
  SYS = "system",
}

export enum ChatStatus {
  WAITING,
  ROBOT,
  AGENT,
  TERMINATION,
}

export enum SenderIdType {
  SYS = -1,
  TO_AGENT = -2,
  TO_CUSTOM = -3,
}
