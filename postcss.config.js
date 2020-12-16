module.exports = ({ env }) => ({
  plugins: {
    "rucksack-css": {},
    precss: {},
    ...(env === "production" && {
      cssnano: {
        preset: "default",
      },
    }),
  },
});
