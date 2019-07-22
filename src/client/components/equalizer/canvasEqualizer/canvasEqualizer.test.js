import React from 'react';
import Enzyme, {
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CanvasEqualizer from './canvasEqualizer';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('Grafic equaliser', () => {
  const props = {
    width: 150,
    height: 100,
    getCanvasEl: () => {},
  };

  it('should RENDER CANVAS ELEMENT', () => {
    const nextProps = {
      ...props,
    };
    const nextContainer = shallow(<CanvasEqualizer {
                            ...nextProps
                        }
    />);
    expect(nextContainer.find('canvas')).toHaveLength(1);
  });
  
  it('should RENDER COMPONENT PROPERLY', () => {
    const nextProps = {
      ...props,
    };
    const nextContainer = shallow(<CanvasEqualizer {
                            ...nextProps
                        }
    />);
    expect(nextContainer).toMatchSnapshot();
  });
});
