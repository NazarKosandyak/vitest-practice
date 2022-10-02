/** 
* @vitest-environment happy-dom
*/

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Messaging from './Messaging.vue'

describe('Messaging test render component', () => {
    it('it should be rendered', () => {
        const wrapper = mount(Messaging)

        // check if has h1 tag
        expect(wrapper.find('h1').exists()).toBeTruthy()

        // check if has input field
        expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()

        // check if has button 
        expect(wrapper.find('button').exists()).toBeTruthy()
    })

    it('should change message', async() => {
        const wrapper = mount(Messaging)
        // set hard value form input
        await wrapper.find('input[type="text"]').setValue('Message changed')
        // make click action at button
        await wrapper.find('button').trigger('click')
        // check if message was changed
        expect(wrapper.find('h1').text()).toEqual('Message changed')
    })
})