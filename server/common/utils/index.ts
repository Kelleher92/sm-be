import * as _ from 'lodash';
import * as os from 'os';
import * as path from 'path';

/**
 * Check the environment mode
 */
export function isDevelopment() {
  return process.env.NODE_ENV === 'development';
}

export function isProduction() {
  return process.env.NODE_ENV === 'production';
}

/**
 * Check if the file is html
 */
export function isHTML(fileName: string) {
  return fileName.endsWith('.html');
}

export function getTempFolderPath(projectPath: string) {
  return path.join(os.tmpdir(), projectPath);
}

export function getPDFFileName(projectPath: string) {
  return path.join(getTempFolderPath(projectPath), 'test.pdf');
}
