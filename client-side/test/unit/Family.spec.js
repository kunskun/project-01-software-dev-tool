import { mount } from "@vue/test-utils";
import family from "@/pages/family/index";

describe("family unit testing", () => {
  //testing with idle 
  test("is a Host text appear", () => {
    const wrapper = mount(family, {
      propsData: {
        task: {
          name: "Host text",
          completed: false,
        },
      },
    });
    expect(wrapper.html()).toContain("Host");
  });

  test("Clicked CREATE button", () => {
    const wrapper = mount(family);
    wrapper.findAll("v-btn.create-button").trigger("click");
    expect(wrapper.vm.createDialog).toBe(true);
  });

  test("is a Member text appear", () => {
    const wrapper = mount(family);
    expect(wrapper.html()).toContain("Member");
  });

  test("Clicked JOIN button", () => {
    const wrapper = mount(family);
    wrapper.findAll("v-btn.join-button").trigger("click");
    expect(wrapper.vm.joinDialog).toBe(true);
  });

  test("first families data should be null", () => {
    const wrapper = mount(family);
    expect(wrapper.vm.families).toBeFalsy();
  });

  test('host data should not exist', () => { 
    const wrapper = mount(family);
    expect(wrapper.find('v-row.host-data').exists()).toBeFalsy();
   })

   test('member data should not exist', () => { 
    const wrapper = mount(family);
    expect(wrapper.find('v-row.member-data').exists()).toBeFalsy();
   })

   test("Clicked save button to create new family", () => {
    const familyName = "สมศรี"
    const wrapper = mount(family);
    wrapper.vm.familyData.familyName = familyName
    wrapper.findAll("v-btn.save-button-family").trigger("click");
    expect(wrapper.vm.familyData.familyName.length).toBeGreaterThan(0);
    expect(wrapper.vm.familyData.familyName.length).toBeLessThanOrEqual(25);
  });
  
  test('Click CLOSE button to close create dialog', () => { 
    const wrapper = mount(family);
    wrapper.findAll("v-btn.close-create-btn").trigger("click");
    expect(wrapper.vm.createDialog).toBe(false);
   })

  test('Click save button to join family', () => { 
    const familyCode = "7H60TG"
    const wrapper = mount(family);
    wrapper.vm.joinCode = familyCode
    wrapper.findAll("v-btn.save-button-code").trigger("click");
    expect(wrapper.vm.joinCode.length).toBe(6);
   })

   test('Click CLOSE button to close join dialog', () => { 
    const wrapper = mount(family);
    wrapper.findAll("v-btn.close-join-btn").trigger("click");
    expect(wrapper.vm.joinDialog).toBe(false);
   })
});
