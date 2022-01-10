/**
 * Namespace containing limits related to Discord channels.
 */
export const ChannelLimits = {
	/**
	 * Maximum characters allowed in a channel description.
	 */
	MaximumDescriptionLength: 1024,

	/**
	 * Maximum characters allowed in a channel name.
	 */
	MaximumNameLength: 100,

	/**
	 * Maximum viewers allowed per screen share.
	 */
	MaximumViewersPerScreenShare: 50
} as const;

/**
 * Namespace containing limits related to Discord embeds.
 */
export const EmbedLimits = {
	/**
	 * Maximum characters allowed in the author field of an embed.
	 */
	MaximumAuthorNameLength: 256,

	/**
	 * Maximum characters allowed in an embed description.
	 */
	MaximumDescriptionLength: 4096,

	/**
	 * Maximum characters allowed in the name of a field in an embed.
	 */
	MaximumFieldNameLength: 256,

	/**
	 * Maximum fields allowed in an embed.
	 */
	MaximumFields: 25,

	/**
	 * Maximum characters allowed in the avlue of a field in an embed.
	 */
	MaximumFieldValueLength: 1024,

	/**
	 * Maximum characters allowed in a footer of an embed.
	 */
	MaximumFooterLength: 2048,

	/**
	 * Maximum characters allowed in the title of an embed.
	 */
	MaximumTitleLength: 256,

	/**
	 * Maximum characters allowed in an embed, in total.
	 */
	MaximumTotalCharacters: 6000
} as const;

/**
 * Namespace containing limits related to Discord emojis.
 */
export const EmojiLimits = {
	/**
	 * Maximum characters allowed in a custom guild emoji.
	 */
	MaximumEmojiNameLength: 32
} as const;

/**
 * Namespace containing limits related to Discord guilds.
 */
export const GuildLimits = {
	/**
	 * Maximum channels allowed per guild, including category channels.
	 */
	MaximumChannels: 500,

	/**
	 * Maximum roles allowed in a guild.
	 */
	MaximumRoles: 250
} as const;

/**
 * Namespace containing limits related to Discord guild members.
 */
export const GuildMemberLimits = {
	/**
	 * Maximum characters allowed in the display name of a guild member.
	 */
	MaximumDisplayNameLength: 32
} as const;

/**
 * Namespace containing limits related to Discord interactions.
 */
export const InteractionLimits = {
	/**
	 * Maximum buttons allowed in a single action row.
	 */
	MaximumButtonsPerActionRow: 5,

	/**
	 * Maximum select menus allowed in a single action row.
	 */
	MaximumSelectMenusPerActionRow: 1,

	/**
	 * Maximum options allowed in a single select menu.
	 */
	MaximumOptionsInSelectMenus: 25
} as const;

/**
 * Namespace containing limits related to Discord messages.
 */
export const MessageLimits = {
	/**
	 * Maximum embeds allowed in a single message.
	 */
	MaximumEmbeds: 10,

	/**
	 * Maximum action rows allowed in a single message.
	 */
	MaximumActionRows: 5,

	/**
	 * Maximum characters allowed in a single message for a user.
	 */
	MaximumLength: 2000,

	/**
	 * Maximum characters allowed in a single message for a nitro user.
	 */
	MaximumNitroLength: 4000,

	/**
	 * Maximum numbers of reactions allowed for a message.
	 */
	MaximumReactions: 20,

	/**
	 * Maximum upload size for a free user in a guild of tier 1 or below, or in DMs.
	 * Size is in bytes, and correspond to 8MB.
	 */
	MaximumUploadSize: 8_000_000,

	/**
	 * Maximum upload size for a nitro user, in any guild or in DMs.
	 * Size is in bytes, and correspond to 10MB.
	 */
	MaximumNitroUploadSize: 100_000_000,

	/**
	 * Maximum upload size for a free user for all different boost levels available in a guild.
	 * Sizes are in bytes, and correspond to 8MB, 8MB, 50MB, and 100MB.
	 */
	MaximumUploadSizeInGuild: [8_000_000, 8_000_000, 50_000_000, 100_000_000]
} as const;

/**
 * Namespace containing limits related to built-in moderation features.
 */
export const ModerationLimits = {
	/**
	 * Maximum duration of a guild timeout, in seconds (corresponds to 28 days).
	 */
	MaximumTimeoutDuration: 2_419_200
} as const;

/**
 * Namespace containing limits related to Discord roles.
 */
export const RoleLimits = {
	/**
	 * Maximum characters allowed in a role name.
	 */
	MaximumNameLength: 100
} as const;

/**
 * Namespace containing limits related to Discord users and Direct Messages.
 */
export const UserLimits = {
	/**
	 * Maximum numbers of users in a DM group.
	 */
	MaximumUsersPerDMGroup: 10,

	/**
	 * Maximum characters allowed in a user's biography (the "About Me" section).
	 */
	MaximumBiographyLength: 190
} as const;
