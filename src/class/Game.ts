export default class Game {
  id: number;
  name: String;
  page: String;

  constructor(id: number, name: String, page: String) {
    this.id = id;
    this.name = name;
    this.page = page;
  }

  /**
   * デフォルトを返却する。
   */
  static default(): Game {
    return new Game(0, "", "");
  }

  /**
   * Array<Game> と パラメータの Game が既に存在するかを確認する。
   * 確認方法はidが一致するかどうかでチェックする。
   * パラメータの this は Array.prototype.findIndex の第二引数にて渡す。
   */
  static equals(element: Game): boolean {
    let unknown = this as unknown;
    let item = unknown as Game;
    return element.id === item.id;
  }

  /**
   * Array<Game> と パラメータの Game が既に存在するかを確認する。
   * 確認方法はすべてのパラメータが一致するかどうかで確認する。
   * パラメータの this は Array.prototype.findIndex の第二引数にて渡す。
   */
  static strictEquals(element: Game): boolean {
    let unknown = this as unknown;
    let item = unknown as Game;
    return (
      element.id === item.id &&
      element.name === item.name &&
      element.page === item.page
    );
  }
}
