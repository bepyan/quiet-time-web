import _moment, { MomentInput } from 'moment';

const KO_DAY = ['일', '월', '화', '수', '목', '금', '토', '일'];

export const getKoDay = (input?: MomentInput) => {
	const day = _moment(input).day();

	return KO_DAY[day];
};
