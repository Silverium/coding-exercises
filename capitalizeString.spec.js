import {capitalizeString} from './capitalizeString';

describe('capitalizeString function', () => {
  const cases = [
    ["Hello. How are you today? Great! I'm fine too.", "hello. how are you today? great! i'm fine too."],
    ["Do. Or do not. There is no try.", "  do .or do not.   there is no try.  "],
    ["Opinions vary.... The proper rendering of ellipses... is controversial.", "opinions  vary.. ..the proper rendering of ellipses . ..is controversial ." ],
    ["The conference has people who have come from Moscow, Idaho; Paris, Texas; London, Ohio; and other places as well.", "the conference has people who have come from Moscow,Idaho ;Paris,Texas;London,Ohio; and other places as well."],
    ["The bookstore specializes in three subjects: history, typography, and steganography.", " the bookstore specializes  in three subjects : history ,typography ,and steganography  .  "]
  ]
  it.each(cases)('should return %s for %s', (expected, input) => {
    expect(capitalizeString(input)).toBe(expected)
  });
});
