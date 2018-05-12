import Vue from 'vue'
import Home from '@/views/Home.vue'
import { expect } from 'chai';

describe('Home.vue', () => {

  // Оценка результатов методов в опциях
  it('sets the correct default data', () => {
    expect(typeof (new Home()).$data).to.be('function')
    const defaultData = (new Home()).$data;
    expect(typeof defaultData.images).to.be("Array");
    expect(typeof defaultData.perPageCustom).to.be("Array");
  });

});