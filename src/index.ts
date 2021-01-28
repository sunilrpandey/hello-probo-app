import { Probot } from "probot";

export = (app: Probot) => {
  app.on("pull_request.opened", async (context) => {
    app.log("PR trigerred")
    const issueComment = context.issue({
      body: "Welcome to Git PR, Glad you open it!",
    });
  await context.octokit.issues.createComment(issueComment);
});
};
