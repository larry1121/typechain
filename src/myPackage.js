// @ts-check
//ts한테 js파일도 체크하라고 알려줌
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
//JSDoc은 코멘트로 이루어진 문법
//제대로 쓰면 ts가 읽어줌