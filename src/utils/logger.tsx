import log from 'loglevel';
const ENV_VAR : string | undefined = process.env.REACT_APP_ENV_VAR
ENV_VAR === 'Production' ? log.setLevel("silent") : log.setLevel("trace");

const logTrace = (msg: any) => {
    log.trace(msg)
}

const logDebug = (msg: any) => {
    log.debug(msg)
}

const LogInfo = (msg: any) => {
    log.info(msg)
}

const logWarn = (msg: any) => {
    log.warn(msg)
}

const logError = (msg: any, fulltrace: any) => {
    log.error(msg + (fulltrace !== undefined ? fulltrace : "" ))
}

const logger = {
    trace: logTrace,
    debug: logDebug,
    info: LogInfo,
    warn: logWarn,
    error: logError
}

export default logger;