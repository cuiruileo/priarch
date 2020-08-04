hexo.extend.helper.register("yun_config", function() {
  let { config, theme, yun_version, __ } = this;
  let exportConfig = {
    root: config.root,
    title: theme.banner.title || config.title,
    version: yun_version,
  };

  // anonymous_image
  if (theme.anonymous_image) {
    exportConfig.anonymous_image = theme.anonymous_image;
  }

  // local search
  if (theme.local_search.enable) {
    let search_path = config.search.path || "search.xml";
    exportConfig.local_search = {
      path: config.root + search_path,
    };
  }

  return `<script id="yun-config">
    const Yun = window.Yun || {};
    window.CONFIG = ${JSON.stringify(exportConfig)};
  </script>`;
});

hexo.extend.helper.register("minivaline_config", function() {
  const minivalineConfig = {
    el: "#minivaline-container",
    appId: theme.minivaline.appId,
    appKey: theme.minivaline.appKey,
    placeholder: theme.minivaline.placeholder,
    lang: theme.minivaline.lang,
    adminEmailMd5: theme.minivaline.adminEmailMd5,
    math: theme.minivaline.math,
    md: theme.minivaline.md,
  };
  return JSON.stringify(minivalineConfig);
});
