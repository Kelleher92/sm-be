import * as express from 'express';
import * as multer from 'multer';

import * as utils from './../common/utils';
import { PDF } from './../common/utils/pdf';

const router = express.Router({ mergeParams: true });
const upload = multer({ storage: multer.memoryStorage() });

/**
 * PDF GENERATION
 */
router.post('/pdf', upload.single('file'), async (req, res) => {
  const file = req.file;

  if (!file || !utils.isHTML(file.originalname)) {
    return res.status(200).json({
      responseStatus: 'FAILURE',
      errors: {
        type: 'INVALID_DATA',
      },
    });
  }

  const fileContent = req.file ? req.file.buffer.toString() : '';

  const width = req.body.width && parseInt(req.body.width, 10);
  const height = req.body.height && parseInt(req.body.height, 10);

  let options: { width: string, height: string };

  if (width && height && typeof width === 'number' && typeof height === 'number') {
    // set paper size options in inches
    options = { width: `${width}in`, height: `${height}in` };
  }

  const pdfFilePath = utils.getPDFFileName('Test');
  const resultPDFFilePath = await PDF.createPdfAsync(fileContent, pdfFilePath, options);

  if (!resultPDFFilePath) {
    return res.sendStatus(500);
  }

  return res.download(pdfFilePath);
});

export default router;
