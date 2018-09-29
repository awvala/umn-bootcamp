package com.shapes;

class Test {

  public static void main(String[] args) {
    System.out.println("Testing your Pentagon class...");

    Pentagon pentagon = new Pentagon(10);

    System.out.println("Pentagon Area: " + pentagon.area());
    System.out.println("Pentagon Perimeter: " + pentagon.perimeter());
  }

}
