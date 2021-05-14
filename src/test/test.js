import {mount} from "@vue/test-utils";
import TestPage from "@/views/TestPage";

describe('TestPage', () => {
    const wrapper = mount(TestPage);
    it('render the correct markup', () => {
        expect(wrapper.html().toContain('<h1>Test Page</h1>'))
    })
    it('has a button', () => {
        expect(wrapper.contains('button')).toBe(true);
    })
})