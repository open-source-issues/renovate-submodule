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
			description: "lockFileMaintenance",
			matchUpdateTypes: [
				"pin",
				"digest",
				"patch",
				"minor",
				"major",
				"lockFileMaintenance",
			],
			dependencyDashboardApproval: false,
			stabilityDays: 0,
		},
	],
};
