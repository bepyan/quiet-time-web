declare module '@types' {
	interface QTContent {
		title: string;
		date: string;
		range: string;
		verses: Verse[];
		commentaries: string[];
	}

	interface Verse {
		verse?: number;
		text: string;
	}

	type ContentType = '생명의삶' | '매일성경';

	interface Notion {
		key: string;
		database_id: string;
		contentType: ContentType;
	}
}
