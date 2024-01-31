## Preface

**Personal blog: [Damonare's personal blog](http://damonare.cn)**

If you encounter problems or have a better optimization method, you can:

- Raise an issue to me
- or pull requests

I will see and deal with it, welcome Star.

> - There are always some seemingly similar but completely different things in this world, such as Lei Feng and Leifeng Pagoda, Xiaoping and Xiaopingtou, Mary and Mario, Java and javascript.... Shamelessly turned himself into Java's godson, oh, shouldn't it be kneeling and licking, after all, he has Java's surname. But now, javascript has turned around and almost ruled the web field. The emergence of Nodejs and React Native has made javascript start to occupy a place in both the backend and the mobile end. It can be said that in the arena of the Web, <mark>JavaScript can be said to be in the limelight and has already taken the top spot. </mark>
> - In the field of traditional computer algorithms and data structures, the default language of most professional textbooks and books is Java or C/C++, but O'REILLY's family has published a book called "Javascript Description of Data Structures and Algorithms" , but I have to say, I don’t know if the author ate shit or the translator didn’t proofread at all, the book is full of small mistakes, this is like the endless small bugs, it makes people feel like their mouths are full The feeling of shit, neither spit nor swallow. For a front-end, especially during the written test interview, the algorithm test is actually not difficult (<mark>Top ten sorting algorithms or the same difficulty as the top ten sorting algorithms</mark>), but I didn’t use javascript before I have implemented or haven't carefully read the principles of related algorithms, which leads to a lot of time wasted writing. So I rolled up my sleeves and decided to look up the information by myself and summarize a blog. When I use it, I can just read my blog directly. As the saying goes, it is better to rely on yourself than to rely on the sky and the earth (ˉ(∞)ˉ).
> - The origin of the algorithm: It was proposed by Persian mathematicians in the 9th century: "al-Khowarizmi" is the product in the picture below (I feel that the authors of important mathematical elements seem to wear white hats). Contributions are still admirable.
>   ![BIG](http://img.blog.csdn.net/20160916152402267)

## text

### Sorting Algorithm Description

**(1) Definition of sorting: sort a sequence of objects according to a certain keyword;**

Input: n numbers: a1, a2, a3,..., an
Output: Arrangement of n numbers: a1', a2', a3',...,an', making a1'<=a2'<=a3'<=...<=an'.

The point of image is to sit in rows, adjust the seats, the tall ones stand in the back, and the short ones stand in front.

**(3) Explanation on the terms of commenting on the advantages and disadvantages of the algorithm**

**Stable**: If a is originally in front of b, and a=b, a is still in front of b after sorting;
**Unstable**: If a is originally in front of b, and a=b, a may appear behind b after sorting;

**Inner sorting**: All sorting operations are done in memory;
**External sorting**: Because the data is too large, the data is placed on the disk, and the sorting can only be performed through data transmission between the disk and the memory;

**Time Complexity**: The time it takes for an algorithm to execute.
**Space Complexity**: The size of memory required to run a program.

For more information about time and space complexity, please poke [here] (http://blog.csdn.net/booirror/article/details/7707551/), or read the book "Big Talk Data Structure" written by Cheng Jie. Great, easy to understand.

**(4) Summary of sorting algorithm pictures (pictures come from the Internet):**

Sort comparison:

![Write picture description here](http://img.blog.csdn.net/20160916153212716)

**Picture noun explanation:**
n: data size
k: the number of "buckets"
In-place: occupies constant memory, does not occupy additional memory
Out-place: take up extra memory

Sort by category:

![Write picture description here](http://img.blog.csdn.net/20160916154036887)

### 1. Bubble Sort

> Okay, let's start by summarizing the first sorting algorithm, bubble sort. I think everyone who has learned C language will understand it. This may be the first sorting algorithm that many people come into contact with.

#### (1) Algorithm description

> Bubble sort is a simple sorting algorithm. It iteratively walks through the array to be sorted, comparing two elements at a time and swapping them if they are in the wrong order. The work of visiting the sequence is repeated until there is no need to exchange, that is to say, the sequence has been sorted. The name of this algorithm comes from the fact that the smaller elements will slowly "float" to the top of the sequence through exchange.

#### (2) Algorithm description and implementation

The specific algorithm is described as follows:

- <1>. Compare adjacent elements. If the first is greater than the second, swap them both;
- <2>. Do the same work for each pair of adjacent elements, from the first pair at the beginning to the last pair at the end, so that the last element should be the largest number;
- <3>. Repeat the above steps for all elements, except the last one;
- <4>. Repeat steps 1~3 until the sorting is complete.

**JavaScript code implementation:**

```javascript
function bubbleSort(arr) {
  var len = arr.length
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //Pairwise comparison of adjacent elements
        var temp = arr[j + 1] // element exchange
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(bubbleSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

> **Improve bubble sort: **Set a symbolic variable pos to record the position of the last exchange in each sort. Since the records after the pos position have been exchanged, it is only necessary to scan to the pos position when performing the next sorting.

The improved algorithm is as follows:

```javascript
function bubbleSort2(arr) {
  console.time('Improved bubble sort takes time')
  var i = arr.length - 1 // Initially, the last position remains unchanged
  while (i > 0) {
    var pos = 0 //At the beginning of each trip, there is no record exchange
    for (var j = 0; j < i; j++)
      if (arr[j] > arr[j + 1]) {
        pos = j //Record the exchange position
        var tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    i = pos //Prepare for the next sort
  }
  console.timeEnd('Improved bubble sort takes time')
  return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(bubbleSort2(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

> In traditional bubble sorting, each sorting operation can only find a maximum or minimum value. We consider using the method of forward and reverse bubbles in each sorting to get two final values at a time (maximum and the smallest), thus reducing the number of sorting passes by almost half.

The improved algorithm is implemented as:

```javascript
function bubbleSort3(arr3) {
  var low = 0
  var high = arr.length - 1 //Set the initial value of the variable
  var tmp, j
  console.time('2. Bubble sort time-consuming after improvement')
  while (low < high) {
    for (
      j = low;
      j < high;
      ++j //Bubble forward, find the largest
    )
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    --high //Modify the high value, move forward one
    for (
      j = high;
      j > low;
      --j //Reverse bubbling, find the smallest
    )
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = tmp
      }
    ++low //Modify low value, move one bit backward
  }
  console.timeEnd('2. Time-consuming bubble sort after improvement')
  return arr3
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(bubbleSort3(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

Time-consuming comparison of the three methods:

![Write picture description here](http://img.blog.csdn.net/20160916163126374)

> It can be seen from the figure that the improved bubble sort obviously has lower time complexity and takes less time. Readers can try this by themselves. The blogger has built a library on github, and readers can clone it and try it locally. This blog post is better with the source code experience~~~

** Bubble sort animation demo:**

![Write picture description here](http://img.blog.csdn.net/20160916160748389)

**(3)Algorithm Analysis**

- Best case: T(n) = O(n)

> When the input data is already in positive order (it is already in positive order, why bother to sort it...)

- worst case: T(n) = O(n2)

> When the input data is in reverse order (Fuck, I just reverse the order and it's over...)

- Average case: T(n) = O(n2)

### 2. Selection Sort

> One of the most stable sorting algorithms (this stability does not refer to the stability at the algorithm level, I believe you are smart and you can understand what I mean 2333), because no matter what data is entered, the time complexity is O(n²). ...so when using it, the smaller the data size, the better. The only advantage may be that it does not take up additional memory space. Theoretically speaking, selection sorting may also be the sorting method that most people usually think of when sorting.

#### (1) Algorithm Introduction

> Selection sort (Selection-sort) is a simple and intuitive sorting algorithm. How it works: first find the smallest (largest) element in the unsorted sequence, store it at the beginning of the sorted sequence, then continue to find the smallest (largest) element from the remaining unsorted elements, and then put it in the sorted sequence end of . And so on until all elements are sorted.

#### (2) Algorithm description and implementation

The direct selection and sorting of n records can obtain ordered results through n-1 direct selection and sorting. The specific algorithm is described as follows:

- <1>. Initial state: the unordered area is R[1..n], and the ordered area is empty;
- <2>. At the beginning of the i-th sorting (i=1,2,3...n-1), the current ordered area and unordered area are R[1..i-1] and R(i ..n). This sorting process selects the record R[k] with the smallest key from the current unordered area, and exchanges it with the first record R in the unordered area, so that R[1..i] and R[i+1 ..n) respectively become a new ordered area with the number of records increased by 1 and a new disordered area with the number of records decreased by 1;
- <3>.n-1 trip is over, and the array is sorted.

**Javascript code implementation:**

```javascript
function selectionSort(arr) {
  var len = arr.length
  var minIndex, temp
  console.time('selection time-consuming')
  for (var i = 0; i < len - 1; i++) {
    minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        //find the smallest number
        minIndex = j //save the minimum index
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.timeEnd('selection time-consuming')
  return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(selectionSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

**SELECT SORT GIF DEMO:**

![Write picture description here](http://img.blog.csdn.net/20160916164754013)

#### (3) Algorithm Analysis

- Best case: T(n) = O(n2)
- worst case: T(n) = O(n2)
- Average case: T(n) = O(n2)

## 3. Insertion Sort

> Although the code implementation of insertion sort is not as simple and crude as bubble sort and selection sort, its principle should be the easiest to understand, because anyone who has played poker should be able to understand it in seconds. Of course, if you say that you never arrange the cards according to the size of the cards when you play poker cards, then it is estimated that you will not have any interest in the insertion sort algorithm in this life.....

#### (1) Algorithm Introduction

> The algorithm description of Insertion-Sort is a simple and intuitive sorting algorithm. It works by constructing an ordered sequence, and for unsorted data, scans from the back to the front in the sorted sequence, finds the corresponding position and inserts it. In the implementation of insertion sorting, in-place sorting is usually used (that is, sorting that only needs to use O(1) extra space), so in the process of scanning from back to forward, it is necessary to repeatedly move the sorted elements backwards step by step , providing insertion space for the newest element.

#### (2) Algorithm description and implementation

Generally speaking, insertion sort is implemented on arrays using in-place. The specific algorithm is described as follows:

- <1>. Starting from the first element, the element can be considered to have been sorted;
- <2>. Take out the next element and scan from back to front in the sorted element sequence;
- <3>. If the element (sorted) is greater than the new element, move the element to the next position;
- <4>. Repeat step 3 until you find the position where the sorted element is less than or equal to the new element;
- <5>. After inserting the new element at this position;
- <6>. Repeat steps 2~5.

**Javascript code implementation:**

```javascript
function insertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    console.time('Insertion sort time-consuming:')
    for (var i = 1; i < array.length; i++) {
      var key = array[i]
      var j = i - 1
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j]
        j--
      }
      array[j + 1] = key
    }
    console.timeEnd('Insertion sort time-consuming:')
    return array
  } else {
    return 'array is not an Array!'
  }
}
```

> **Improved Insertion Sort:** Use binary search when finding the insertion position

```javascript
function binaryInsertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    console.time('Binary insertion sort time-consuming:')

    for (var i = 1; i < array.length; i++) {
      var key = array[i],
        left = 0,
        right = i - 1
      while (left <= right) {
        var middle = parseInt((left + right) / 2)
        if (key < array[middle]) {
          right = middle - 1
        } else {
          left = middle + 1
        }
      }
      for (var j = i - 1; j >= left; j--) {
        array[j + 1] = array[j]
      }
      array[left] = key
    }
    console.timeEnd('Time-consuming binary insertion sort:')

    return array
  } else {
    return 'array is not an Array!'
  }
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(binaryInsertionSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

> Comparison before and after improvement:

![Write picture description here](http://img.blog.csdn.net/20160916174656100)

**Insertion sort animation demo:**

![Write picture description here](http://img.blog.csdn.net/20160916173802597)

#### (3) Algorithm Analysis

- Best case: The input array is in ascending order. T(n) = O(n)
- Worst case: The input array is sorted in descending order. T(n) = O(n2)
- Average case: T(n) = O(n2)

### 4. Shell Sort

> Shell invented in 1959;
> The first sorting algorithm that breaks through O(n^2); it is an improved version of simple insertion sort; it differs from insertion sort in that it compares elements that are farther away first. Hill sorting is also called shrinking incremental sorting

#### (1) Algorithm Introduction

> The core of Hill sorting lies in the setting of the interval sequence. The interval sequence can be set in advance, or the interval sequence can be defined dynamically. The algorithm for dynamically defining interval sequences was proposed by Robert Sedgewick, co-author of Algorithms (4th Edition).

#### (2) Algorithm description and implementation

First divide the entire record sequence to be sorted into several subsequences for direct insertion sorting respectively. The specific algorithm description:

- <1>. Select an incremental sequence t1, t2, ..., tk, where ti>tj, tk=1;
- <2>. According to the incremental sequence number k, sort the sequence for k times;
- <3>. For each sorting, according to the corresponding increment ti, the sequence to be sorted is divided into several sub-sequences of length m, and direct insertion sorting is performed on each sub-table. Only when the increment factor is 1, the entire sequence is treated as a table, and the length of the table is the length of the entire sequence.

**Javascript code implementation:**

```javascript
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1
  console.time('Hill sort time-consuming:')
  while (gap < len / 5) {
    //dynamically define interval sequence
    gap = gap * 5 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i]
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  console.timeEnd('Hill sort time-consuming:')
  return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(shellSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

**Hill sort icon (picture source network):**

![Write picture description here](http://img.blog.csdn.net/20160916235203417)

#### (3) Algorithm analysis

- Best case: T(n) = O(nlog2 n)
- Worst case: T(n) = O(nlog2 n)
- Average case: T(n) =O(nlog n)

### 5. Merge Sort

> Like selection sort, the performance of merge sort is not affected by the input data, but the performance is much better than selection sort, because it is always O(n log n) time complexity. The cost is that additional memory space is required.

#### (1) Algorithm Introduction

> Merge sort is an efficient sorting algorithm based on merge operations. This algorithm is a very typical application of Divide and Conquer. Merge sort is a stable sorting method. Combine the ordered subsequences to obtain a completely ordered sequence; that is, first make each subsequence in order, and then make the subsequence segments in order. Merging two sorted lists into one sorted list is called a 2-way merge.

#### (2) Algorithm description and implementation

The specific algorithm is described as follows:

- <1>. Divide the input sequence of length n into two subsequences of length n/2;
- <2>. Merge and sort the two subsequences respectively;
- <3>. Merge two sorted subsequences into a final sorted sequence.

**Javscript code implementation:**

```javascript
function mergeSort(arr) {
  //Adopt top-down recursive method
  var len = arr.length
  if (len < 2) {
    return arr
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  var result = []
  console.time('merge sort time-consuming')
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) result.push(left.shift())

  while (right.length) result.push(right.shift())
  console.timeEnd('Merge sort time-consuming')
  return result
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(mergeSort(arr))
```

**Merge sort animation demo:**

![Write picture description here](http://img.blog.csdn.net/20160917001326254)

#### (3) Algorithm Analysis

- Best case: T(n) = O(n)
- worst case: T(n) = O(nlogn)
- Average case: T(n) = O(nlogn)

### 6. Quick sort (Quick Sort)

> The name of quick sort is simple and rude, because as soon as you hear the name, you know the meaning of its existence, which is fast and efficient! It is one of the fastest sorting algorithms for processing big data.

#### (1) Algorithm Introduction

> The basic idea of quick sorting: the records to be sorted are separated into two independent parts by one pass, and the keywords of one part of the records are smaller than the keywords of the other part, then the two parts of the records can be sorted separately, so as to achieve order in the entire sequence.

#### (2) Algorithm description and implementation

Quicksort uses a divide-and-conquer method to divide a string (list) into two sub-strings (sub-lists). The specific algorithm is described as follows:

- <1>. Pick an element from the sequence, called "pivot" (pivot);
- <2>. Reorder the sequence, all elements smaller than the benchmark value are placed in front of the benchmark, and all elements larger than the benchmark value are placed behind the benchmark (the same number can go to either side). After this partition exits, the benchmark is in the middle of the sequence. This is called a partition operation;
- <3>. Recursively (recursive) sort the sub-arrays of the elements smaller than the reference value and the sub-arrays of the elements greater than the reference value.

**Javascript code implementation:**

```javascript
/* Method description: quick sort
@param array array to be sorted*/
//method one
function quickSort(array, left, right) {
  console.time('1. Time-consuming quick sort')
  if (
    Object.prototype.toString.call(array).slice(8, -1) === 'Array' &&
    typeof left === 'number' &&
    typeof right === 'number'
  ) {
    if (left < right) {
      var x = array[right],
        i = left - 1,
        temp
      for (var j = left; j <= right; j++) {
        if (array[j] <= x) {
          i++
          temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
      }
      quickSort(array, left, i - 1)
      quickSort(array, i + 1, right)
    }
    console.timeEnd('1. Time-consuming quick sort')
    return array
  } else {
    return 'array is not an Array or left or right is not a number!'
  }
}

//Method Two
var quickSort2 = function (arr) {
  console.time('2. Time-consuming quick sort')
  if (arr.length <= 1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  console.timeEnd('2. Time-consuming quick sort')
  return quickSort2(left).concat([pivot], quickSort2(right))
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(quickSort(arr, 0, arr.length - 1)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50 ]
console.log(quickSort2(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

**Quick Sort GIF Demo:**

![Quick Sort](http://img.blog.csdn.net/20160917003004906)

#### (3) Algorithm Analysis

- Best case: T(n) = O(nlogn)
- worst case: T(n) = O(n2)
- Average case: T(n) = O(nlogn)

### 7. Heap Sort

> Heap sort can be said to be a selection sort that uses the concept of heap to sort.

#### (1) Algorithm Introduction

> Heapsort (Heapsort) refers to a sorting algorithm designed using the data structure of the heap. Stacking is a structure that approximates a complete binary tree, and at the same time satisfies the nature of stacking: that is, the key value or index of a child node is always smaller (or larger) than its parent node.

#### (2) Algorithm description and implementation

The specific algorithm is described as follows:

- <1>. Build the initial sequence of keywords to be sorted (R1, R2....Rn) into a large top heap, which is the initial unordered area;
- <2>. Exchange the top element R[1] with the last element R[n], and get a new unordered area (R1, R2,...Rn-1) and a new Sequence area (Rn), and satisfy R[1,2...n-1]<=R[n];
- <3>. Since the new heap top R[1] after the exchange may violate the nature of the heap, it is necessary to adjust the current unordered area (R1, R2,...Rn-1) to a new heap, and then Exchange R[1] with the last element of the disordered region again to obtain a new disordered region (R1, R2....Rn-2) and a new ordered region (Rn-1, Rn). This process is repeated until the number of elements in the ordered area is n-1, and the entire sorting process is completed.

**Javascript code implementation:**

```javascript
/*Method description: heap sort
@param array array to be sorted*/
function heapSort(array) {
  console.time('heap sort time-consuming')
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    // build heap
    var heapSize = array.length,
      temp
    for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      heapify(array, i, heapSize)
    }

    //heap sort
    for (var j = heapSize - 1; j >= 1; j--) {
      temp = array[0]
      array[0] = array[j]
      array[j] = temp
      heapify(array, 0, --heapSize)
    }
    console.timeEnd('heap sort time-consuming')
    return array
  } else {
    return 'array is not an Array!'
  }
}
/*Method description: maintain the nature of the heap
@param arr array
@param x array subscript
@param len heap size */
function heapify(arr, x, len) {
  if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
    var l = 2 * x + 1,
      r = 2 * x + 2,
      largest = x,
      temp
    if (l < len && arr[l] > arr[largest]) {
      largest = l
    }
    if (r < len && arr[r] > arr[largest]) {
      largest = r
    }
    if (largest != x) {
      temp = arr[x]
      arr[x] = arr[largest]
      arr[largest] = temp
      heapify(arr, largest, len)
    }
  } else {
    return 'arr is not an Array or x is not a number!'
  }
}
var arr = [91, 60, 96, 13, 35, 65, 46, 65, 10, 30, 20, 31, 77, 81, 22]
console.log(heapSort(arr)) //[10, 13, 20, 22, 30, 31, 35, 46, 60, 65, 65, 77, 81, 91, 96]
```

**Heap sort animation demonstration:**

![Write picture description here](http://img.blog.csdn.net/20160917105502853)

#### (3) Algorithm Analysis

- Best case: T(n) = O(nlogn)
- worst case: T(n) = O(nlogn)
- Average case: T(n) = O(nlogn)

### 8. Counting Sort

> The core of counting sort is to convert the input data value into a key and store it in the additional array space.
> As a sort of linear time complexity, counting sort requires that the input data must be integers with a certain range.

#### (1) Algorithm Introduction

> Counting sort (Counting sort) is a stable sorting algorithm. Counting sort uses an additional array C, where the i-th element is the number of elements whose value is equal to i in the array A to be sorted. Then arrange the elements in A to the correct position according to the array C. It can only sort integers.

#### (2) Algorithm description and implementation

The specific algorithm is described as follows:

- <1>. Find the largest and smallest elements in the array to be sorted;
- <2>. Count the number of occurrences of each element whose value is i in the array, and store it in the i-th item of the array C;
- <3>. Accumulate all counts (starting from the first element in C, add each item to the previous item);
- <4>. Reversely fill the target array: put each element i in the C(i)th item of the new array, and subtract 1 from C(i) every time an element is placed.

**Javascript code implementation:**

```javascript
function countingSort(array) {
  var len = array.length,
    B = [],
    C = [],
    min = (max = array[0])
  console.time('Counting and sorting time-consuming')
  for (var i = 0; i < len; i++) {
    min = min <= array[i] ? min : array[i]
    max = max >= array[i] ? max : array[i]
    C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1
  }
  for (var j = min; j < max; j++) {
    C[j + 1] = (C[j + 1] || 0) + (C[j] || 0)
  }
  for (var k = len - 1; k >= 0; k--) {
    B[C[array[k]] - 1] = array[k]
    C[array[k]]--
  }
  console.timeEnd('Counting and sorting time-consuming')
  return B
}
var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2]
console.log(countingSort(arr)) //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8 , 9, 9]
```

**JavaScript animation demo:**、

![Write picture description here](http://img.blog.csdn.net/20160917110641479)

#### (3) Algorithm Analysis

> Its running time is O(n + k) when the input elements are n integers between 0 and k. Counting sort is not a comparison sort, and the sorting speed is faster than any comparison sort algorithm. Since the length of the array C used for counting depends on the range of data in the array to be sorted (equal to the difference between the maximum value and the minimum value of the array to be sorted plus 1), this makes counting sorting require a large number of arrays with a large data range. time and memory.

- Best case: T(n) = O(n+k)
- worst case: T(n) = O(n+k)
- Average case: T(n) = O(n+k)

### 9. Bucket Sort

> Bucket sort is an upgraded version of counting sort. It makes use of the mapping relationship of functions, and the key to high efficiency lies in the determination of this mapping function.

#### (1) Algorithm Introduction

> The working principle of Bucket sort: Assuming that the input data is uniformly distributed, the data is divided into a limited number of buckets, and each bucket is sorted separately (it is possible to use other sorting algorithms or continue recursively) Sort using bucket sort

#### (2) Algorithm description and implementation

The specific algorithm is described as follows:

- <1>. Set a quantitative array as an empty bucket;
- <2>. Traverse the input data and put the data into the corresponding bucket one by one;
- <3>. Sort each bucket that is not empty;
- <4>. Splice the sorted data from buckets that are not empty.

**Javascript code implementation:**

```javascript
/*Method Description: Bucket Sort
@param array array
@param num the number of buckets */
function bucketSort(array, num) {
  if (array.length <= 1) {
    return array
  }
  var len = array.length,
    buckets = [],
    result = [],
    min = (max = array[0]),
    regex = '/^[1-9]+[0-9]*$/',
    space,
    n = 0
  num = num || (num > 1 && regex.test(num) ? num : 10)
  console.time('Bucket sort time-consuming')
  for (var i = 1; i < len; i++) {
    min = min <= array[i] ? min : array[i]
    max = max >= array[i] ? max : array[i]
  }
  space = (max - min + 1) / num
  for (var j = 0; j < len; j++) {
    var index = Math.floor((array[j] - min) / space)
    if (buckets[index]) {
      // non-empty bucket, insertion sort
      var k = buckets[index].length - 1
      while (k >= 0 && buckets[index][k] > array[j]) {
        buckets[index][k + 1] = buckets[index][k]
        k--
      }
      buckets[index][k + 1] = array[j]
    } else {
      //Empty bucket, initialize
      buckets[index] = []
      buckets[index].push(array[j])
    }
  }
  while (n < num) {
    result = result.concat(buckets[n])
    n++
  }
  console.timeEnd('Bucket sorting time-consuming')
  return result
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(bucketSort(arr, 4)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

**Bucket sorting diagram (picture source network):**

![Write picture description here](http://img.blog.csdn.net/20160917111945979)

About bucket sorting [more] (http://www.cnblogs.com/lonelyxmas/p/3561938.html)

#### (3) Algorithm Analysis

> Bucket sorting uses linear time O(n) in the best case. The time complexity of bucket sorting depends on the time complexity of sorting data between buckets, because the time complexity of other parts is O(n) . Obviously, the smaller the buckets are divided, the less data there is between each bucket, and the less time it takes to sort. But the corresponding space consumption will increase.

- Best case: T(n) = O(n+k)
- worst case: T(n) = O(n+k)
- Average case: T(n) = O(n2)

### 10. Radix Sort (Radix Sort)

> Cardinality sorting is also a non-comparative sorting algorithm. It sorts each bit, starting from the lowest bit. The complexity is O(kn), which is the length of the array, and k is the largest number of digits in the array;

#### (1) Algorithm Introduction

> Radix sorting is to sort according to the low order first, then collect; then sort according to the high order, and then collect; and so on, until the highest order. Sometimes some attributes are prioritized, first sorted by low priority, and then sorted by high priority. The final order is that the one with the higher priority comes first, and the one with the same high priority and the lower priority comes first. Radix sorting is based on sorting separately and collecting separately, so it is stable.

#### (2) Algorithm description and implementation

The specific algorithm is described as follows:

- <1>. Obtain the maximum number in the array and obtain the number of digits;
- <2>.arr is the original array, each bit is taken from the lowest bit to form a radix array;
- <3>. Perform counting and sorting on radix (use counting sorting to apply to the characteristics of small range numbers);

**Javascript code implementation:**

```javascript
/**
 * Radix sorting is suitable for:
 * (1) The data range is small, it is recommended to be less than 1000
 * (2) Each value must be greater than or equal to 0
 * @author xiazdong
 * @param arr array to be sorted
 * @param maxDigit maximum number of digits
 */
//LSD Radix Sort

function radixSort(arr, maxDigit) {
  var mod = 10
  var dev = 1
  var counter = []
  console.time('radix sort time-consuming')
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev)
      if (counter[bucket] == null) {
        counter[bucket] = []
      }
      counter[bucket].push(arr[j])
    }
    var pos = 0
    for (var j = 0; j < counter.length; j++) {
      var value = null
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value
        }
      }
    }
  }
  console.timeEnd('radix sort time-consuming')
  return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(radixSort(arr, 2)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

** Radix sorting LSD animation demonstration: **

![Write picture description here](http://img.blog.csdn.net/20160917123313659)

#### (3) Algorithm Analysis

- Best case: T(n) = O(n \* k)
- worst case: T(n) = O(n \* k)
- Average case: T(n) = O(n \* k)

There are two methods of radix sorting:

- MSD is sorted from the high order
- LSD is sorted from the low order

**radix sort vs count sort vs bucket sort**

These three sorting algorithms all use the concept of buckets, but there are obvious differences in the use of buckets:

1. Radix sorting: allocate buckets according to each digit of the key value
2. Counting sort: each bucket only stores a single key value
3. Bucket sorting: each bucket stores a certain range of values

## Epilogue

> The summary of the top ten sorting algorithms has come to an end here. After summarizing, the blogger has only one feeling, the sorting algorithm is broad and profound, and the algorithm developed by the predecessors after several years or even a lifetime of hard work is more worthy of our scrutiny. Standing in front of the top ten algorithms, I still feel sincere and sincere. As a primary school student, the blogger’s summary will inevitably have some omissions. Welcome to criticize and correct.
