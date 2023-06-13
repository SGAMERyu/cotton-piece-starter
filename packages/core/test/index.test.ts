import { mount } from '@vue/test-utils'
import TestComponent from '../src/index.vue'
import { test, expect } from 'vitest'

test('mount component', () => {
  expect(TestComponent).toBeTruthy()

  const wrapper = mount(TestComponent as any)

  expect(wrapper.text()).toContain('test')
})
