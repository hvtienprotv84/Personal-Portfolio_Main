import vn from './vn.json';
import en from './en.json';
import de from './de.json';
import jp from './jp.json';
import ch from './ch.json';
import kr from './kr.json';

export const dictionaryList = { vn, en, de, jp, ch, kr };
export const languageOptions = {
  // en: 'English2',
  // ch: 'Chinese',
  // de: 'Spanish'

  vn: { name: 'Tiếng Việt', flag: 'vn' },
  en: { name: 'Tiếng Anh', flag: 'gb' },
  de: { name: 'Tiếng Đức', flag: 'de' },
  kr: { name: 'Tiếng Hàn', flag: 'kr' },
  jp: { name: 'Tiếng Nhật', flag: 'jp' },
  ch: { name: 'Tiếng Trung', flag: 'cn' },

};