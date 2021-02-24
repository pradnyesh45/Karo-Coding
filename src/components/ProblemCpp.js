import React from "react";
import { Table, Container } from "react-bootstrap";
import Cpp from "../problemComponents/Cpp";

var CppList = [
  {
    id: 1,
    problemStatement: "What is C++, Its Introduction and History",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=SQHREey_Yuc",
  },
  {
    id: 2,
    problemStatement: "Where CPP is Used, Why Learn C++ Programming Language ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=brqRL_t0RmM",
  },
  {
    id: 3,
    problemStatement:
      "C++ Source Code to Executable | Compilation, Linking, Pre Processing | Build Process Explained",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=ZTu0kf-7h08",
  },
  {
    id: 4,
    problemStatement: "Tool Set, Tool Chain and IDE",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=SezbHFe-jy4",
  },
  {
    id: 5,
    problemStatement: "Installing Code Blocks IDE with Compiler for C and C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=MDJ9uEHDhfU",
  },
  {
    id: 6,
    problemStatement: "C++ First Hello World Program",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=e840YAaK620",
  },
  {
    id: 7,
    problemStatement: "C++ Constants, Variables, Data types, Keywords ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=z600MQdQ9lg",
  },
  {
    id: 8,
    problemStatement: "Creating and Using C++ Variables ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=5kjOhtniLOs",
  },
  {
    id: 9,
    problemStatement: "C++ Console Output with Cout ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=c7foOFAYqbk",
  },
  {
    id: 10,
    problemStatement: "Cin in C++ for Receiving User, Console Input ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=lW_ZT_OZD1A",
  },
  {
    id: 11,
    problemStatement: "C++ Comments",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=uT0c5X1kvq4",
  },
  {
    id: 12,
    problemStatement: "C++ Arithmetic Operators",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=RKNgEgm_DP8",
  },
  {
    id: 13,
    problemStatement: "C++ Increment and Decrement Operators",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=kwkZpSc6g7Q",
  },
  {
    id: 14,
    problemStatement: "C++ Modulus, Short-Hand Operators",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=fy4hJWctkNc",
  },
  {
    id: 15,
    problemStatement: "CPP IF ELSE | Conditional Statement",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=rPyn7kGHZzA",
  },
  {
    id: 16,
    problemStatement: "C++ Nested IF ELSE and IF ELSEIF ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=oMrt_87aW-U",
  },
  {
    id: 17,
    problemStatement: "C++ Logical and Comparison Operators",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=HLv2gVg6Xtc",
  },
  {
    id: 18,
    problemStatement: "C++ Ternary Operator (Conditional Operator",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=-QVc_fGSJAw",
  },
  {
    id: 19,
    problemStatement: "While Loop | Introduction to Looping in CPP",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=kcd2FAxC5Ms",
  },
  {
    id: 20,
    problemStatement: "CPP Do While Loop with Example",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=IqKweotABQI",
  },
  {
    id: 21,
    problemStatement: "CPP For Loop with Example",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=dNmdkIu0qww",
  },
  {
    id: 22,
    problemStatement: "Introduction to ARRAYS in CPP",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=odTejLbwbnc",
  },
  {
    id: 23,
    problemStatement:
      "Two Dimensional ( 2D ) and Multidimensional Arrays in CPP",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=TpcT_zNJSHM",
  },
  {
    id: 24,
    problemStatement: "Introduction to CPP Functions | Subroutines",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=4bgabzer4OE",
  },
  {
    id: 25,
    problemStatement:
      "CPP Function Parameters | Returning Values from Functions",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=WqukJuBnLQU",
  },
  {
    id: 26,
    problemStatement: "C++ Default Function Parameters ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=QHk_hg5NOU4",
  },
  {
    id: 27,
    problemStatement: "C++ Inline Function | Inline Keyword",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=TGwl3tJYFRg",
  },
  {
    id: 28,
    problemStatement: "C++ Local Global Variable Scopes",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=kMdoS47ySjs",
  },
  {
    id: 29,
    problemStatement: "C++ Break Statement with Example",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=S6WkTenfEHk",
  },
  {
    id: 30,
    problemStatement: "C++ Continue Statement with Example",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=VYEhDnQ-2mE",
  },
  {
    id: 31,
    problemStatement: "C++ Switch Statement with Example",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=AqV9_7c9X7s",
  },
  {
    id: 32,
    problemStatement: "Using Range in the Case Values of Switch Statement",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=fct0IDKZ5X8",
  },
  {
    id: 33,
    problemStatement: "C++ Multiple Return Statements in Functions",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=jNfSTNrGItM",
  },
  {
    id: 34,
    problemStatement: "Address operator in C++ | & Operator",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=g8sJ4W7oufU",
  },
  {
    id: 35,
    problemStatement: "Introduction to C++ Pointers",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=kzDqaBgyVEE",
  },
  {
    id: 36,
    problemStatement: "Passing an Array to a Function in C++ ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=mnaD9bH6y6A",
  },
  {
    id: 37,
    problemStatement: "Pass by Address in C++ with Example ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=xWItyeMpagE",
  },
  {
    id: 38,
    problemStatement:
      "Relationship between Arrays and Pointers in C++ with Example",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=LcHTSDm82pY",
  },
  {
    id: 39,
    problemStatement:
      "Const Keyword with Functions and Arrays in C++ with Example",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=SVggWRRzPRE",
  },
  {
    id: 40,
    problemStatement: "Array Ranges in Functions with Example in C++ ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=9t3-f3nWpuQ",
  },
  {
    id: 41,
    problemStatement: "Introduction to Structures in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=6gg9Xlv35-I",
  },
  {
    id: 42,
    problemStatement:
      "Arrow Operator with Pointers to Access Structure Members ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=jH2b6bKgrhs",
  },
  {
    id: 43,
    problemStatement:
      "Passing Structure to Functions by Value, Pointer (Address)",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=lVRtKPvgvTs",
  },
  {
    id: 44,
    problemStatement: "Nested Structures and C++ Dot Operator ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=MaTv85P2nnQ",
  },
  {
    id: 45,
    problemStatement:
      "Accessing C++ Nested Structure Members using Arrow Operator",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=EUx9pyGuf-4",
  },
  {
    id: 46,
    problemStatement:
      "C++ Sizeof Operator with Variables, Data types, Structures, Unions",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=QXPh65KtDPw",
  },
  {
    id: 47,
    problemStatement: "Introduction to Unions in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=I08cFxKY8x8",
  },
  {
    id: 48,
    problemStatement: "New and Delete Operators in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=gVGnOsB1n_o",
  },
  {
    id: 49,
    problemStatement:
      "Dynamically Allocating Arrays Depending on User Input in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=8XAQzcJvOHk",
  },
  {
    id: 50,
    problemStatement: "Avoiding Dangling Pointer Reference in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=frQ1uTnh6Io",
  },
  {
    id: 51,
    problemStatement: "Automatic Type Deduction C++11 Feature",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=d83JFFr8CRs",
  },
  {
    id: 52,
    problemStatement: "For Each Loop | Range Based For Loop",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=2yR8dcKT-Ck",
  },
  {
    id: 53,
    problemStatement: "Introduction to Strings in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=3-v_RigflHs",
  },
  {
    id: 54,
    problemStatement: "Recursive Function and Recursion in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=bmTn2mkfxuE",
  },
  {
    id: 55,
    problemStatement: "Function Overloading in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=wQEByoBQG-o",
  },
  {
    id: 56,
    problemStatement:
      "C++ Object Oriented Programming Video Tutorial | Introducing Classes, Objects",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=xnh7ip5gpzc",
  },
  {
    id: 57,
    problemStatement:
      "C++ OOPS Video Tutorials for Beginners | Class Properties, Methods, Members",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=qnCRKjPTnHM",
  },
  {
    id: 58,
    problemStatement: "Creating Objects from a Class in Different Ways ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=BsYvWqDihGU",
  },
  {
    id: 59,
    problemStatement:
      "Scope Resolution Operator | Defining Methods outside Class definition in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=59fy7la7yEI",
  },
  {
    id: 60,
    problemStatement:
      "Private Access Specifier | C++ Object Oriented Programming",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=6QHkXmLhY-g",
  },
  {
    id: 61,
    problemStatement: "Class Constructors",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=CyTSm0sUgi4",
  },
  {
    id: 62,
    problemStatement: "Overloading Class Constructors",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=bk11sI0KoWk",
  },
  {
    id: 63,
    problemStatement: "Default Class Constructor Parameters ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=0Gcy49Gin_k",
  },
  {
    id: 64,
    problemStatement: "Destructors in a Class",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Egm6DIiHTC4",
  },
  {
    id: 65,
    problemStatement: "C++ Destructors to Release Resources with example",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=ZvWUHWvueQk",
  },
  {
    id: 66,
    problemStatement: "C++ Static Variables and Members in Class",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=-WRllQLW8RE",
  },
  {
    id: 67,
    problemStatement: "C++ Static Methods in Classes",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=u-lQOQvzBuY",
  },
  {
    id: 68,
    problemStatement: "Friend Function",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=FErlySnTBWc",
  },
  {
    id: 69,
    problemStatement: "Inheritance, Poly Morphism | Introduction",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=zsqhrxlp-Fo",
  },
  {
    id: 70,
    problemStatement: "C++ Protected Access Modifier in Classes",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=nW0hf2-jaIM",
  },
  {
    id: 71,
    problemStatement: "C++ Access Control and Inheritance",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=XRlo8aOUvyU",
  },
  {
    id: 72,
    problemStatement: "Public Inheritance in C++ ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=q8EUCNAsn6E",
  },
  {
    id: 73,
    problemStatement: "Protected Inheritance in C++ ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=ClUQXuwxyH8",
  },
  {
    id: 74,
    problemStatement: "Private Inheritance in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=reWA2RBdFAw",
  },
  {
    id: 75,
    problemStatement:
      "Changing Access Level of Base Class Members in Derived Class in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=USHIgMBJ190",
  },
  {
    id: 76,
    problemStatement:
      "Order of Execution of Constructors and Destructors in Inheritance in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=fCK7sLu0G0Y",
  },
  {
    id: 77,
    problemStatement: "C++ Multiple Inheritance Explained",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=JZwBW0nYzsk",
  },
  {
    id: 78,
    problemStatement:
      "C++ Calling and Passing Values to Base Class Constructor in Derived Class",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=7ucLWfWzqg8",
  },
  {
    id: 79,
    problemStatement: "C++ Overriding Base Class Methods in Derived Class",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=k3hrXKksbVM",
  },
  {
    id: 80,
    problemStatement: "Accessing the Overridden Methods in C++ ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=E9Dn-Y4VIQE",
  },
  {
    id: 81,
    problemStatement: "C++ this Keyword",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=uVsoUyDO8Ow",
  },
  {
    id: 82,
    problemStatement: "C++ Calling Methods Using Base Class Type",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=ylShsr2ebjs",
  },
  {
    id: 83,
    problemStatement: "Polymorphism in C++ and Virtual Functions / Methods",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=R5qd8X64szs",
  },
  {
    id: 84,
    problemStatement:
      "C++ Virtual Function | Inherited Attributes, Hierarchical Nature",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=NWIMUcq18vQ",
  },
  {
    id: 85,
    problemStatement: "C++ Pure Virtual Functions, Abstract Classes",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=FA5bvYW4iUc",
  },
  {
    id: 86,
    problemStatement:
      "C++ Diamond problem in OOPS, Solution using Virtual Inheritance with Example",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=7Zpuz4T4SGw",
  },
  {
    id: 87,
    problemStatement: "Nested Classes or Inner classes in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=C5X7h6h_tks",
  },
  {
    id: 88,
    problemStatement: "Local Classes in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=fr1b3ST0M7M",
  },
  {
    id: 89,
    problemStatement: "C++ Operator Overloading Introduction | Plus + Operator",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=tFYRTWFXSgY",
  },
  {
    id: 90,
    problemStatement:
      "C++ Overloading(-) Operator | Define Operator Function outside Class ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=baZmwaoaHn8",
  },
  {
    id: 91,
    problemStatement:
      "Overloading Short Hand Operators | Operator Function as Friend Function",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=VlEd6bJ6n1Q",
  },
  {
    id: 92,
    problemStatement:
      "Overloading Increment and Decrement Operators in Prefix form",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=EwNfWrkOeXU",
  },
  {
    id: 93,
    problemStatement:
      "Overloading Increment and Decrement Operators in Postfix form",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=XJbA1AjW1zw",
  },
  {
    id: 94,
    problemStatement: "Overloading Special [ ] C++ Array Subscript Operator",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=pbxxtg3JQc8",
  },
  {
    id: 95,
    problemStatement: "Overloading C++ Function Call Operator ( )",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=X0KY4M9AAzE",
  },
  {
    id: 96,
    problemStatement:
      "Overloading Arrow Operator | Class Member Access Operator",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=nReSnvgbRQc",
  },
  {
    id: 97,
    problemStatement: "Rules and Restrictions for Operator Overloading in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Vtq5AZLCdQw",
  },
  {
    id: 98,
    problemStatement:
      "Introduction to Exception Handling | try, catch and throw",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=P_Kx0i7yXhU",
  },
  {
    id: 99,
    problemStatement:
      "Available C++ Standard Exception Classes / Types and using them",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=FynvrvLw3Rs",
  },
  {
    id: 100,
    problemStatement: "Multiple Catch Blocks | Catching All Exceptions in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=gMPUFJfcIU4",
  },
  {
    id: 101,
    problemStatement: "Functions Throwing Exceptions",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=iFexdxXbOfE",
  },
  {
    id: 102,
    problemStatement:
      "C++ Nested Try Catch statements | Re throwing Exceptions",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=UcT_sXaJF94",
  },
  {
    id: 103,
    problemStatement: "Creating Custom, User Defined Exception Class",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Ix05fozWn0A",
  },
  {
    id: 104,
    problemStatement: "Overloading New and Delete Operators",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=UqDof9U-Pco",
  },
  {
    id: 105,
    problemStatement: "Overloading C++ Stream Insertion, Extraction Operators",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=TwW2Nl45FvE",
  },
  {
    id: 106,
    problemStatement: "CPP Copy Constructor with Example",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=2KvslbLHTUY",
  },
  {
    id: 107,
    problemStatement: "C++ IO Stream",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=RglhIB3i_aw",
  },
  {
    id: 108,
    problemStatement: "Set and Unset Format Flags of IO streams",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=w8aWmg7ciwE",
  },
  {
    id: 109,
    problemStatement:
      "Reading and Displaying Boolean Values as TRUE and FALSE instead of 0 and 1",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=NJqOkULYYmo",
  },
  {
    id: 110,
    problemStatement: "Precision Fill Width parameters with C++ IO Streams",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=6S5Y2K9SrtU",
  },
  {
    id: 111,
    problemStatement: "C++ iomanip class | using Manipulators with IO Streams",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=ezzmiX_pJAQ",
  },
  {
    id: 112,
    problemStatement: "Writing your own Manipulator function on C++ IO Streams",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=1XjUOREpX40",
  },
  {
    id: 113,
    problemStatement: "String Class in C++ | Methods and More",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=KTH5g7lJsC0",
  },
  {
    id: 114,
    problemStatement:
      "C++ getline Function | Reading an Entire Line from Streams",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=wpDSWDbGXrQ",
  },
  {
    id: 115,
    problemStatement:
      "C++ File Handling | Creating and Opening | fstream, ifstream, ofstream",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=rkJJzH-ymg8",
  },
  {
    id: 116,
    problemStatement: "Writing to a File in C++ using Ofstream Class",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=8pJCZW-raug",
  },
  {
    id: 117,
    problemStatement: "Reading from a File using ifstream class",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Ru7Tump8fKY",
  },
  {
    id: 118,
    problemStatement: "fstream Class | Appending to a File in C++ ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=DJSchIAXhDY",
  },
  {
    id: 119,
    problemStatement:
      "C++ File Position Indicators | Get, Put | tellg tellp | seekg seekp",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=CaU7x2Bkj4M",
  },
  {
    id: 120,
    problemStatement: "Binary Files in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=SJMxuXrP_Rk",
  },
  {
    id: 121,
    problemStatement: "C++ Binary Files | Read, Write Methods",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=P7XGOBoVzW4",
  },
  {
    id: 122,
    problemStatement: "Stringstream in C++ ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=LM6EDIKS5Pk",
  },
  {
    id: 123,
    problemStatement: "#Define PreProcessor Directive",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=aXrb8FNzW6w",
  },
  {
    id: 124,
    problemStatement: "#include  PreProcessor Directives in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=MDbPJIR8p3Y",
  },
  {
    id: 125,
    problemStatement: "Function like Macros",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=H8XzsNSQN1A",
  },
  {
    id: 126,
    problemStatement: "if endif elif else Conditional Compilation Macros",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=URS8uOj578Q",
  },
  {
    id: 127,
    problemStatement: "Conditional Compilation Macros | ifdef ifndef",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=90-_O4Af_Cg",
  },
  {
    id: 128,
    problemStatement: "#undef Pre Processor Directive ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=_DxaWBF9tpY",
  },
  {
    id: 129,
    problemStatement: "C++ Predefined macros | LINE PreProcessor Directive",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=rP9r6b0jLpg",
  },
  {
    id: 130,
    problemStatement: "Generic Programming in C++ and Templates ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=zagx5hdXBLw",
  },
  {
    id: 131,
    problemStatement: "Multiple Parameters and Return Values",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=zLVTYnroqx4",
  },
  {
    id: 132,
    problemStatement: "Passing Standard Parameters to C++ Generic Functions",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=y4UnyCI24Hg",
  },
  {
    id: 133,
    problemStatement: "Generic Functions with Multiple Generic Types",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=8ugdVOpQztk",
  },
  {
    id: 134,
    problemStatement: "Explicitly Overloading Generic Functions ",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=_iJRiNLkKY0",
  },
  {
    id: 135,
    problemStatement: "Overloading Generic Function Template",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=iHz-ScuWiaI",
  },
  {
    id: 136,
    problemStatement: "Introduction to C++ Generic Classes",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=cki2wRkhAWQ",
  },
  {
    id: 137,
    problemStatement: "C++ Generic Class with more than one Generic Type",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=sLqa_TVMUcc",
  },
  {
    id: 138,
    problemStatement: "Default Data Types as Parameters to Generic Classes",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=J5uki5lqlEw",
  },
  {
    id: 139,
    problemStatement: "Explicit Specialisation of Generic Class",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=DcRXO6be4jE",
  },
  {
    id: 140,
    problemStatement: "Introduction to C++ Namespace",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=TvMS45AQeC4",
  },
  {
    id: 141,
    problemStatement: "C++ Nested Namespace",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=T0IrsXLxVEI",
  },
  {
    id: 142,
    problemStatement: "UnNamed or Anonymous Namespaces in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=HrFtpSH-Eso",
  },
  {
    id: 143,
    problemStatement: "Nested UnNamed or Anonymous Namespaces",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=1E8Mhe-1bKM",
  },
  {
    id: 144,
    problemStatement:
      "C++ Namespace Aliases | Giving a New Name to an Existing Namespace",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=XVVCSKM_vOo",
  },
  {
    id: 145,
    problemStatement: "Inline Nested Namespace in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=QGNuUkgig3A",
  },
  {
    id: 146,
    problemStatement: "Writing Classes in Separate Files using #define​ in C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=pywM36qKHvg",
  },
  {
    id: 147,
    problemStatement:
      "C++ Most Asked Important Example Programs Tutorial in One Video",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=UOBPRjaVagY",
  },
  {
    id: 148,
    problemStatement: "C++ Even or Odd Number Program",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=jR1WfgJRkA8",
  },
  {
    id: 149,
    problemStatement:
      "How to Create a Simple Calculator Program using C++ Programming Language ?",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=CNiWWX15Zns",
  },
  {
    id: 150,
    problemStatement: "CPP Introduction, History, Features",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=3fwKlU9AwSY",
  },
  {
    id: 151,
    problemStatement: "How C++ Works, Compilers, Linkers, IDE's",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=twodd1KFfGk",
  },
  {
    id: 152,
    problemStatement: "C++ Program to Find the Factorial of a Number Tutorial",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=sq-q1NmZF1M",
  },
  {
    id: 153,
    problemStatement:
      "How to Download and Install C Cpp Toolset ( gcc g++ gdb ) in Windows 10 using mingw-w64 and msys2",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=0HD0pqVtsmw",
  },
  {
    id: 154,
    problemStatement:
      "How to set up Visual Studio Code for Executing and Debugging C++ Programs | Tutorial for Beginners",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=rgCJbsCSARM",
  },
  {
    id: 155,
    problemStatement:
      "How to Compile and Run a C++ Program from Command Prompt in Windows 10",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=vAPi4qN9kCs",
  },
];

function ProblemCpp() {
  return (
    <div>
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Problem </th>
              <th>Problem Link</th>
              <th>Tutorial Link</th>
            </tr>
          </thead>
          <tbody>
            {CppList.map((listItem) => {
              return <Cpp CppList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemCpp;
