module.exports = {
    content: ['src/components/*.js'],
    css: ['src/css/tailwind.css'],
    extractors: [
        {
            extractor: class {
                static extract(content) {
                    return content.match(/[A-z0-9-:\/]+/g) || []
                }
            },
            extensions: ['js']
        }
    ],
    whitelistPatterns: [/ais-.*/],
}