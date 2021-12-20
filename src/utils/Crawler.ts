import type { Content, Verse } from '@types';
import axios from 'axios';
import cheerio, { CheerioAPI } from 'cheerio';
import iconv from 'iconv-lite';

const links = {
	bible: 'https://www.duranno.com/qt/view/bible.asp',
	commentary: 'https://www.duranno.com/qt/view/explain.asp'
};

const getHTML = (link: keyof typeof links) => {
	return axios({
		url: links[link],
		method: 'GET',
		headers: {
			'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			Accept: '*/*'
		}
	});
};

const decode = (data: Buffer) => {
	const bodyDecoded = iconv.decode(data, 'euc-kr');
	return bodyDecoded;
};

const parseBible = ($: CheerioAPI) => {
	const verses: Verse[] = [];

	$('.bible')
		.children()
		.each((_, elem) => {
			const $elem = $(elem);
			if (elem.tagName === 'p') {
				verses.push({ text: $elem.text().trim() });
				return;
			}

			const verse = $elem.find('th').text();
			const text = $elem.find('td').text().trim();

			verses.push({ verse: +verse, text });
		});

	return verses;
};

const parseCommentaries = ($: CheerioAPI) => {
	const commentaries: string[] = [];

	$('.bible')
		.children()
		.each((_, elem) => {
			commentaries.push($(elem).text().trim());
		});

	return commentaries;
};

export const parseContent = async (): Promise<Content> => {
	const html = await getHTML('bible');
	const data = decode(html.data);
	const $ = cheerio.load(data);

	const contents: Content = {
		title: $('h1 span').text().trim(),
		range: $('h1 em').text().trim(),
		date: new Date().getUTCDate().toString(),
		verses: parseBible($),
		commentaries: parseCommentaries($)
	};
	return contents;
};
