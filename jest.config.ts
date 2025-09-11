/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: './API/testEnvironment.ts',
    transform: {
        '^.+.tsx?$': ['ts-jest', {}],
    },
    setupFiles: ['./API/setEnvVars.ts'],
    setupFilesAfterEnv: ['./API/testSetupFile.ts'],
    testMatch: ['**/API/**/*.spec.ts']
}
