import minimist from 'minimist'
export default {
  port: 1234,
  nodeResolve: true,
  watch: true,
  appIndex: 'index.html',
  plugins: [
    {
      transform (context) {
        const { project } = minimist(process.argv.slice(2))
        if (context.response.is('html')) {
          return { body: context.body.replace(/\$project\$/g, project) };
        }
      },
    },
  ],
};
