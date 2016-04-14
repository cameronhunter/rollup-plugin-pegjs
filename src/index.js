import { buildParser } from 'pegjs';
import { createFilter } from 'rollup-pluginutils';

export default (options = {}) => ({
  transform(grammar, id) {
    const { target = 'es6', include = ['*.pegjs', '**/*.pegjs'], exclude, ...rest } = options;
    const filter = createFilter(include, exclude);
    const exporter = target == 'es6' ? 'export default' : 'module.exports =';
    return filter(id) ? { code: `${exporter} ${buildParser(grammar, { output: 'source', ...rest })};`, map: { mappings: '' } } : null;
  }
})
