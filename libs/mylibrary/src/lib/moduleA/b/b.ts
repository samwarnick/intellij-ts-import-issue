/**
 * Should be import { a } from '../a/a';
 * But it seems to prefer the alias import unless it's a sibling.
 */
import { a } from '@intellij-ts-import-issue/mylibrary';

export function b() {
  return a();
}
