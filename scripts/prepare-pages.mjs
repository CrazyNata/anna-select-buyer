import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const prerenderedRoutes = path.join(projectRoot, 'dist', 'server', 'prerendered-routes');
const clientOutput = path.join(projectRoot, 'dist', 'client');
const pagesOutput = path.join(projectRoot, 'site');

await rm(pagesOutput, { recursive: true, force: true });
await mkdir(pagesOutput, { recursive: true });

await cp(clientOutput, pagesOutput, { recursive: true });

const routeFiles = (await readdir(prerenderedRoutes)).filter((file) => file.endsWith('.html'));

for (const routeFile of routeFiles) {
  if (routeFile === '404.html') {
    await cp(path.join(prerenderedRoutes, routeFile), path.join(pagesOutput, routeFile));
    continue;
  }

  const routeName = routeFile === 'index.html' ? '' : routeFile.replace(/\.html$/, '');
  const routeDirectory = path.join(pagesOutput, routeName);
  await mkdir(routeDirectory, { recursive: true });
  await cp(path.join(prerenderedRoutes, routeFile), path.join(routeDirectory, 'index.html'));
}

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const basePath =
  process.env.GITHUB_PAGES === 'true' && repositoryName && !repositoryName.endsWith('.github.io')
    ? `/${repositoryName}`
    : '';

if (basePath) {
  const rewriteRootRelativeAssets = async (directory) => {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await rewriteRootRelativeAssets(entryPath);
        continue;
      }

      if (!/\.(html|js|json|css)$/.test(entry.name)) continue;
      const contents = await readFile(entryPath, 'utf8');
      const rewritten = contents.replaceAll('/_next/', `${basePath}/_next/`);
      if (rewritten !== contents) await writeFile(entryPath, rewritten);
    }
  };

  await rewriteRootRelativeAssets(pagesOutput);
}

await writeFile(path.join(pagesOutput, '.nojekyll'), '');

console.log(`Prepared ${routeFiles.length} static routes in ${pagesOutput}`);
