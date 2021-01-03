/* eslint-plugin-disable functional */

import { isUrl } from './isUrl';

describe('isUrl', () => {
  it('should return true if value is a valid URL.', () => {
    expect(isUrl('http://foo.com/blah_blah')).toBe(true);
    expect(isUrl('http://foo.com/blah_blah/')).toBe(true);
    expect(isUrl('http://foo.com/blah_blah_(wikipedia)')).toBe(true);
    expect(isUrl('http://foo.com/blah_blah_(wikipedia)_(again)')).toBe(true);
    expect(isUrl('http://www.example.com/wpstyle/?p=364')).toBe(true);
    expect(isUrl('https://www.example.com/foo/?bar=baz&inga=42&quux')).toBe(
      true,
    );
    expect(isUrl('http://✪df.ws/123')).toBe(true);
    expect(isUrl('http://userid:password@example.com:8080')).toBe(true);
    expect(isUrl('http://userid:password@example.com:8080/')).toBe(true);
    expect(isUrl('http://userid@example.com')).toBe(true);
    expect(isUrl('http://userid@example.com/')).toBe(true);
    expect(isUrl('http://userid@example.com:8080')).toBe(true);
    expect(isUrl('http://userid@example.com:8080/')).toBe(true);
    expect(isUrl('http://userid:password@example.com')).toBe(true);
    expect(isUrl('http://userid:password@example.com/')).toBe(true);
    expect(isUrl('http://142.42.1.1/')).toBe(true);
    expect(isUrl('http://142.42.1.1:8080/')).toBe(true);
    expect(isUrl('http://➡.ws/䨹')).toBe(true);
    expect(isUrl('http://⌘.ws')).toBe(true);
    expect(isUrl('http://⌘.ws/')).toBe(true);
    expect(isUrl('http://foo.com/blah_(wikipedia)#cite-1')).toBe(true);
    expect(isUrl('http://foo.com/blah_(wikipedia)_blah#cite-1')).toBe(true);
    expect(isUrl('http://foo.com/unicode_(✪)_in_parens')).toBe(true);
    expect(isUrl('http://foo.com/(something)?after=parens')).toBe(true);
    expect(isUrl('http://☺.damowmow.com/')).toBe(true);
    expect(isUrl('http://code.google.com/events/#&product=browser')).toBe(true);
    expect(isUrl('http://j.mp')).toBe(true);
    expect(isUrl('http://foo.bar/?q=Test%20URL-encoded%20stuff')).toBe(true);
    expect(isUrl('http://مثال.إختبار')).toBe(true);
    expect(isUrl('http://例子.测试')).toBe(true);
    expect(isUrl('http://उदाहरण.परीक्षा')).toBe(true);
    expect(isUrl('http://1337.net')).toBe(true);
    expect(isUrl('http://a.b-c.de')).toBe(true);
    expect(isUrl('http://223.255.255.254')).toBe(true);
    expect(isUrl('postgres://u:p@example.com:5702/db')).toBe(true);
    expect(isUrl('ftps://foo.bar/')).toBe(true);
    expect(isUrl('ftp://foo.bar/baz')).toBe(true);
    expect(isUrl('http://www.stackoverflow.com.')).toBe(true);
    expect(isUrl('http://www.stackoverflow.com.')).toBe(true);
    expect(
      isUrl('https://d1f4470da51b49289906b3d6cbd65074@app.getsentry.com/13176'),
    ).toBe(true);
    // expect(isUrl("http://-.~_!$&'()*+,;=:%40:80%2f::::::@example.com")).toBe(
    //   true,
    // );
  });

  it('should return false if value is not a valid URL.', () => {
    expect((isUrl as any)(true)).toBe(false);
    expect(isUrl('http://')).toBe(false);
    expect(isUrl('http://.')).toBe(false);
    expect(isUrl('http://..')).toBe(false);
    expect(isUrl('http://../')).toBe(false);
    expect(isUrl('http://?')).toBe(false);
    expect(isUrl('http://??')).toBe(false);
    expect(isUrl('http://??/')).toBe(false);
    expect(isUrl('http://#')).toBe(false);
    expect(isUrl('http://##')).toBe(false);
    expect(isUrl('http://##/')).toBe(false);
    expect(isUrl('http://foo.bar?q=Spaces should be encoded')).toBe(false);
    expect(isUrl('//')).toBe(false);
    expect(isUrl('//a')).toBe(false);
    expect(isUrl('///a')).toBe(false);
    expect(isUrl('///')).toBe(false);
    expect(isUrl('http:///a')).toBe(false);
    expect(isUrl('foo.com')).toBe(false);
    expect(isUrl('rdar://1234')).toBe(false);
    expect(isUrl('h://test')).toBe(false);
    expect(isUrl('http:// shouldfail.com')).toBe(false);
    expect(isUrl(':// should fail')).toBe(false);
    expect(isUrl('http://foo.bar/foo(bar)baz quux')).toBe(false);
    expect(isUrl('http://-error-.invalid/')).toBe(false);
    expect(isUrl('http://a.b--c.de/')).toBe(false);
    expect(isUrl('http://-a.b.co')).toBe(false);
    expect(isUrl('http://a.b-.co')).toBe(false);
    expect(isUrl('http://.www.foo.bar/')).toBe(false);
    expect(isUrl('http://www.foo.bar./')).toBe(false);
    expect(isUrl('http://.www.foo.bar./')).toBe(false);
    expect(isUrl('http://3628126748')).toBe(false);
    expect(isUrl('http://0.0.0.0')).toBe(false);
    expect(isUrl('http://10.1.1.0')).toBe(false);
    expect(isUrl('http://224.1.1.1')).toBe(false);
    expect(isUrl('http://10.1.1.255')).toBe(false);
    expect(isUrl('http://10.1.1.1')).toBe(false);
    expect(isUrl('http://1.1.1.1')).toBe(false);
    // expect(isUrl('http://123.123.123')).toBe(false);
  });

  it('should return true if includeLocal is true and  value a loopback URL.', () => {
    expect(isUrl('http://0.0.0.0', true)).toBe(true);
    expect(isUrl('http://10.1.1.0', true)).toBe(true);
    expect(isUrl('http://224.1.1.1', true)).toBe(true);
    expect(isUrl('http://10.1.1.255', true)).toBe(true);
    expect(isUrl('http://10.1.1.1', true)).toBe(true);
    expect(isUrl('http://1.1.1.1', true)).toBe(true);
    expect(isUrl('http://168.1.1.1', true)).toBe(true);
    expect(isUrl('http://192.1.1.1', true)).toBe(true);
  });
});
