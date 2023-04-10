const Keys = {
  GITHUB_ACCESS_DATA:
    import.meta.env.VITE_GITHUB_ACCESS_DATA || 'G1WeCujTPW',
  GITHUB_REFRESH_DATA:
    import.meta.env.VITE_GITHUB_REFRESH_DATA || 'wRa3WP5c3l',
  REACT_APP_ACCESS_TOKEN:
    import.meta.env.VITE_APP_ACCESS_TOKEN || 'O4bozFj8NX',
  APP_API_URL: import.meta.env.VITE_APP_API_URL,
  GITHUB_API_URL:
    import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com',
};

export default Keys;
