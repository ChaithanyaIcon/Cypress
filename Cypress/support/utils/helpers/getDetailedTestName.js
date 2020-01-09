import { getOperatingSystem, getBrowserMode } from "../platform"

export const getDetailedTestName = (testName, view) => {
    return testName = `${testName} (${getOperatingSystem()} ${getBrowserMode()} - ${view})`
}