import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import store from "@/store";
import Home from "@/views/Home.vue";

describe("Function のテスト", () => {
  const init: any = () => {
    const routes = [{ path: "/", name: "home" }];
    const router = new VueRouter({ routes });

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);

    const wrapper = shallowMount(Home, {
      localVue: localVue,
      router,
      store
    });

    // functionを呼び出す場合は、一旦キャストする。
    return wrapper.vm as any;
  };

  describe("userStatus のテスト(なお、storeの設定変えてないのでデフォルト)", () => {
    const tmpVm = init();
    expect(tmpVm.userStatus).toBe(false);
  });
});

describe("Template のテスト", () => {
  describe("内部は全部仮", () => {
    const init: any = (editedIndex: number) => {
      const routes = [{ path: "/", name: "home" }];
      const router = new VueRouter({ routes });

      const localVue = createLocalVue();
      localVue.use(VueRouter);
      localVue.use(Vuetify);

      const wrapper = shallowMount(Home, {
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
