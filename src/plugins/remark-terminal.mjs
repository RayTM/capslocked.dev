/**
 * Remark plugin: transforms fenced code blocks with language "terminal"
 * into styled terminal box HTML matching the site's brutalist design.
 *
 * Usage in Markdown:
 *
 * ```terminal title="TERMINAL // SESSION.LOG" lang="bash"
 * $ opencode "convert these HTML templates"
 * $ echo "done"
 * ```
 *
 * Renders as the styled terminal div with header bar + scrollable pre/code.
 */
import { visit } from 'unist-util-visit';

export default function remarkTerminal() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'terminal') return;

      // Parse meta string for title and lang
      const meta = node.meta || '';
      const titleMatch = meta.match(/title="([^"]+)"/);
      const langMatch = meta.match(/lang="([^"]+)"/);
      const title = titleMatch ? titleMatch[1] : 'TERMINAL';
      const lang = langMatch ? langMatch[1] : '';

      // Escape HTML entities in code content
      const escaped = node.value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      const html = `<div class="my-lg border-thin border-outline-variant p-md bg-surface-container-low font-label-md text-label-md overflow-hidden">
  <div class="flex items-center justify-between border-b border-outline-variant pb-xs mb-sm">
    <span class="text-secondary font-bold">${title}</span>
    <span class="text-outline">${lang}</span>
  </div>
  <pre class="text-primary-fixed overflow-x-auto" tabindex="0" role="region" aria-label="${title}"><code>${escaped}</code></pre>
</div>`;

      parent.children[index] = { type: 'html', value: html };
    });
  };
}
