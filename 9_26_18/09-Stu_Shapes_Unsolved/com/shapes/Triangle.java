package com.shapes;

import java.lang.Math;

class Triangle {
  // Your implementation goes here.
  private static final int sSides = 3;

  private final int mSideLength;

  Triangle (int sideLength) {
    this.mSideLength = sideLength;
  }


  /**
   * @return The height of this triangle.
   */
  private double getHeight () {
    // Replace SIDE_LENGTH with your side length variable.
    return this.mSideLength * Math.sin(Math.toRadians(60)) * SIDE_LENGTH
  }

  public double area () {
    return (.5 * this.mSideLength * this.getHeight());
  }

  public int perimeter () {
    return this.mSideLength * Triangle.sSides;
  }
  
}
