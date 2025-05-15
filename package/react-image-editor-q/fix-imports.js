import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');
const aliases = ['utils', 'components', 'hooks', 'actions', 'context'];

function isAliasImport(line) {
  return aliases.some(alias => line.includes(`from '${alias}/`) || line.includes(`from "${alias}/`));
}

function toRelativeImport(filePath, importPath) {
  const absTarget = path.join(srcDir, importPath);
  const absCurrent = path.dirname(filePath);
  let rel = path.relative(absCurrent, absTarget);
  if (!rel.startsWith('.')) rel = './' + rel;
  return rel.replace(/\\/g, '/');
}

function fixFileImports(filePath) {
  const original = fs.readFileSync(filePath, 'utf-8');
  const lines = original.split(/\r?\n/);
  const updated = lines.map(line => {
    if (!isAliasImport(line)) return line;
    for (const alias of aliases) {
      const regex = new RegExp(`from ['"]${alias}/([^'"]+)['"]`);
      if (regex.test(line)) {
        const [, importPath] = line.match(regex);
        const relative = toRelativeImport(filePath, `${alias}/${importPath}`);
        return line.replace(regex, `from '${relative}'`);
      }
    }
    return line;
  }).join('\n');

  if (original !== updated) {
    fs.writeFileSync(filePath, updated);
    console.log(`✔ Fixed imports in: ${filePath}`);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.name.match(/\.(js|jsx|ts|tsx)$/)) fixFileImports(fullPath);
  }
}

walk(srcDir);
