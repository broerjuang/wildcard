import { getFinalRecords, getFinalAttributes } from './getFinalTable'

// this middleware sends redux information to the console.
// it would be better to get Redux Dev Tools working, but for some reaosn
// Redux Dev Tools doesn't currently work for this extension, so we roll our own
export const debugMiddleware = ({ getState }) => next => action => {
  console.debug('will dispatch', action)

  // Call the next dispatch method in the middleware chain.
  const returnValue = next(action)

  // todo: this is where we're going to update the state in the extension.
  // (for now, we don't need to do it because the table lives inside the app)
  console.debug('state after dispatch', getState())

  return returnValue
}
