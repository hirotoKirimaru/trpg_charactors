import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Firebase from "@/firebase.ts";
import store from "@/store.ts";
import Games from "@/components/Games.vue";
import { VMenu } from 'vuetify/lib';

describe("Functionの確認", () => {
  describe("formTitle", () => {
    it("新規登録(editedindex -1)の場合、New Itemを取得する。", () => {
      const routes = [{ path: "/", name: "home" }];
      const router = new VueRouter({ routes });

      const localVue = createLocalVue();
      localVue.use(VueRouter);
      localVue.use(Vuetify);
      Firebase.init()

      const wrapper = shallowMount(Games, {
        localVue: localVue,
        router,
        store,
        propsData: {
          editedIndex: 0
        }
      });
      // expect(1).toBe(1);
      console.log("ほげほげ");
      // console.log(wrapper.vm.$emit("formTitle"));
      // console.log(wrapper.attributes().editedindex);
      // console.log(wrapper.vm);
      console.log(wrapper.trigger("formTitle"));
      expect(wrapper.vm.$emit("formTitle")).toMatch("New Item");
    });
  });
});
