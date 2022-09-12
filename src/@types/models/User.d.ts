declare module '@types' {
	/* ---------------- DTO ---------------- */
	interface UserDTO {
		name: string;
		notion_auth: string;
	}

	interface CreateNotionDTO {
		name: string;
		page_id: string;
		contentType: ContentType;
	}

	interface SubscriptNotionDTO {
		name: string;
		notion: INotion;
	}

	/* ---------------- Model ---------------- */

	interface IUser {
		name: string;
		notion_auth: string;
		notions: INotion[];
		create_date?: Date;
	}

	interface INotion {
		database_id: string;
		contentType: ContentType;
		create_date?: Date;
	}
}
