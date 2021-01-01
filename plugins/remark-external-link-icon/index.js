const visit = require('unist-util-visit');

const remarkExternalLinks = () => (tree) => {
  const isTarget = (node) => {
    return (
      node.type === 'link' && node.url.indexOf('joelworrall.com') < 0
    );
  };

  visit(tree, isTarget, (node) => {
    const { url } = node;

    if (url) {
      // Protect
      node.data = {
        hProperties: {
          target: '__blank',
          rel: 'noopener noreferrer',
        },
      };
    }
  });
};

module.exports = remarkExternalLinks;
