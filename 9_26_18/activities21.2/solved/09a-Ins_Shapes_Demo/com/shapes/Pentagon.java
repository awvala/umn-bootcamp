package com.shapes;

import java.lang.Math;

class Pentagon {
  
  // The prefixed s is a naming convention indicating "static."  
  // The variable is static amd belongs to the class as a whole
  private static final int sSides = 5; //cant be changed 

  // The prefixed m is a naming convention, indicating "member."
  private final int mSideLength; //can only be assigned to once.

  Pentagon (int sideLength) { //
    this.mSideLength = sideLength; //which records the length of its sides
  }

  private double getHeight () {
    return this.mSideLength * Math.sin(Math.toRadians(60));
  }

  public double area () {
    return (0.5 * this.mSideLength * this.getHeight()); 
  }

  public int perimeter () {
    return this.mSideLength * Pentagon.sSides;
  }

}
