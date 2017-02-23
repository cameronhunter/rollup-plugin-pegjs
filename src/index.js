import { generate } from 'pegjs';
import { createFilter } from 'rollup-pluginutils';

export default (options = {}) => ({
  transform(grammar, id) {
    const { include = ['*.pegjs', '**/*.pegjs'], exclude } = options;
    const filter = createFilter(include, exclude);
    return filter(id) ? { code: generate(grammar, Object.assign({ output: 'source', format: 'commonjs' }, options)), map: { mappings: '' } } : null;
  }
})
