/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: './API/testEnvironment.ts',
    transform: {
        '^.+.tsx?$': ['ts-jest', {}],
    },
    setupFilesAfterEnv: ['./API/testSetupFile.ts'],
    testMatch: ['**/API/**/*.spec.ts'],
    reporters: [
        'default',
        [
            './node_modules/jest-html-reporter',
            {
                pageTitle: 'Test Report',
                outputPath: './API-test-results/test-report.html',
            },
        ],
    ],
}
