import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Firebase from "@/firebase.ts";
import store from "@/store.ts";
import Games from "@/components/Games.vue";

describe("Function のテスト", () => {
  beforeAll(() => {
    Firebase.init();
  });

  let init: any = () => {
    const routes = [{ path: "/", name: "home" }];
    const router = new VueRouter({ routes });

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);

    var wrapper = shallowMount(Games, {
      localVue: localVue,
      router,
      store
    });

    // functionを呼び出す場合は、一旦キャストする。
    return wrapper.vm as any;
  };

  describe("formTitle のテスト", () => {
    it("新規登録(editedindex -1)の場合、New Itemを取得する。", () => {
      let tmpVm = init();
      tmpVm.$data.editedIndex = -1;

      expect(tmpVm.formTitle).toBe("New Item");
    });

    it("更新(editedindex 0以上)の場合、Edit Itemを取得する。", () => {
      let tmpVm = init();
      tmpVm.$data.editedIndex = 0;

      expect(tmpVm.formTitle).toBe("Edit Item");
    });
  });

  describe("editItem のテスト", () => {
    let defaultEditedItem = {
      id: 0,
      name: "",
      page: ""
    };

    it("パラメータと完全一致するgameがない場合、editedIndexに-1を設定すること。", () => {
      let tmpVm = init();

      let param = {
        id: 20,
        name: "test",
        page: "http://piyo"
      };

      expect(tmpVm.$data.editedIndex).toBe(-1);
      expect(tmpVm.$data.editedItem).toStrictEqual(defaultEditedItem);
      expect(tmpVm.$data.dialog).toBe(false);

      tmpVm.editItem(param);

      expect(tmpVm.$data.editedIndex).toBe(-1);
      expect(tmpVm.$data.editedItem).toStrictEqual(param);
      expect(tmpVm.$data.dialog).toBe(true);
    });

    it("パラメータと完全一致するgameがある場合、editedIndexを設定すること。", () => {
      let tmpVm = init();
      let games = [
        {
          id: 0,
          name: "test-1",
          page: "page-1"
        },
        { id: 1, name: "test-2", page: "page-2" }
      ];
      tmpVm.$data.games = games;

      let param = {
        id: 1,
        name: "test-2",
        page: "page-2"
      };

      expect(tmpVm.$data.editedIndex).toBe(-1);
      expect(tmpVm.$data.editedItem).toStrictEqual(defaultEditedItem);
      expect(tmpVm.$data.dialog).toBe(false);

      tmpVm.editItem(param);

      expect(tmpVm.$data.editedIndex).toBe(1);
      expect(tmpVm.$data.editedItem).toStrictEqual(param);
      expect(tmpVm.$data.dialog).toBe(true);
    });

    it("パラメータと部分一致するgameがある場合、editedIndexに-1を設定すること。", () => {
      let tmpVm = init();
      let games = [
        {
          id: 0,
          name: "test-1",
          page: "page-1"
        },
        { id: 1, name: "test-2", page: "page-2" }
      ];
      tmpVm.$data.games = games;

      let param = {
        id: 1,
        name: "test-2-2",
        page: "page-2-2"
      };

      expect(tmpVm.$data.editedIndex).toBe(-1);
      expect(tmpVm.$data.editedItem).toStrictEqual(defaultEditedItem);
      expect(tmpVm.$data.dialog).toBe(false);

      tmpVm.editItem(param);

      expect(tmpVm.$data.editedIndex).toBe(-1);
      expect(tmpVm.$data.editedItem).toStrictEqual(param);
      expect(tmpVm.$data.dialog).toBe(true);
    });
  });
});

describe("Template のテスト", () => {
  describe("内部は全部仮", () => {
    let init: any = (editedIndex: number) => {
      const routes = [{ path: "/", name: "home" }];
      const router = new VueRouter({ routes });

      const localVue = createLocalVue();
      localVue.use(VueRouter);
      localVue.use(Vuetify);

      var wrapper = shallowMount(Games, {
        localVue: localVue,
        router,
        store,
        propsData: {
          editedIndex: editedIndex
        }
      });
      return wrapper;
    };

    it("仮", () => {});
  });
});
