package com.shapes;

import java.lang.Math;

//  Your implementation goes here.


class Square {

    private static final int sSides = 4; //cant be changed 

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
      return this.mSideLength * Square.sSides;
    }
  
  }

}