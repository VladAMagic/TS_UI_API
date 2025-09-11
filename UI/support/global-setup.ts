export default async function globalSetup() {
    const timeout = 10000
    console.log(
        'Waiting an additional ' +
            timeout +
            ' seconds for the server to fully start...',
    )
    process.env.CI
        ? await new Promise((resolve) => setTimeout(resolve, timeout))
        : await new Promise((resolve) => setTimeout(resolve, 100))
}
