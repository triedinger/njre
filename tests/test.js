/* global describe, it */

const njre = require("..");

describe("Install", () => {
  it("should install JRE with default options without throwing an error", () => {
    return njre.install().then((dir) => console.log('jre installed at ' + dir) );
  }).timeout(100000);

  it("should install JRE with default options without throwing an error and using the previously downloaded file", () => {
    return njre.install(undefined, {
      cache: true
    }).then((dir) => console.log('jre installed at ' + dir) );
  }).timeout(100);

  it("should install JRE with custom options without throwing an error", () => {
    return njre.install(11, {
      os: "aix",
      arch: "ppc64",
      openjdk_impl: "openj9",
    }).then((dir) => console.log('jre installed at ' + dir) );
  }).timeout(100000);

  it("should install JDK with custom release without throwing an error", () => {
    return njre.install(null, { release: "jdk-21+34-ea-beta" }).then((dir) => console.log('jre installed at ' + dir) );
  }).timeout(100000);

  it("should install JRE 14 from AdoptOpenJdk without throwing an error", () => {
    return njre.install(14, { os: "linux" }).then((dir) => console.log('jre installed at ' + dir) );
  }).timeout(100000);

  it("should install JRE 20 from Eclipse Foundation without throwing an error", () => {
    return njre.install(20, { vendor: "eclipse" }).then((dir) => console.log('jre installed at ' + dir) );
  }).timeout(100000);
});
