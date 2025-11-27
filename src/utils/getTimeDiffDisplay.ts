import dayjs from 'dayjs'

export const getTimeDiffDisplay = (time: string) => {
  const now = new Date()
  const thisTime = new Date(time)

  // minutes
  const timeDiff = (now.getTime() - thisTime.getTime()) / 1000 / 60

  if (timeDiff < 10) {
    return { time: timeDiff.toFixed(0), label: 'session.time.yet' }
  } else if (timeDiff < 180) {
    return { time: (timeDiff - 1).toFixed(0), label: 'session.time.minutes' }
  } else if (timeDiff < 1440) {
    return { time: (timeDiff / 60 - 1).toFixed(0), label: 'session.time.hours' }
  } else {
    return { time: (timeDiff / 60 / 24).toFixed(0), label: 'session.time.days' }
  }
}

export const getCurrentTimeString = () => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss')
}
