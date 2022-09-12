export const contentTypeList = ['생명의삶', '매일성경', '매일성경 순', '매일성경 영어'] as const;

export type ContentType = typeof contentTypeList[number];

export const links = {
	노션통합등록: 'https://www.notion.so/my-integrations',
	구독가이드: 'https://bepyan.notion.site/bb424a05431745749e025e9df6e5d59b',
	데이터베이스_예시:
		'https://bepyan.notion.site/1ce713edac2440d3abf639d6745703e9?v=73b0118363eb4133930fb97e0639c042',
	본문_예시: 'https://bepyan.notion.site/38-22-38-9e65ca1a880a44a1894bc49588e33c26',
	생명의삶: 'https://www.duranno.com/qt/view/bible.asp',
	매일성경: 'https://sum.su.or.kr:8888/bible/today',
	'매일성경 순': 'https://sum.su.or.kr:8888/bible/today',
	'매일성경 영어': 'https://sum.su.or.kr:8888/bible/today',
	'매일성경 청소년': 'https://sum.su.or.kr:8888/bible/today'
};
