//
// CUSTOMIZED FILE
// Adds an aboutBlock to every page pulling from `about` and `documentation_link` info
//
const path = require('path')
const { html } = require('~lib/common-tags')

/**
 * Base layout as a JavaScript method
 *
 * @param      {Object}  data    Final data from the Eleventy data cascade
 * @return     {Function}  Template render function
 */
module.exports = async function(data) {
  const { pageClasses, collections, content, pageData, publication } = data
  const { inputPath, outputPath, url } = pageData || {}
  const pageId = this.slugify(url) || path.parse(inputPath).name
  const figures = pageData.page.figures

  const aboutBlock = !data.about ? '' : html`
    <div class="about-this-page">
      <p>${this.markdownify(data.about)}</p>
      <p class="about-this-page__links"><a href="${data.documentation_link}" target="_blank">Documentation</a> | <a href="https://github.com/thegetty/quire-demo/blob/main/content${data.page.filePathStem}.md" target="_blank">Markdown for This Page</a></p>
    </div>
  `

  return html`
    <!doctype html>
    <html lang="${publication.language}">
      ${this.head(data)}
      <body>
        ${this.icons(data)}
        ${this.iconscc(data)}
        <div class="quire no-js" id="container">
          <div
            aria-expanded="false"
            class="quire__secondary"
            id="site-menu"
            role="contentinfo"
            data-outputs-exclude="epub,pdf"
          >
            ${this.menu({ collections, pageData })}
          </div>
          <div class="quire__primary">
            ${this.navigation(data)}
            <main class="quire-page ${pageClasses}" data-output-path="${outputPath}" data-page-id="${pageId}" >
              ${aboutBlock}
              ${content}
            </main>
          </div>
          ${this.search(data)}
        </div>
        ${await this.modal(figures)}
        ${this.scripts()}
      </body>
    </html>
  `
}
