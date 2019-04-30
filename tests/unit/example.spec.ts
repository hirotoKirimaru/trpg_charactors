import { shallowMount } from "@vue/test-utils";
import Games from "@/components/Games.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Games, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
