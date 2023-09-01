import * as Sentry from "@sentry/react"


class LogService {

    init = () => {
        Sentry.init({
            dsn: process.env["REACT_APP_SENTRY_URI"],
            integrations: [
              new Sentry.BrowserTracing({
                tracePropagationTargets: ["localhost"],
              }),
              // new Sentry.Replay(),
            ],
            tracesSampleRate: 1.0,
            replaysSessionSampleRate: 0.1, 
            replaysOnErrorSampleRate: 1.0,
          });
    }

    logException = (error: Error) => {
        Sentry.captureException(error)
    }
}


export default new LogService()