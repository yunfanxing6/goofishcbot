import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const appDir = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(appDir, 'index.js');
const patchedPath = path.join(appDir, '.open-source-index.js');

function replaceOnce(source, pattern, replacement, label) {
  const next = source.replace(pattern, replacement);
  if (next === source) {
    throw new Error(`Failed to patch ${label}`);
  }
  return next;
}

let source = await readFile(sourcePath, 'utf8');

source = replaceOnce(
  source,
  /async function verifyLicense\(e=false\)\{[\s\S]*?\}(?=function showLicenseInfo\(\))/,
  'async function verifyLicense(){return{valid:true,message:"已开源（开源版）",expireDate:"2099-12-31",daysRemaining:99999}}',
  'license verification',
);

source = replaceOnce(
  source,
  /async function main\(\)\{[\s\S]*?dist_logger\.info\("启动闲鱼多账号WebSocket客户端\.\.\."\);/,
  'async function main(){(0,logger.He)(constants.qI.LEVEL);void(0,logger.ui)();void(0,logger.sB)(constants.qI.RETENTION_DAYS);console.log("\\n╔════════════════════════════════════════╗\\n║           授权验证成功（已开源）           ║\\n╚════════════════════════════════════════╝\\n");dist_logger.info("启动闲鱼多账号WebSocket客户端...");',
  'startup banner',
);

await writeFile(patchedPath, source);
await import(`${pathToFileURL(patchedPath).href}?t=${Date.now()}`);
