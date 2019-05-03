import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import store from "@/store.ts";
import Home from "@/views/Home.vue";

describe("Function のテスト", () => {
  let init: any = () => {
    const routes = [{ path: "/", name: "home" }];
    const router = new VueRouter({ routes });

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);

    var wrapper = shallowMount(Home, {
      localVue: localVue,
      router,
      store
    });

    // functionを呼び出す場合は、一旦キャストする。
    return wrapper.vm as any;
  };

  describe("userStatus のテスト(なお、storeの設定変えてないのでデフォルト)", () => {
    let tmpVm = init();
    expect(tmpVm.userStatus).toBe(false);
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

      var wrapper = shallowMount(Home, {
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
