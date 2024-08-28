import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: "${{ secrets.GITHUB_TOKEN }}",
});

export const checkUpdate = async () => {
  try {
    const data = await octokit.request(
      "GET /repos/{owner}/{repo}/releases/latest",
      {
        owner: "DeikuModder",
        repo: "keysaver",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
