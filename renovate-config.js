module.exports = {
	branchPrefix: "test-renovate/",
	username: "renovate-release",
	gitAuthor: "Renovate Bot <bot@renovateapp.com>",
	onboarding: false,
	platform: "github",
	includeForks: true,
	repositories: ["open-source-issues/renovate-submodule"],
	packageRules: [
		{
			updateTypes: ["patch", "minor"],
			groupName: "non-major.versions",
		},
		{
			updateTypes: ["digest"],
			groupName: "digest",
		},
	],
	"git-submodules": {
		enabled: true,
		groupName: "Git Submodules",
	},
	labels: ["renovate"],
	pinDigests: true,
	ignoreTests: true,
};
