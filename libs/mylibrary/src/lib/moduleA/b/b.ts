/**
 * Should be import { a } from '../a/a';
 * But it seems to prefer the alias import unless it's a sibling.
 */
import { A } from '@intellij-ts-import-issue/mylibrary';

export function b(): A {
  return {
    answer: 42,
  };
}
