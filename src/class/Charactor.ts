export default class Charactor {
  id: number;
  gameId: number;
  name: String;
  key: String;

  constructor(id: number, gameId: number, name: String, key: String) {
    this.id = id;
    this.gameId = gameId;
    this.name = name;
    this.key = key;
  }

  /**
   * デフォルトを返却する。
   */
  static default(): Charactor {
    return new Charactor(0, 0, "", "");
  }

  /**
   * Array<Game> と パラメータの Game が既に存在するかを確認する。
   * 確認方法はidが一致するかどうかでチェックする。
   * パラメータの this は Array.prototype.findIndex の第二引数にて渡す。
   */
  static equals(element: Charactor): boolean {
    let unknown = this as unknown;
    let id = unknown as number;
    return element.id === id;
  }

  /**
   * Array<Charactor> と パラメータの Charactor が既に存在するかを確認する。
   * 確認方法はすべてのパラメータが一致するかどうかで確認する。
   * パラメータの this は Array.prototype.findIndex の第二引数にて渡す。
   */
  static strictEquals(element: Charactor): boolean {
    let unknown = this as unknown;
    let item = unknown as Charactor;
    return (
      element.id === item.id &&
      element.gameId === item.gameId &&
      element.name === item.name &&
      element.key === item.key
    );
  }
}
