// http://docpad.org/docs/config

require('longjohn');

module.exports = {
  templateData: {
    site: {
      title: "blog.linx.dj",
      description: "a blog for linx.dj",
      styles: ["styles/index.css"],
      scripts: ["scripts/bundle.js"],
      //url: "http://blog.linx.dj",
      url: "http://linxmusic.github.io/blog",
    },
  },
  detectEncoding: true,
  plugins: {
    browserifybundles: {
      bundles: [{
        arguments: ['-g', 'uglifyify'],
        entry: 'scripts/index.js',
        out: 'scripts/bundle.js',
      }],
      environments: {
        development: {
          bundles: [{
            arguments: ['-d'],
            entry: 'scripts/index.js',
            out: 'scripts/bundle.js',
          }],
        },
      },
    },
    raw: {
      'font-awesome': {
        command: ['rsync', '-r', 'node_modules/font-awesome/fonts/', 'out/fonts'],
      },
      semantic: {
        command: ['rsync', '-r', 'node_modules/semantic/src/fonts/', 'out/fonts'],
      },
    },
    ghpages: {
      deployRemote: 'origin',
      deployBranch: 'gh-pages',
    },
  },
  collections: {
    posts: function () {
      return this.getCollection('html').findAllLive({
        relativeOutDirPath: 'posts',
        isPagedAuto: { $ne: true },
      }, { "date": -1 }).on("add", function (model) {
        model.setMetaDefaults({ layout: "postLayout" });
      });
    }
  },
  environments: {
    development: {
      port: 5000,
      templateData: {
        site: {
          url: "http://localhost:5000",
        }
      }
    },
  },
};
