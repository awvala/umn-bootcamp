package com.shapes;

class Test {

  public static void main(String[] args) {
    System.out.println("Testing your pentagon classes...");

    Pentagon pentagon = new Pentagon(10);

    System.out.println(pentagon.area());
    System.out.println(pentagon.perimeter());

  }

}
