// firebase/compat/auth は読み込み時にグローバルの fetch / Headers / Response / Request を要求するが、
// jest の jsdom 環境には無い。ユニットテストでは通信しないので、読み込みが通るだけのスタブを置く。
if (typeof globalThis.fetch === "undefined") {
  globalThis.fetch = () => Promise.reject(new Error("fetch is not available in unit tests"));
}
for (const name of ["Headers", "Response", "Request"]) {
  if (typeof globalThis[name] === "undefined") {
    globalThis[name] = class {};
  }
}
