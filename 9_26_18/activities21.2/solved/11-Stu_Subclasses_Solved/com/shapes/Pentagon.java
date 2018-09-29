package com.shapes;

import java.lang.Math;

class Pentagon extends Shape {
  
  Pentagon (int sideLength) {
    super(5, sideLength);
  }

  @Override double area () {
    return (5 * mSideLength * mSideLength) / (4.0 * Math.tan(Math.PI / 5));
  }

}
