import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Firebase from "@/firebase.ts";
import store from "@/store.ts";
import Games from "@/components/Games.vue";

describe("Function の確認", () => {
  describe("formTitle の確認", () => {
    beforeEach(() => {
      Firebase.init();
    });

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
      // functionを呼び出す場合は、一旦キャストする。
      return wrapper.vm as any;
    };

    it("新規登録(editedindex -1)の場合、New Itemを取得する。", () => {
      let tmpVm = init(-1);
      expect(tmpVm.formTitle).toMatch("New Item");
    });

    it("更新(editedindex 0以上)の場合、Edit Itemを取得する。", () => {
      let tmpVm = init(0);
      expect(tmpVm.formTitle).toMatch("Edit Item");
    });
  });
});
