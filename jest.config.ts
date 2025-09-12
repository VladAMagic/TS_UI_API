/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: './API/testEnvironment.ts',
    transform: {
        '^.+.tsx?$': ['ts-jest', {}],
    },
    setupFiles: ['./API/setEnvVars.ts'],
    setupFilesAfterEnv: ['./API/testSetupFile.ts'],
    testMatch: ['**/API/**/*.spec.ts'],
    reporters: [
        'default',
        [
            './node_modules/jest-html-reporter',
            {
                pageTitle: 'Test Report',
                outputPath: './test-results/API-test-report.html',
            },
        ],
    ],
}
