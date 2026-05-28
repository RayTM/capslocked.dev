/**
 * Remark plugin: adds ↗ indicator and target="_blank" rel="noopener noreferrer"
 * to external links (http/https) in Markdown content.
 */
import { visit } from 'unist-util-visit';

export default function remarkExternalLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      if (!node.url || (!node.url.startsWith('http://') && !node.url.startsWith('https://'))) return;

      // Add hProperties for target and rel
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.target = '_blank';
      node.data.hProperties.rel = 'noopener noreferrer';
      node.data.hProperties.class = 'external-link';

      // Append ↗ indicator as text node after last child
      const lastChild = node.children[node.children.length - 1];
      if (lastChild && lastChild.type === 'text' && !lastChild.value.includes('↗')) {
        lastChild.value += ' ↗';
      }
    });
  };
}
