module.exports = (serverless) => {
  console.log(__filename, serverless.providers.aws.options)

  const { stage } = serverless.providers.aws.options

  const path = require('path').join(__dirname, `.env-${stage}`)

  try {
    const { parsed } = require('dotenv').config({ path })

    if (parsed) return parsed
  } catch (err) {
    console.error(err)
    const errorParsed = {
      STAGE: stage,
      ERROR: `NO ENV VARS. ${err.message}`
    }

    return errorParsed
  }
}
