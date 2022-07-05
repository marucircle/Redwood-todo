export const classNames = <T>(...classes: T[]): string =>
  classes.filter(Boolean).join(' ')
