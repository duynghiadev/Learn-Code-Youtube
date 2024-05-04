package com.ongdev.array;

public class ArrayMain {
  public static void main(String[] args) {
    DynamicArray<String> dynamicArray = new DynamicArray<>();
    dynamicArray.add("O");
    dynamicArray.add("n");
    dynamicArray.add("g");
    dynamicArray.add("D");
    dynamicArray.add("e");
    dynamicArray.add("v");

    System.out.println("dynamicArray: " + dynamicArray);
    System.out.println("dynamicArray.get(2): " + dynamicArray.get(2));
    System.out.println("dynamicArray.indexOf(\"D\"): " + dynamicArray.indexOf("D"));
    dynamicArray.removeAt(4);
    System.out.println("dynamicArray: " + dynamicArray);
  }
}
