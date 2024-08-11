import { createVuetify } from 'vuetify';
import defaults from './defaults';
import aliases from './aliases';
import { mdi } from 'vuetify/iconsets/mdi-svg';

export default createVuetify({
	defaults,
	aliases,
	icons: {
		defaultSet: 'mdi',
		sets: {
			mdi
		}
	}
});
