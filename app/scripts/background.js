// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly';

import 'babel-polyfill'

import {
    tidyAllButCurrent,
    tidyCurrent,
    tidyLeft,
    tidyRight,
    tidy,
    viewDashboard
} from '../../lib/helpers.js'

const isDevMode = () => !('update_url' in chrome.runtime.getManifest())
if (isDevMode) {
    chrome.browserAction.setBadgeText({ text: '' })
}

chrome.runtime.onMessage.addListener(async({ message, data }) => {
    console.log('Message received!', message, data)

    if (message === 'tidy' && data.which === 'right') {
        await tidyRight(data)
    } else if (message === 'tidy' && data.which === 'left') {
        await tidyLeft(data)
    } else if (message === 'tidy' && data.which === 'allButCurrent') {
        await tidyAllButCurrent(data)
    } else if (message === 'tidy' && data.which === 'current') {
        await tidyCurrent(data)
    } else if (message === 'tidy') {
        await tidy(data)
    }

    if (message === 'viewDashboard') {
        await viewDashboard(data)
    }
})
