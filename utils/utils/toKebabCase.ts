/**
 * 文字列をケバブケースへ変換
 * @param str 変換前の文字列
 * @return 変換された文字列を返す
 *
 * https://shanabrian.com/web/javascript/string-to-kebabcase.php
 */
export const toKebabCase = (str: string) => {
  if (typeof str !== 'string') return str

	str = str.replace(/^ *?[A-Z]/, (allStr) => {
    return allStr.toLowerCase()
  })
	str = str.replace(/_/g, '-')
	str = str.replace(/ *?[A-Z]/g, (allStr) => {
    return '-' + allStr.replace(/ /g, '').toLowerCase()
  })

	return str;
}
