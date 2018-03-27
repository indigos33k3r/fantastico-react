import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Main from '../app/components/main'

describe('main component test', () => {
  it('matches the snapshot', () => {
    const component = <Main />
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders the component', () => {
    const wrapper = shallow(<Main />)
    const assertion = wrapper.find('.fantastico').length
    expect(assertion).toBe(1)
  })
})
