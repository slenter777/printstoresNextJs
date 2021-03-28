const path = require("path");
// const nextBuildId = require("next-build-id");
const dev = process.env.NODE_ENV.trim() !== "production";
module.exports = {
  // generateBuildId: () => nextBuildId({ dir: __dirname }),
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    BASE_URL: "http://localhost:3000/api",
    FILE_STATIC_URL: "http://localhost:3000/api/storage",
    // BASE_URL: dev ? "https://localhost:3010/api" : "https://printstores.ru/api",
    // FILE_STATIC_URL: dev ? "https://localhost:3010/api/storage" : "https://printstores/api/storage",
    RECAPTCHA_SITE_KEY: "6LeirWEaAAAAAGOUF9yqR3CDeMYxF2T502fjHBiM",
  },
};
