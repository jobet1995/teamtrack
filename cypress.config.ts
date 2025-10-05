import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(`[log] ${message}`);
          return null;
        },
        table(data) {
          console.table(data);
          return null;
        },
      });

      // It's a good practice to return the config object
      // as it might have been modified by plugins.
      return config;
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
