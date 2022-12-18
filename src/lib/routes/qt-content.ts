import type { ContentType } from '$lib/mockup';
import { fetchDailyBible } from './daily-bible';
import { fetchLivingLife } from './living-life';

export const getQTContent = ({ contentType }: { contentType: ContentType }) => {
	if (contentType === '생명의삶') {
		return get생명의삶();
	} else if (contentType === '매일성경') {
		return get매일성경('기본');
	} else if (contentType === '매일성경 순') {
		return get매일성경('순');
	} else if (contentType === '매일성경 영어') {
		return get매일성경('영어');
	}
};

export const get생명의삶 = (bibleType = '개역개정' as const) => {
	return fetchLivingLife({ bibleType });
};

export const get매일성경 = (bibleType: any = '기본') => {
	return fetchDailyBible({ bibleType });
};
