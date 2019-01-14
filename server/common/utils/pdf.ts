import * as htmlPdf from 'html-pdf';
import * as fse from 'fs-extra';

export class PDF {
  /**
   * Generates PDF from html
   * @param htmlFilePath
   * @param outputFilePath
   * @param open
   * @param defaultWidth Width of generated PDF in microns
   * @param windowWidth Width of hidden window in pixels
   */
  static async createPdfAsync(
    file: string,
    pdfFilePath: string,
    options: htmlPdf.CreateOptions = { height: '1500px', width: '1200px' },
  ): Promise<string> {
    await fse.ensureFile(pdfFilePath);

    try {
      htmlPdf.create(file, options).toFile(pdfFilePath);

      return pdfFilePath;
    } catch (error) {
      console.debug(error); // tslint:disable-line:no-console

      return null;
    }
  }
}
