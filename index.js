const core = require('@actions/core');
const github = require('@actions/github');
const request = require('request');

try {
  const jenkinsUrl = core.getInput('jenkinsUrl');
  const username = core.getInput('username');
  const token = core.getInput('token');
  const jobName = core.getInput('job');
  const params = JSON.parse( core.getInput('params'));

//   // params
//   const params = {
//     gittag: "fromwf"
//   };
  console.log(params);

  const time = (new Date()).toTimeString();


  request.post({baseUrl: jenkinsUrl
        , uri: 'job/' + jobName + '/buildWithParameters' 
        , qs: params})
        .auth(username,token)

  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}

