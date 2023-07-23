const findFactorial = `int main(int n) {
    // Find factorial of n
    int n = 6;

    int factorial = multiplyNumbers(n);
    printf("Factorial of %d is %d", n, factorial);
    return factorial;
}

int multiplyNumbers(int n) {
    if (n>=1) {
        return n*multiplyNumbers(n-1);
    }
    return 1;
}`

const sortArray = `
void sort(int n, int* ptr) 
{ 
    int i, j, t; 


    for (i = 0; i < n; i++) { 
  
        for (j = i + 1; j < n; j++) { 
            int* ptr2 = ptr + i; 
            if (*(ptr + j) < *(ptr + i)) { 
                t = *(ptr + i); 
                *(ptr + i) = *(ptr + j); 
                *(ptr + j) = t; 
            } 
        } 
    } 
  
    for (i = 0; i < n; i++) {
        int* resPtr = ptr + i;
        printf("%d ", *resPtr); 
    }
} 
  
int main() 
{ 
    int n = 6; 
    int arr[] = { -5, 116, 23, 14, 12, 9 }; 
  
    sort(n, arr); 
  
    return 0; 
}`

const mergeArrays = `int main()
{
    int i, j;
    // Declare arrays
    int a[5] = {1, 2, 3, 4, 5};
    int b[5] = {123, 6, 7, 8, 9, 10, 11, 12};

    int arr1size = sizeof(a) / sizeof(int);
    int arr2size = sizeof(b) / sizeof(int);
    int arr_resultsize = arr1size + arr2size;
    int c[arr_resultsize];

    for (i = 0; i < arr1size; i++)
    {
        c[i] = a[i];
    }

    for (i = 0, j = arr1size;
         j < arr_resultsize && i < arr2size; i++, j++)
    {
        c[j] = b[i];
    }

    for (i = 0; i < arr_resultsize; i++)
    {
        printf("%d ", c[i]);
    }
}`

const printFirstLetters = `int main() {
    char str[] = "C, Java, Python, CLang, Idris, OCaml, TypeScript";
    int i, j = 0;
    // Traversing the Character array
    for (i = 0; i < sizeof(str) - 1; i++)
    {
        if (i == 0 && str[i] != ' ') {
            printf("%c ", str[i]);
        }

        else {
            if (i > 0 && str[i - 1] == ' ') {
                printf("%c ", str[i]);
            }
        }
    }
    return 0;
}`

const checkPalindorme = `
int isPalindrome(char string[])
{
    char* ptr;
    char* rev;

    ptr = string;
    while (*ptr != '0') {
        ++ptr;
    }
    --ptr;

    rev = string;
    while (ptr >= rev) {
        if (*ptr == *rev) {
            --ptr;
            rev++;
        }
        else {
            break;
        }
    }

    if (rev > ptr){
         printf("String '%s' is Palindrome \n", string);
         return 1;
        }
    else {
        printf("String '%s' is not a Palindrome \n", string);
        return 0;
    }
}

int main()
{
    char str1[1000] = "madam";
    char str2[1000] = "madan";
    isPalindrome(str1);
    isPalindrome(str2);
    return 0;
}
`
const findLargestNumberInArray = `
#include <stdio.h>
#include <stdlib.h>
  
// Function to find the largest element
// using dynamic memory allocation
int findLargest(int* arr, int N)
{
    int i;
  
    // Traverse the array arr[]
    for (i = 1; i < N; i++) {
  
        // Update the largest element
        if (*arr < *(arr + i)) {
            *arr = *(arr + i);
        }
    }
  
    // Print the largest number
    printf("Largest number is %d ", *arr);
    return *arr;
}
  
int main()
{
    int i, N = 4;
  
    int* arr;
  
    // Memory allocation to arr
    arr = (int*)malloc(sizeof(int));
  
  
    // Store the elements
    *(arr + 0) = -14;
    *(arr + 1) = 12;
    *(arr + 2) = 139;
    *(arr + 3) = 20;
  
    // Function Call
    return findLargest(arr, N);
}
`
const findAverage = `float main() {
    float numbers[100] = {1, 5, 10, 8, 5};
    float sum = 0.0;
    float avg;
    int arrSize = sizeof(numbers) / sizeof(float);

    for (int i = 0; i < arrSize; ++i) {
        sum += numbers[i];
    }

    avg = sum / arrSize;
    printf("Average = %.2f", avg);
    return avg;
}`

export default [
  {
    title: 'Find factorial',
    code: findFactorial,
  },
  {
    title: 'Print first letter of each word',
    code: printFirstLetters,
  },
  {
    title: 'Sort array',
    code: sortArray,
  },
  { title: 'Merge two arrays', code: mergeArrays },

  { title: 'Check the word for being a palindrome', code: checkPalindorme },

  {
    title: 'Find the largest number in array',
    code: findLargestNumberInArray,
  },
  { title: 'Find average of array', code: findAverage },
]
