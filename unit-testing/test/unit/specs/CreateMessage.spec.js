import CreateMessage from '../../../../../1StudyBuddy/src/components/CreateMessage'
import Vue from 'vue'
import {shallow} from '@vue/test-utils'

describe('CreateMessage.vue', () => {
  it('check ', () => {

    const wrapper = shallow(CreateMessage)
    const h2= wrapper.find('h2')
    expect(h2.text()).toBe('test')

  })
  /* it('adds a new message to list on click', () => {
    // build component
    const Constructor = Vue.extend(CreateMessage)
    const ListComponent = new Constructor().$mount()
    // set input value
    ListComponent.newMessage = 'test'
    // simulate click event
    const button = ListComponent.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    ListComponent._watcher.run()
    // assert list contains new item
    expect(ListComponent.$el.textContent).to.contain('test')
    //expect(ListComponent.listItems).to.contain('test')
  }) */
})
