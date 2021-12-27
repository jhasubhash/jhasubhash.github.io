---
title : "Binary Search"
date : "Mon 28 Dec 2021"
excerpt : "In this post we will look at the implementation of the different variations of binary search, which can be used to solve almost all the coding problems around this."
cover_image : "/images/posts/binary.png"
--- 

## Binary Search  - Different variations

```cpp
// return index of first element >= target
int lower_bound(vector<int> v, int target){
    int l = 0;
    int r = v.size();
    while(l < r) {
        int m = l+(r-l)/2;
        v[m] < target ? l = m+1 : r = m;
    }
    return l;
}
```
```cpp
// return index of first element > target
int upper_bound(vector<int> v, int target){
    int l = 0;
    int r = v.size();
    while(l < r) {
        int m = l+(r-l)/2;
        v[m] <= target ? l = m+1 : r = m;
    }
    return l;
}
```
```cpp
// return index of element == target
int binary_search(vector<int> v, int target){
    int l = 0;
    int r = v.size();
    while(l < r) {
        int m = l+(r-l)/2;
        v[m] < target ? l = m+1 : r = m;
    }
    return l < v.size() && v[l] == target ? l : -1;
}
```
```cpp
int main()
{
    vector<int> v = {1,1,2,4,5,5,5,6,6,8,9};
    cout<< lower_bound(v, 5);  // 4
    cout<< upper_bound(v, 5);  // 7
    return 0;
}
```