const env = {
  appName: import.meta.env.VITE_APP_NAME || "KOPCenter ERP",

  appVersion: import.meta.env.VITE_APP_VERSION || "1.0.0",

  apiUrl:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",

  appEnv:
    import.meta.env.VITE_APP_ENV ||
    "development",
};

export default env;