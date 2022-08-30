import { task, TaskFunction } from 'gulp';
import concurrently from 'concurrently';
import minimist from 'minimist';

/** 开启本地 server 任务 */
function _serve(): TaskFunction {
  return (done: Function) => {
    const child_process = concurrently([`tsc -w --project src`, `web-dev-server --node-resolve --config scripts/gulp/serve/web-dev-server.config.mjs`], {});
    child_process.result
      .then(() => {
        done();
      })
      .catch(() => {
        done(new Error(`Process failed`));
      });
  };
}

task('start', _serve());
